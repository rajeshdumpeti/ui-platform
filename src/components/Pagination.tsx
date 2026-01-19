import React from "react";
import { cn } from "../lib";
import { Icon } from "./Icon";

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  siblingCount?: number;
}

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

const getPages = (current: number, total: number, siblingCount: number) => {
  const totalNumbers = siblingCount * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (total <= totalBlocks) {
    return range(1, total);
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < total - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = range(1, totalNumbers);
    return [...leftRange, "...", total];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = range(total - totalNumbers + 1, total);
    return [1, "...", ...rightRange];
  }

  const middleRange = range(leftSibling, rightSibling);
  return [1, "...", ...middleRange, "...", total];
};

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      className,
      currentPage,
      totalPages,
      onPageChange,
      siblingCount = 1,
      ...props
    },
    ref
  ) => {
    const pages = getPages(currentPage, totalPages, siblingCount);
    const isPrevDisabled = currentPage <= 1;
    const isNextDisabled = currentPage >= totalPages;

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center gap-2", className)}
        {...props}
      >
        <button
          type="button"
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-600",
            isPrevDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-50"
          )}
          onClick={() => !isPrevDisabled && onPageChange?.(currentPage - 1)}
          disabled={isPrevDisabled}
          aria-label="Previous page"
        >
          <Icon name="chevron_left" size="sm" />
        </button>

        {pages.map((page, index) =>
          typeof page === "string" ? (
            <span key={`ellipsis-${index}`} className="px-2 text-neutral-500">
              {page}
            </span>
          ) : (
            <button
              key={page}
              type="button"
              className={cn(
                "min-w-[2rem] rounded-md border px-2 py-1 text-sm font-medium",
                page === currentPage
                  ? "border-primary-500 bg-primary-50 text-primary-700"
                  : "border-neutral-200 text-neutral-700 hover:bg-neutral-50"
              )}
              onClick={() => onPageChange?.(page)}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          )
        )}

        <button
          type="button"
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-600",
            isNextDisabled ? "opacity-40 cursor-not-allowed" : "hover:bg-neutral-50"
          )}
          onClick={() => !isNextDisabled && onPageChange?.(currentPage + 1)}
          disabled={isNextDisabled}
          aria-label="Next page"
        >
          <Icon name="chevron_right" size="sm" />
        </button>
      </div>
    );
  }
);

Pagination.displayName = "Pagination";
