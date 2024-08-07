import { useForm } from "react-hook-form";
import { TableForm } from "../models/Rows";
import { TABLE_STRUCTURE_CONFIG } from "../constants/tableFormConfig";

const useTableForm = () => {
  const { control, handleSubmit, setValue, getValues } = useForm<TableForm>();

  const updateColumnConfig = () => {
    console.log("Updating column config...");
    const COLUMN_CONFIG = TABLE_STRUCTURE_CONFIG.map((column) => ({
      ...column,
      Cell: ({ row }: { row: any }) => row.getValue(),
    }));
    // setUpdatedConfig(COLUMN_CONFIG);
    return COLUMN_CONFIG;
  };
  return {
    control,
    handleSubmit,
    setValue,
    getValues
  };
};

export default useTableForm;
