import { useEffect, useState } from "react";
import { OptionType } from "../../components/CustomizableAutocomplete";
import { Row } from "../../models/Rows";
import { TableFormContext } from "./TableForm.context";

const TableFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [options, setOptions] = useState<OptionType[]>([]);
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
  console.log("Table Provider > options", options);

  const getOptions = async () => {
    console.log("Ejecutando getOptions");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setOptions([
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
    ]);
  };

  const getTableData = () => console.log("Gettin' data");

  useEffect(() => {
    getOptions();
  }, []);
  return (
    <TableFormContext.Provider value={{ rows, getTableData, options }}>
      {children}
    </TableFormContext.Provider>
  );
};

export default TableFormProvider;
