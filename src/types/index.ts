export type UnitType =
  | "apartment"
  | "penthouse"
  | "townhouse"
  | "chalet"
  | "duplex"
  | "twin house"
  | "town house";

export type PropertyStatus = "available" | "reserved" | "sold" | "unavailable";

export interface PropertyListing {
  _id: string;
  unit_id: string;
  unit_type: UnitType;
  total_price: number;
  for_sale: boolean;
  photos: string[];
  bua?: number;
  status: string;
}

export interface APIResponse {
  data: PropertyListing[];
  total: number;
  limit: number;
  page: number;
}

export type SortOrder = "asc" | "desc";
export type SearchType = "unitId" | "unitType";

export interface Unit {
  id: string;
  type: string;
  bua: string;
  status: string;
  totalPrice: string;
  photos: string[];
}

export interface TableProps {
  listings: PropertyListing[];
  loading?: boolean;
  onSort?: (field: keyof PropertyListing) => void;
  sortField?: keyof PropertyListing;
  sortOrder?: SortOrder;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export interface FilterOptions {
  search?: string;
  searchType?: SearchType;
  status?: string[];
  unitType?: string[] | string;
}

export interface DropdownOption {
  value: string;
  label: string;
}

export interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  resultsPerPage: number;
}

export interface UnitsTableProps {
  units: Unit[];
  className?: string;
}

export interface SearchAndFiltersProps {
  className?: string;
  onFilterChange?: (filters: Partial<FilterOptions>) => void;
}

export interface PaginationComponentProps extends Partial<PaginationData> {
  onPageChange?: (page: number) => void;
  className?: string;
}
