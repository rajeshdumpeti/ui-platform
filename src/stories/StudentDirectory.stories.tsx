import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from "../components/Table";
import { Avatar } from "../components/Avatar";
import { Badge } from "../components/Badge";
import { Pagination } from "../components/Pagination";

const meta: Meta = {
  title: "Patterns/Student Directory",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

const rows = [
  {
    name: "Aarav Patel",
    id: "#2023001",
    className: "Class 10-A",
    guardian: "Rajesh Patel",
    contact: "+91 98765 43210",
    status: "Active",
    statusVariant: "success",
  },
  {
    name: "Diya Sharma",
    id: "#2023002",
    className: "Class 9-B",
    guardian: "Anjali Sharma",
    contact: "+91 91234 56789",
    status: "Active",
    statusVariant: "success",
  },
  {
    name: "Rohan Gupta",
    id: "#2023015",
    className: "Class 10-A",
    guardian: "Suresh Gupta",
    contact: "+91 99887 76655",
    status: "Inactive",
    statusVariant: "warning",
  },
];

export const DirectoryLayout: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "#" },
          { label: "Students", href: "#" },
          { label: "All Students" },
        ]}
      />

      <div className="space-y-2">
        <h1 className="text-display-medium text-neutral-900">
          Student Directory
        </h1>
        <p className="text-body-medium text-neutral-500">
          View and manage student records across all classes.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[16rem]">
          <Input
            fullWidth
            leftIcon={<Icon name="search" size="sm" />}
            placeholder="Search by name or admission number..."
          />
        </div>
        <Select
          options={[
            { label: "All Classes", value: "all" },
            { label: "Class 10-A", value: "10a" },
            { label: "Class 9-B", value: "9b" },
          ]}
        />
        <Button variant="secondary" leftIcon={<Icon name="filter_list" size="sm" />}>
          Filters
        </Button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Avatar</TableHeaderCell>
            <TableHeaderCell>Full Name</TableHeaderCell>
            <TableHeaderCell>Student ID</TableHeaderCell>
            <TableHeaderCell>Class</TableHeaderCell>
            <TableHeaderCell>Guardian</TableHeaderCell>
            <TableHeaderCell>Contact</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Avatar name={row.name} />
              </TableCell>
              <TableCell className="font-medium text-neutral-900">
                {row.name}
              </TableCell>
              <TableCell muted>{row.id}</TableCell>
              <TableCell>
                <Badge variant="info" size="xs">
                  {row.className}
                </Badge>
              </TableCell>
              <TableCell>{row.guardian}</TableCell>
              <TableCell muted>{row.contact}</TableCell>
              <TableCell>
                <Badge variant={row.statusVariant as "success" | "warning"} dot>
                  {row.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between text-sm text-neutral-600">
        <span>Rows per page: 10</span>
        <Pagination currentPage={1} totalPages={10} />
      </div>
    </div>
  ),
};
