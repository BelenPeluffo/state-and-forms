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
import { useContext } from "react";
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
import {
  TABLE_FORM_CELL_CONFIG,
  TABLE_STRUCTURE_CONFIG,
} from "../constants/tableFormConfig";
import TableFormAutocomplete from "../components/TableFormAutocomplete";
import { SubmitHandler } from "react-hook-form";
import { TableForm as TableInterface } from "../models/Rows";

const TableForm = () => {
  const { options, rows } = useContext(TableFormContext) as TableFormState;
  const { control, handleSubmit, setValue, getValues } = useTableForm();
  const COLUMN_CONFIG = TABLE_FORM_CELL_CONFIG.map((column) => ({
    ...column,
    control,
    options:
      column.type === "autocomplete" && options && options.length > 0
        ? options
        : undefined,
  }));
  const TABLE_CONFIG = TABLE_STRUCTURE_CONFIG.map((column, index) => ({
    ...column,
    cell: ({ row }: { row: any }) => {
      return COLUMN_CONFIG[index].type === "autocomplete" ? (
        <TableFormAutocomplete config={COLUMN_CONFIG[index]} />
      ) : (
        <Typography variant="h1">{row.renderValue(column.id)}</Typography>
      );
    },
  }));
  const tableManager = useReactTable({
    columns: TABLE_CONFIG,
    data: rows,
    getCoreRowModel: getCoreRowModel(),
  });
  const HEADERS = tableManager.getHeaderGroups()[0].headers;
  const ROWS = tableManager.getRowModel().rows;

  const onSubmit: SubmitHandler<TableInterface> = () => {
    console.log("submiting... > values?", getValues().rows);
  };

  console.log("getValues?", getValues().rows);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {HEADERS.map((header) => (
                <TableCell key={header.id}>
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default TableForm;
