import { useGetListingsQuery } from "@/store/api/listingsApi";
import { FilterOptions } from "@/types";

interface UseListingsQueryOptions {
  filters?: Partial<FilterOptions>;
  page?: number;
  limit?: number;
}

export const useListingsQuery = (options: UseListingsQueryOptions = {}) => {
  const { filters = {}, page = 1, limit = 8 } = options;

  const { data, isLoading, error, refetch } = useGetListingsQuery({
    page,
    limit,
    search: filters.search,
    status: filters.status || [],
    unitType: Array.isArray(filters.unitType)
      ? filters.unitType
      : [filters.unitType || ""],
    searchType: filters.searchType,
  });

  const totalPages = data ? Math.ceil(data.total / data.limit) : 0;

  return {
    listings: data?.data || [],
    total: data?.total || 0,
    totalPages,
    isLoading,
    hasError: !!error,
    errorMessage: error ? "Failed to load listings" : undefined,
    refetch,
  };
};
