import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext, useEffect } from "react";
import {
  type TableFormState,
  TableFormContext,
} from "../contexts/TableForm/TableForm.context";
import useTableForm from "../hooks/useTableForm";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";

const TableForm = () => {
  const { rows } = useContext(TableFormContext) as TableFormState;
  const {
    control,
    handleSubmit,
    setValue,
    // columnConfig,
    updatedConfig,
    setUpdatedConfig,
  } = useTableForm();
  console.log("TableForm > updatedConfig", updatedConfig);
  const tableManager = useReactTable({
    columns: updatedConfig,
    data: rows,
    getCoreRowModel: getCoreRowModel(),
  });
  const HEADERS = tableManager.getHeaderGroups()[0].headers;
  console.log("HEADERS?", HEADERS);

  const updateColumnConfig = () => {
    // if (columnConfig && columnConfig.length > 0) {
    //   console.log("Updating column config...");
    //   const COLUMN_CONFIG = columnConfig?.map((column) => ({
    //     ...column,
    //     Cell: ({ row }: { row: any }) => row.getValue(),
    //   }));
    //   setUpdatedConfig(COLUMN_CONFIG);
    // }
  };

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
                  {header.column.columnDef.header as string}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? "Hallo" : "No hay datos para mostrar"}
          </TableBody>
        </Table>
      </TableContainer>
    </form>
  );
};

export default TableForm;
