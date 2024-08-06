import { ReactElement, useEffect, useState } from "react";
import { LibroMatrizContext } from "./LibroMatriz.context";
import { LibroMatrizService } from "../../services";

const LibroMatrixProvider = ({ children }: { children: ReactElement }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getTableData();
  }, []);

  const getTableData = async (query?: string | null) => {
    try {
      const result = await LibroMatrizService.getLibroMatriz(query);
      setRows(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LibroMatrizContext.Provider value={{ rows, getTableData }}>
      {children}
    </LibroMatrizContext.Provider>
  );
};

export default LibroMatrixProvider;
