import Image from "next/image";
import { UNIT_ID_OPTIONS } from "@/data/constants";
import { MobileFilterModal } from "@/components/mobile/MobileFilterModal";
import { useState } from "react";

export const MobileSearchAndFilters = ({
  onFilterChange,
}: {
  onFilterChange?: (filters: {
    status?: string[];
    unitType?: string[];
    search?: string;
    searchType?: "unitId" | "unitType";
  }) => void;
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedSearchType, setSelectedSearchType] = useState<
    "unitId" | "unitType"
  >("unitId");
  const [searchValue, setSearchValue] = useState("");

  const handleDropdownToggle = (dropdownId: string) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const handleCloseDropdowns = () => {
    setOpenDropdown(null);
  };

  const handleFilterClick = () => {
    setIsFilterModalOpen(true);
  };

  const handleCloseFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleApplyFilters = (filters: {
    status: string[];
    unitType: string[];
  }) => {
    if (onFilterChange) {
      onFilterChange({
        status: filters.status,
        unitType: filters.unitType,
        search: searchValue,
        searchType: selectedSearchType,
      });
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 w-full h-7 z-10">
      <div className="flex flex-row justify-between items-center w-full h-7">
        <div className="flex flex-col items-start gap-[10px] w-full h-7 bg-white">
          <div className="flex flex-row items-center w-full h-7 border border-borderColor rounded">
            <div className="relative flex flex-col items-start w-full h-7 border-r border-borderColor z-20">
              <div
                className="flex flex-row items-center px-3 py-[6px] gap-2 w-full h-7 bg-primary rounded-l cursor-pointer"
                onClick={() => handleDropdownToggle("unitId")}
              >
                <span className="flex-1 font-normal text-[12px] leading-4 text-[#9E9E9E]">
                  {UNIT_ID_OPTIONS.find(
                    (opt) => opt.value === selectedSearchType
                  )?.label || "Unit ID"}
                </span>
                <div className="flex flex-col justify-center items-center w-3 h-3">
                  <Image
                    src="/dropdownicon.svg"
                    alt="Dropdown"
                    width={12}
                    height={12}
                    className="opacity-60"
                  />
                </div>
              </div>
              {openDropdown === "unitId" && (
                <div className="absolute top-8 left-0 z-10 flex flex-col items-start p-2 bg-white border border-borderColor rounded-lg shadow-md">
                  {UNIT_ID_OPTIONS.map((option) => (
                    <div
                      key={option.value}
                      className="flex flex-row items-center px-2 py-[6px] gap-4 w-[116px] h-[30px] rounded hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        const newSearchType = option.value as
                          | "unitId"
                          | "unitType";
                        setSelectedSearchType(newSearchType);
                        setSearchValue("");
                        onFilterChange?.({
                          search: "",
                          searchType: newSearchType,
                        });
                        handleCloseDropdowns();
                      }}
                    >
                      <span className="font-normal text-[14px] leading-[18px] text-black">
                        {option.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col items-start flex-1 w-[193px] h-7">
              <div className="flex flex-row items-center px-3 py-[6px] gap-2 w-[193px] h-7 bg-white rounded-r">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchValue(value);
                    onFilterChange?.({
                      search: value,
                      searchType: selectedSearchType,
                    });
                  }}
                  placeholder={
                    selectedSearchType === "unitType"
                      ? "Search for a unit type..."
                      : "Search for a unit ID..."
                  }
                  className="flex-1 font-normal text-[12px] leading-4 text-black placeholder-[#9E9E9E] bg-transparent border-none outline-none"
                />
                <div className="flex flex-col justify-center items-center w-4 h-4">
                  <Image
                    src="/searchicon.svg"
                    alt="Search"
                    width={16}
                    height={16}
                    className="opacity-60"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleFilterClick}
          className="flex flex-row justify-center items-center w-10 h-7 rounded-full hover:bg-gray-100 transition-colors"
        >
          <div className="w-5 h-5">
            <Image
              src="/filtericon.svg"
              alt="Filter"
              width={20}
              height={20}
              className="text-black"
            />
          </div>
        </button>
      </div>

      {openDropdown === "unitId" && (
        <div className="fixed inset-0 z-5" onClick={handleCloseDropdowns}></div>
      )}

      <MobileFilterModal
        isOpen={isFilterModalOpen}
        onClose={handleCloseFilterModal}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};
