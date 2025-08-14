/**
 * Property Listing Types
 * These interfaces define the shape of data from the API
 */

export interface PropertyListing {
  _id: string;
  unit_id: string;
  unit_type: 'apartment' | 'villa' | 'penthouse' | 'townhouse';
  total_price: number;
  for_sale: boolean;
  photos: string[];
  bua?: number; // Built-up area
}

export interface APIResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface SortParams {
  field: keyof PropertyListing;
  order: 'asc' | 'desc';
}

export interface SearchParams {
  unit_id?: string;
}

export interface ListingFilters extends PaginationParams, SearchParams {
  sort?: SortParams;
}

// Component Props Types
export interface TableProps {
  listings: PropertyListing[];
  loading?: boolean;
  onSort?: (field: keyof PropertyListing) => void;
  sortField?: keyof PropertyListing;
  sortOrder?: 'asc' | 'desc';
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

export interface LightboxProps {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  currentIndex?: number;
}

// Redux Store Types
export interface RootState {
  listings: ListingsState;
}

export interface ListingsState {
  data: PropertyListing[];
  loading: boolean;
  error: string | null;
  filters: ListingFilters;
  total: number;
}
