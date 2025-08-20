import { DropdownOption } from "@/types";

export const UNIT_ID_OPTIONS: DropdownOption[] = [
  { value: "unitId", label: "Unit ID" },
  { value: "unitType", label: "Unit Type" },
];

export const STATUS_OPTIONS: DropdownOption[] = [
  { value: "available", label: "Available" },
  { value: "sold", label: "Sold" },
  { value: "reserved", label: "Reserved" },
  { value: "unavailable", label: "Unavailable" },
];

export const UNIT_TYPE_OPTIONS: DropdownOption[] = [
  { value: "apartment", label: "Apartment" },
  { value: "penthouse", label: "Penthouse" },
  { value: "chalet", label: "Chalet" },
  { value: "duplex", label: "Duplex" },
  { value: "twin house", label: "Twin House" },
  { value: "town house", label: "Town House" },
];
