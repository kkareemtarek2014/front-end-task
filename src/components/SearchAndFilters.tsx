"use client";
import React from "react";
import Image from "next/image";
import { useDropdown } from "@/hooks/useDropdown";
import {
  UNIT_ID_OPTIONS,
  STATUS_OPTIONS,
  UNIT_TYPE_OPTIONS,
} from "@/data/constants";
import { SearchAndFiltersProps } from "@/types";
import { FilterDropdown } from "@/components/FilterDropdown";

export const SearchAndFilters = ({
  className = "",
  onFilterChange,
}: SearchAndFiltersProps) => {
  const { handleDropdownToggle, handleCloseDropdowns, isDropdownOpen } =
    useDropdown();

  const [searchValue, setSearchValue] = React.useState("");
  const [selectedSearchType, setSelectedSearchType] = React.useState("unitId");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onFilterChange?.({
      search: value,
      searchType: selectedSearchType as "unitId" | "unitType",
    });
  };

  const handleUnitIdOptionSelect = (value: string) => {
    setSelectedSearchType(value);
    setSearchValue("");
    onFilterChange?.({
      search: "",
      searchType: value as "unitId" | "unitType",
    });
    handleCloseDropdowns();
  };

  const getSelectedLabel = () => {
    const option = UNIT_ID_OPTIONS.find(
      (opt) => opt.value === selectedSearchType
    );
    return option?.label || "Unit ID";
  };

  const getSearchPlaceholder = () => {
    return selectedSearchType === "unitType"
      ? "Search for a unit type..."
      : "Search for a unit ID...";
  };

  const handleStatusChange = (values: string[]) => {
    onFilterChange?.({ status: values });
  };

  const handleUnitTypeChange = (values: string[]) => {
    onFilterChange?.({ unitType: values });
  };

  return (
    <div
      className={`flex flex-row justify-between items-center pb-3 w-[1140px] h-10 z-10 ${className}`}
    >
      <div className="flex flex-col items-start gap-[10px] w-[337px] h-7 bg-white">
        <div className="flex flex-row items-center border border-borderColor rounded">
          <div className="relative flex flex-col items-start w-[116px] h-7 border-r border-borderColor z-20">
            <div
              className="flex flex-row items-center px-3 py-[6px] gap-2 w-[116px] h-7 bg-primary rounded-l cursor-pointer"
              onClick={() => handleDropdownToggle("unitId")}
            >
              <span className="flex-1 font-normal text-[12px] leading-4 text-[#9E9E9E]">
                {getSelectedLabel()}
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
            {isDropdownOpen("unitId") && (
              <div className="absolute top-8 left-0 z-10 flex flex-col items-start p-2 bg-white border border-borderColor rounded-lg shadow-md">
                {UNIT_ID_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    className="flex flex-row items-center px-2 py-[6px] gap-4 w-[116px] h-[30px] rounded hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleUnitIdOptionSelect(option.value)}
                  >
                    <span className="font-normal text-[14px] leading-[18px] text-black">
                      {option.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col items-start flex-1 w-[221px] h-7">
            <div className="flex flex-row items-center px-3 py-[6px] gap-2 w-[221px] h-7 bg-white rounded-r">
              <input
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder={getSearchPlaceholder()}
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

      <div className="flex flex-row items-start gap-2 w-[267px] h-7">
        <FilterDropdown
          options={STATUS_OPTIONS}
          placeholder="Status: all"
          width="116px"
          isOpen={isDropdownOpen("status")}
          onToggle={() => handleDropdownToggle("status")}
          onClose={handleCloseDropdowns}
          onChange={handleStatusChange}
        />

        <FilterDropdown
          options={UNIT_TYPE_OPTIONS}
          placeholder="Unit Type"
          width="143px"
          isOpen={isDropdownOpen("unitType")}
          onToggle={() => handleDropdownToggle("unitType")}
          onClose={handleCloseDropdowns}
          onChange={handleUnitTypeChange}
        />
      </div>

      {isDropdownOpen("unitId") && (
        <div className="fixed inset-0 z-5" onClick={handleCloseDropdowns}></div>
      )}
    </div>
  );
};
