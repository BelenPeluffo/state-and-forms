import { OptionType } from "../../components/CustomizableAutocomplete";
import { Row } from "../../models/Rows";
import { TableFormContext } from "./TableForm.context";

const TableFormProvider = ({ children }: { children: React.ReactNode }) => {
  const rows: Row[] = [
    {
      name: "Row 1",
      zodiacSign: 1,
    },
    {
      name: "Row 2",
      zodiacSign: 2,
    },
  ];
  const options: OptionType[] = [
    {
      id: 1,
      value: "leo",
      label: "Leo",
    },
    {
      id: 2,
      value: "virgo",
      label: "Virgo",
    },
  ];

  const getTableData = () => console.log("Gettin' data");
  return (
    <TableFormContext.Provider value={{ rows, getTableData, options }}>
      {children}
    </TableFormContext.Provider>
  );
};

export default TableFormProvider;
