import { useState, useEffect } from "react";
import Image from "next/image";
import { UNIT_TYPE_OPTIONS } from "@/data/constants";
import { CloseIcon } from "../icons/CloseIcon";

interface MobileFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: { status: string[]; unitType: string[] }) => void;
}

interface FilterOption {
  value: string;
  label: string;
  checked: boolean;
}

export const MobileFilterModal = ({
  isOpen,
  onClose,
  onApplyFilters,
}: MobileFilterModalProps) => {
  const [statusFilters, setStatusFilters] = useState<FilterOption[]>([
    { value: "all", label: "All", checked: true },
    { value: "available", label: "Available", checked: false },
    { value: "unavailable", label: "Unavailable", checked: false },
    { value: "reserved", label: "Reserved", checked: false },
    { value: "sold", label: "Sold", checked: false },
  ]);

  const [unitTypeFilters, setUnitTypeFilters] = useState<FilterOption[]>(
    UNIT_TYPE_OPTIONS.map((option) => ({
      value: option.value,
      label: option.label,
      checked: false,
    }))
  );

  const handleStatusChange = (value: string) => {
    if (value === "all") {
      setStatusFilters((prev) =>
        prev.map((filter) => ({
          ...filter,
          checked: filter.value === "all",
        }))
      );
    } else {
      setStatusFilters((prev) =>
        prev.map((filter) => {
          if (filter.value === "all") {
            return { ...filter, checked: false };
          } else if (filter.value === value) {
            return { ...filter, checked: !filter.checked };
          } else {
            return filter;
          }
        })
      );
    }
  };

  const handleUnitTypeChange = (value: string) => {
    setUnitTypeFilters((prev) =>
      prev.map((filter) => ({
        ...filter,
        checked: filter.value === value ? !filter.checked : filter.checked,
      }))
    );
  };

  const handleResetAll = () => {
    setStatusFilters((prev) =>
      prev.map((filter) => ({
        ...filter,
        checked: filter.value === "all",
      }))
    );
    setUnitTypeFilters((prev) =>
      prev.map((filter) => ({
        ...filter,
        checked: false,
      }))
    );
  };

  const handleApply = () => {
    const selectedStatuses = statusFilters
      .filter((f) => f.checked && f.value !== "all")
      .map((f) => f.value);

    const selectedUnitTypes = unitTypeFilters
      .filter((f) => f.checked)
      .map((f) => f.value);

    if (onApplyFilters) {
      onApplyFilters({
        status: selectedStatuses,
        unitType: selectedUnitTypes,
      });
    }

    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-end justify-center">
        <div
          className={`w-full max-h-[578px] bg-white border border-borderColor rounded-t-lg shadow-xl transform transition-transform duration-300 ease-out animate-slide-up  ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex flex-row items-center p-4 gap-2 w-full h-16">
            <h2 className="flex-1 font-bold text-[18px] leading-[23px] text-black ">
              Filters
            </h2>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 bg-white rounded-full"
            >
              <CloseIcon className="w-[10px] h-[10px] text-black" />
            </button>
          </div>

          <div className="flex flex-col items-start px-4 pb-10 gap-4 w-full h-[494px] overflow-y-auto">
            <div className="flex flex-col items-start w-full border-b border-borderColor pb-6">
              <h3 className="font-medium text-[14px] leading-[18px] text-black  mb-3">
                Status
              </h3>
              <div className="flex flex-col items-start w-full gap-0">
                {statusFilters.map((filter) => (
                  <div
                    key={filter.value}
                    className="flex flex-row items-center px-2 py-[6px] gap-4 w-full h-[30px] rounded hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleStatusChange(filter.value)}
                  >
                    <div className="relative">
                      <div
                        className={`w-4 h-4 border rounded cursor-pointer flex items-center justify-center ${
                          filter.checked
                            ? "bg-black border-black"
                            : "bg-white border-[#9E9E9E]"
                        }`}
                      >
                        {filter.checked && (
                          <Image
                            src="/checkicon.svg"
                            alt="check"
                            width={10}
                            height={10}
                          />
                        )}
                      </div>
                    </div>
                    <label className="font-normal text-[14px] leading-[18px] text-black cursor-pointer flex-1">
                      {filter.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start w-full border-b border-borderColor pb-6">
              <h3 className="font-medium text-[14px] leading-[18px] text-black  mb-3">
                Unit Types
              </h3>
              <div className="flex flex-col items-start w-full gap-0">
                {unitTypeFilters.map((filter) => (
                  <div
                    key={filter.value}
                    className="flex flex-row items-center px-2 py-[6px] gap-4 w-full h-[30px] rounded hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleUnitTypeChange(filter.value)}
                  >
                    <div className="relative">
                      <div
                        className={`w-4 h-4 border rounded cursor-pointer flex items-center justify-center ${
                          filter.checked
                            ? "bg-black border-black"
                            : "bg-white border-[#9E9E9E]"
                        }`}
                      >
                        {filter.checked && (
                          <Image
                            src="/checkicon.svg"
                            alt="check"
                            width={10}
                            height={10}
                          />
                        )}
                      </div>
                    </div>
                    <label className="font-normal text-[14px] leading-[18px] text-black cursor-pointer flex-1">
                      {filter.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-14 bg-white px-4 py-3 flex items-center gap-3">
            <button
              onClick={handleResetAll}
              className="flex-1 h-8 bg-white border border-[#CFCFCF] rounded text-center font-medium text-[12px] leading-[16px] text-black  hover:bg-gray-50 transition-colors"
            >
              Reset All Filters
            </button>
            <button
              onClick={handleApply}
              className="flex-1 h-8 bg-black rounded text-center font-medium text-[12px] leading-[16px] text-white  hover:bg-gray-800 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
