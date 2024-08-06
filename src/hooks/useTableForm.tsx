import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, TableForm } from "../models/Rows";
import { AccessorFnColumnDef } from "@tanstack/react-table";
import { TABLE_STRUCTURE_CONFIG } from "../constants/tableFormConfig";

const useTableForm = () => {
  const { control, handleSubmit, setValue, getValues } = useForm<TableForm>();
  const [updatedConfig, setUpdatedConfig] = useState<
    AccessorFnColumnDef<Row, string | number>[]
  >(TABLE_STRUCTURE_CONFIG);
  //   const columnConfig = useMemo(() => {
  //     console.log("useTableForm > columnConfig", updatedConfig);
  //     return updatedConfig.map((column, index) => ({
  //       ...TABLE_STRUCTURE_CONFIG[index],
  //       ...column,
  //     }));
  //   }, [updatedConfig]);
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
    updatedConfig,
    setUpdatedConfig,
    // columnConfig,
    getValues
  };
};

export default useTableForm;
