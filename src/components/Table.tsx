import React from "react";
import { cn } from "../lib";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  dense?: boolean;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, dense = false, ...props }, ref) => (
    <div className="w-full overflow-x-auto rounded-xl border border-neutral-200 bg-white">
      <table
        ref={ref}
        className={cn(
          "w-full border-separate border-spacing-0 text-sm text-neutral-700",
          dense ? "text-xs" : "text-sm",
          className
        )}
        {...props}
      />
    </div>
  )
);

export interface TableHeadProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  TableHeadProps
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("bg-neutral-50 text-neutral-600", className)}
    {...props}
  />
));

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  TableBodyProps
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("bg-white", className)} {...props} />
));

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {
  hoverable?: boolean;
}

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, hoverable = true, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(hoverable && "hover:bg-neutral-50", className)}
      {...props}
    />
  )
);

export interface TableHeaderCellProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "center" | "right";
}

export const TableHeaderCell = React.forwardRef<
  HTMLTableCellElement,
  TableHeaderCellProps
>(({ className, align = "left", ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600",
      align === "center" && "text-center",
      align === "right" && "text-right",
      "border-b border-neutral-200",
      className
    )}
    {...props}
  />
));

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "center" | "right";
  muted?: boolean;
}

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, align = "left", muted = false, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        "px-4 py-4 border-b border-neutral-200",
        align === "center" && "text-center",
        align === "right" && "text-right",
        muted && "text-neutral-500",
        className
      )}
      {...props}
    />
  )
);

Table.displayName = "Table";
TableHead.displayName = "TableHead";
TableBody.displayName = "TableBody";
TableRow.displayName = "TableRow";
TableHeaderCell.displayName = "TableHeaderCell";
TableCell.displayName = "TableCell";
