import { useState } from "react";
import { FilterOptions } from "@/types";
import { useListingsQuery } from "@/hooks/useListingsQuery";
import { ListingsToUnits } from "@/utils/dataListing";
import { SearchAndFilters } from "@/components/SearchAndFilters";
import { UnitsTable } from "@/components/UnitsTable";
import { Pagination } from "@/components/general/Pagination";
import { MobileUnits } from "@/components/mobile/MobileUnits";

export const Units = () => {
  const [filters, setFilters] = useState<Partial<FilterOptions>>({
    status: [],
  });
  const [currentPage, setCurrentPage] = useState(1);

  const { listings, total, totalPages, hasError, errorMessage } =
    useListingsQuery({ filters, page: currentPage, limit: 8 });

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => setCurrentPage(page);

  const units = ListingsToUnits(listings);

  if (hasError) {
    return (
      <div className="text-red-500 my-4 text-center flex justify-center items-center">
        Error in fetching units: {errorMessage}
      </div>
    );
  }

  return (
    <>
      <div className="hidden lg:flex flex-col items-start p-0 gap-6 w-[1164px] h-[804px] py-6">
        <h1 className="text-2xl font-bold text-gray-900">Units</h1>
        <SearchAndFilters onFilterChange={handleFilterChange} />
        <div className="w-full flex-1">
          <UnitsTable units={units} />
        </div>
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalResults={total}
          totalPages={totalPages}
          resultsPerPage={8}
        />
      </div>

      <div className="lg:hidden w-full">
        <MobileUnits units={units} onFilterChange={handleFilterChange} />
        <Pagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalResults={total}
          totalPages={totalPages}
          resultsPerPage={8}
        />
      </div>
    </>
  );
};
