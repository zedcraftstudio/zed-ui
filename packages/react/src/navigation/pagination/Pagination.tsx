import { forwardRef, type ReactNode } from "react";
import { useComponentDefaults } from "@zed-ui/themes";
import { cx } from "@zed-ui/utils";
import type { ZedSize } from "../../shared/types";

export type PaginationOwnProps = {
  "aria-label"?: string;
  className?: string;
  count: number;
  disabled?: boolean;
  onPageChange?: (page: number) => void;
  page: number;
  showEdges?: boolean;
  siblingCount?: number;
  size?: ZedSize;
};

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

type PageItem = number | "ellipsis";

function getPageItems(count: number, page: number, siblingCount: number, showEdges: boolean): PageItem[] {
  const totalNumbers = siblingCount * 2 + 3 + (showEdges ? 2 : 0);
  if (count <= totalNumbers) {
    return range(1, count);
  }

  const leftSibling = Math.max(page - siblingCount, 1);
  const rightSibling = Math.min(page + siblingCount, count);
  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < count - 1;

  if (!showLeftEllipsis && showRightEllipsis) {
    return [...range(1, 3 + siblingCount * 2), "ellipsis", count];
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    return [1, "ellipsis", ...range(count - (3 + siblingCount * 2), count)];
  }

  return [1, "ellipsis", ...range(leftSibling, rightSibling), "ellipsis", count];
}

function PageButton({
  active = false,
  children,
  disabled,
  onClick,
  size
}: {
  active?: boolean;
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  size: ZedSize;
}) {
  return (
    <button
      aria-current={active ? "page" : undefined}
      className="zui-pagination__item"
      data-active={active ? "" : undefined}
      data-size={size}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export const Pagination = forwardRef<HTMLElement, PaginationOwnProps>(function Pagination(
  {
    "aria-label": ariaLabel = "Pagination",
    className,
    count,
    disabled = false,
    onPageChange,
    page,
    showEdges = true,
    siblingCount = 1,
    size: sizeProp
  },
  ref
) {
  const defaults = useComponentDefaults("Pagination");
  const size = (sizeProp ?? (defaults?.size as ZedSize | undefined) ?? "md") as ZedSize;
  const items = getPageItems(count, page, siblingCount, showEdges);

  return (
    <nav ref={ref as never} aria-label={ariaLabel} className={cx("zui-pagination", className)}>
      <div className="zui-pagination__list" data-size={size}>
        <PageButton
          disabled={disabled || page <= 1}
          size={size}
          onClick={() => onPageChange?.(page - 1)}
        >
          Prev
        </PageButton>
        {items.map((item, index) =>
          item === "ellipsis" ? (
            <span key={`ellipsis-${index}`} aria-hidden className="zui-pagination__ellipsis">
              …
            </span>
          ) : (
            <PageButton
              key={item}
              active={item === page}
              disabled={disabled}
              size={size}
              onClick={() => onPageChange?.(item as number)}
            >
              {item}
            </PageButton>
          )
        )}
        <PageButton
          disabled={disabled || page >= count}
          size={size}
          onClick={() => onPageChange?.(page + 1)}
        >
          Next
        </PageButton>
      </div>
    </nav>
  );
});

Pagination.displayName = "Pagination";
