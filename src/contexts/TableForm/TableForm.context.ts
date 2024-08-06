import { createContext } from "react";
import { Row } from "../../models/Rows";

export interface TableFormState {
  rows: Row[];
  getTableData: () => void;
}

export const TableFormContext = createContext<TableFormState | null>(null);
