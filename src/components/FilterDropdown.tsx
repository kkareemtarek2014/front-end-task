import { useState } from "react";
import Image from "next/image";

interface Option {
  value: string;
  label: string;
  checked?: boolean;
}

interface FilterDropdownProps {
  options: Option[];
  placeholder?: string;
  value?: string[];
  onChange?: (values: string[]) => void;
  className?: string;
  width?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
}

export const FilterDropdown = ({
  options,
  placeholder = "Select...",
  value = [],
  onChange,
  className = "",
  width = "116px",
  isOpen = false,
  onToggle,
  onClose,
}: FilterDropdownProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(value);

  const handleToggle = () => {
    onToggle?.();
  };

  const handleOptionToggle = (optionValue: string) => {
    const newSelectedValues = selectedValues.includes(optionValue)
      ? selectedValues.filter((v) => v !== optionValue)
      : [...selectedValues, optionValue];

    setSelectedValues(newSelectedValues);
    onChange?.(newSelectedValues);
  };

  const handleClear = () => {
    setSelectedValues([]);
    onChange?.([]);
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) {
      return placeholder;
    }
    if (selectedValues.length === 1) {
      const option = options.find((opt) => opt.value === selectedValues[0]);
      return option?.label || selectedValues[0];
    }
    return `${selectedValues.length} selected`;
  };

  return (
    <div className={`relative ${className}`}>
      <div
        onClick={handleToggle}
        className={`flex flex-row items-center justify-between px-3 py-[6px] gap-1 h-7 bg-white border border-borderColor rounded cursor-pointer`}
        style={{ width }}
      >
        <span className="font-medium text-[12px] leading-4 text-[#9E9E9E] truncate">
          {getDisplayText()}
        </span>
        <div className="w-6 h-6 flex items-center justify-center">
          <Image
            src="/dropdownicon.svg"
            alt="Dropdown"
            width={12}
            height={8}
            className="opacity-40"
          />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-10 left-0 z-10 flex flex-col items-start p-0 bg-white border border-borderColor rounded-lg shadow-md">
          <div
            className="flex flex-row items-center px-2 py-[6px] gap-4 w-[166px] h-[30px] rounded-t-lg hover:bg-gray-50 cursor-pointer border-b border-borderColor"
            onClick={handleClear}
          >
            <span className="font-medium text-[12px] leading-[18px] text-[#9E9E9E]">
              Clear
            </span>
          </div>

          <div className="p-2 w-full">
            {options.map((option, index) => (
              <div
                key={option.value}
                className="flex flex-row items-center px-2 py-[6px] gap-4 w-[166px] h-[30px] rounded hover:bg-gray-50 cursor-pointer"
                onClick={() => handleOptionToggle(option.value)}
              >
                <div className="flex flex-row items-center gap-[6px] flex-1">
                  <div
                    className={`flex flex-col justify-center items-center w-4 h-4 border rounded cursor-pointer ${
                      selectedValues.includes(option.value)
                        ? "bg-black border-black"
                        : "bg-white border-[#9E9E9E]"
                    }`}
                  >
                    {selectedValues.includes(option.value) && (
                      <Image
                        src="/checkicon.svg"
                        alt="check"
                        width={10}
                        height={10}
                      />
                    )}
                  </div>

                  <span className="font-normal text-[14px] leading-[18px] text-black">
                    {option.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-5" onClick={() => onClose?.()}></div>
      )}
    </div>
  );
};
