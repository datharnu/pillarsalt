import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Button,
} from "@nextui-org/react";
import { users } from "../../utils/users";

export default function LargeScreenTable() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 7;

  const colors = [
    "#FFFFFF",
    "#FAFAFA",
    "#FFFFFF",
    "#FAFAFA",
    "#FFFFFF",
    "#FAFAFA",
  ];

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page]);

  const handleNextPage = () => {
    setPage((prev) => (prev < pages ? prev + 1 : prev));
  };

  const handlePreviousPage = () => {
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="shadow-md sm:hidden mt-5 ">
      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center space-x-2">
            <Button
              size="sm"
              variant="flat"
              color="secondary"
              onClick={handlePreviousPage}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Pagination
              isCompact
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
            <Button
              size="sm"
              variant="flat"
              color="secondary"
              onClick={handleNextPage}
              disabled={page === pages}
            >
              Next
            </Button>
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key="id" className="bg-[#ECF2BA]">
            S/N
          </TableColumn>
          <TableColumn key="date" className="bg-[#ECF2BA]">
            Date
          </TableColumn>
          <TableColumn key="transaction" className="bg-[#ECF2BA]">
            Transaction Reference
          </TableColumn>
          <TableColumn key="amount" className="bg-[#ECF2BA]">
            Amount
          </TableColumn>
          <TableColumn key="status" className="bg-[#ECF2BA]">
            Status
          </TableColumn>
          <TableColumn key="narration" className="bg-[#ECF2BA]">
            Narration
          </TableColumn>
          <TableColumn key="action" className="bg-[#ECF2BA]">
            Action
          </TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow
              key={item.id}
              className="text-md font-light text-center flex-col   "
              style={{
                backgroundColor: colors[(item.id - 1) % colors.length],
                borderBottom: "1px solid #E5E7EB",
              }}
            >
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.transaction}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>
                <span
                  className={`rounded-3xl px-3 py-[1.5px] text-white ${
                    item.status === "Complete"
                      ? "bg-green-500"
                      : "bg-orange-500"
                  }`}
                >
                  {item.status}
                </span>
              </TableCell>
              <TableCell>{item.narration}</TableCell>
              <TableCell>{item.action}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
