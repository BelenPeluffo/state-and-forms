/* eslint-disable @typescript-eslint/no-explicit-any */
import { createColumnHelper } from "@tanstack/react-table";
import { FormField } from "../models/FormField";
import { Row, TableForm } from "../models/Rows";
import { OptionType } from "../components/CustomizableAutocomplete";
import { Control } from "react-hook-form";

export interface CellConfig extends FormField {
  name: keyof Row;
  options?: OptionType[];
  control?: Control<TableForm, keyof TableForm>;
  rowId: number;
}

export const TABLE_FORM_CELL_CONFIG: CellConfig[] = [
  {
    name: "name",
    label: "Nombre",
    type: "display",
    required: false,
    rowId: 0
  },
  {
    name: "sunSign",
    label: "Signo solar",
    type: "autocomplete",
    placeholder: "Select your sign",
    required: true,
    rowId: 0
  },
  {
    name: "moonSign",
    label: "Signo lunar",
    type: "autocomplete",
    placeholder: "Select your sign",
    required: true,
    rowId: 0
  },
];

export const columnHelper = createColumnHelper<Row>();

export const TABLE_STRUCTURE_CONFIG = TABLE_FORM_CELL_CONFIG.map((column) =>
  columnHelper.accessor((row) => row[column.name], {
    id: column.name,
    header: column.label,
  })
);
