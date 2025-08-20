import { PaginationComponentProps } from "@/types";
import { Arrow } from "../icons/Arrow";

export const Pagination = ({
  currentPage = 1,
  totalPages = 40,
  totalResults = 56,
  resultsPerPage = 8,
  onPageChange,
}: PaginationComponentProps) => {
  const handlePageChange = (page: number) => {
    if (
      onPageChange &&
      page !== currentPage &&
      page >= 1 &&
      page <= totalPages
    ) {
      onPageChange(page);
    }
  };

  const renderPaginationButton = (page: number, isActive: boolean = false) => (
    <button
      key={page}
      onClick={() => handlePageChange(page)}
      className={`w-[30px] h-[30px] flex items-center justify-center rounded-full text-[11px] font-medium leading-[14px] tracking-[1px] uppercase transition-colors ${
        isActive
          ? "bg-black text-white"
          : "bg-white border border-borderColor text-[#9E9E9E] hover:border-gray-300"
      }`}
    >
      {page}
    </button>
  );

  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  return (
    <div
      className={`relative flex items-center justify-center w-full pb-10 lg:flex-row flex-col gap-6`}
    >
      <div className="flex items-center gap-2 justify-center lg:ml-auto">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-6 h-6 flex items-center justify-center disabled:opacity-50"
        >
          <Arrow className="w-2 h-3 text-black rotate-180" />
        </button>

        <div className="flex items-center gap-2">
          {renderPaginationButton(1, currentPage === 1)}

          {(() => {
            const pages = [];
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPages - 1, currentPage + 1);

            if (startPage > 2) {
              pages.push(
                <div
                  key="ellipsis-start"
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white text-[#9E9E9E] text-[11px] font-medium leading-[14px] tracking-[1px] uppercase"
                >
                  ...
                </div>
              );
            }

            for (let i = startPage; i <= endPage; i++) {
              pages.push(renderPaginationButton(i, currentPage === i));
            }

            if (endPage < totalPages - 1) {
              pages.push(
                <div
                  key="ellipsis-end"
                  className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-white text-[#9E9E9E] text-[11px] font-medium leading-[14px] tracking-[1px] uppercase"
                >
                  ...
                </div>
              );
            }

            return pages;
          })()}

          {totalPages > 1 &&
            renderPaginationButton(totalPages, currentPage === totalPages)}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-6 h-6 flex items-center justify-center disabled:opacity-50"
        >
          <Arrow className="w-2 h-3 text-black" />
        </button>
      </div>

      <div className="relative  lg:ml-auto text-[14px] leading-[18px] tracking-[1px] text-[#9E9E9E]">
        {startResult}-{endResult} of {totalResults} Results
      </div>
    </div>
  );
};
