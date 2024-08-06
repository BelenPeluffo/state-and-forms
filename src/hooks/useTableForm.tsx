import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { TABLE_STRUCTURE_CONFIG } from "../constants/tableFormConfig";
import { Row, TableForm } from "../models/Rows";
import { AccessorFnColumnDef } from "@tanstack/react-table";

const useTableForm = () => {
  const { control, handleSubmit, setValue } = useForm<TableForm>();
  const [updatedConfig, setUpdatedConfig] = useState<
    AccessorFnColumnDef<Row, Row>[]
  >(TABLE_STRUCTURE_CONFIG);
//   const columnConfig = useMemo(() => {
//     console.log("useTableForm > columnConfig", updatedConfig);
//     return updatedConfig.map((column, index) => ({
//       ...TABLE_STRUCTURE_CONFIG[index],
//       ...column,
//     }));
//   }, [updatedConfig]);
  return {
    control,
    handleSubmit,
    setValue,
    updatedConfig,
    setUpdatedConfig,
    // columnConfig,
  };
};

export default useTableForm;
