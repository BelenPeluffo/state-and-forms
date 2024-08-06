import { createContext } from "react";
import { Row } from "../../models/Rows";
import { OptionType } from "../../components/CustomizableAutocomplete";

export interface TableFormState {
  rows: Row[];
  getTableData: () => void;
  options: OptionType[];
}

export const TableFormContext = createContext<TableFormState | null>(null);
