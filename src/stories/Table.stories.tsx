import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from "../components/Table";
import { Avatar } from "../components/Avatar";
import { Badge } from "../components/Badge";
import { Pagination } from "../components/Pagination";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

const students = [
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
  {
    name: "Ananya Singh",
    id: "#2023089",
    className: "Class 8-C",
    guardian: "Priya Singh",
    contact: "+91 88776 65544",
    status: "Active",
    statusVariant: "success",
  },
  {
    name: "Kabir Mehta",
    id: "#2023042",
    className: "Class 11-B",
    guardian: "Vikram Mehta",
    contact: "+91 77665 54433",
    status: "Active",
    statusVariant: "success",
  },
];

export const StudentDirectory: Story = {
  render: () => (
    <div className="space-y-4">
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
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <Avatar name={student.name} />
              </TableCell>
              <TableCell className="font-medium text-neutral-900">
                {student.name}
              </TableCell>
              <TableCell muted>{student.id}</TableCell>
              <TableCell>
                <Badge variant="info" size="xs">
                  {student.className}
                </Badge>
              </TableCell>
              <TableCell>{student.guardian}</TableCell>
              <TableCell muted>{student.contact}</TableCell>
              <TableCell>
                <Badge variant={student.statusVariant as "success" | "warning"} dot>
                  {student.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between text-sm text-neutral-600">
        <span>Showing 1 to 5 of 245</span>
        <Pagination currentPage={1} totalPages={10} />
      </div>
    </div>
  ),
};
