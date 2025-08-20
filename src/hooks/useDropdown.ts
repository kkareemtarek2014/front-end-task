import { useState, useCallback } from "react";

export const useDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = useCallback((dropdownId: string) => {
    setOpenDropdown((prevOpen) =>
      prevOpen === dropdownId ? null : dropdownId
    );
  }, []);

  const handleCloseDropdowns = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const isDropdownOpen = useCallback(
    (dropdownId: string) => {
      return openDropdown === dropdownId;
    },
    [openDropdown]
  );

  return {
    openDropdown,
    handleDropdownToggle,
    handleCloseDropdowns,
    isDropdownOpen,
  };
};

export type UseDropdownReturn = ReturnType<typeof useDropdown>;
