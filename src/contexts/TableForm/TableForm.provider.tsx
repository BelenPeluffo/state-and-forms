import { Row } from "../../models/Rows";
import { TableFormContext } from "./TableForm.context";

const TableFormProvider = ({ children }: { children: React.ReactNode }) => {
  const rows: Row[] = [];

  const getTableData = () => console.log("Gettin' data");
  return (
    <TableFormContext.Provider value={{ rows, getTableData }}>
      {children}
    </TableFormContext.Provider>
  );
};

export default TableFormProvider;
