/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext, useEffect } from "react";
import {
  type TableFormState,
  TableFormContext,
} from "../contexts/TableForm/TableForm.context";
import useTableForm from "../hooks/useTableForm";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TABLE_STRUCTURE_CONFIG } from "../constants/tableFormConfig";

const TableForm = () => {
  const { options, rows } = useContext(TableFormContext) as TableFormState;
  const {
    control,
    handleSubmit,
    setValue,
    // columnConfig,
    updatedConfig,
    setUpdatedConfig,
    getValues,
  } = useTableForm();
  console.log("TableForm > updatedConfig", updatedConfig);
  const COLUMN_CONFIG = TABLE_STRUCTURE_CONFIG.map((column, index) => ({
    ...column,
    // Cell: ({ row }: { row: any }) => {
    //   setValue(`rows.${index}.${column.id as keyof Row}`, row.getValue());
    //   return <Typography>{row.getValue()}</Typography>; // row.getValue();
    // },
    cell: ({ row }: { row: any }) => {
      console.log("row?", row);
      console.log("row.getParentRow()?", row.getParentRow());
      return (
        <Typography variant="h1">{row.renderValue(column.id)}</Typography>
      );
    },
  }));
  console.log("TableForm > COLUMN_CONFIG", COLUMN_CONFIG);
  console.log("getValues?", getValues().rows);
  const tableManager = useReactTable({
    columns: COLUMN_CONFIG,
    data: rows,
    getCoreRowModel: getCoreRowModel(),
  });
  const HEADERS = tableManager.getHeaderGroups()[0].headers;
  const ROWS = tableManager.getRowModel().rows;

  useEffect(() => {
    // updateColumnConfig();
  });
  return (
    <form>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {HEADERS.map((header) => (
                <TableCell key={header.id}>
                  {/* {header.column.columnDef.header as string}
                   */}
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row.id}>
                {/* {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))} */}
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
};

export default TableForm;
