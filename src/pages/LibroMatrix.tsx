import { useLocation, useSearchParams } from "react-router-dom";
import { useCallback, useContext } from "react";
import { LibroMatrizContext } from "../contexts";
import { LibroMatriz } from "../contexts/LibroMatriz/LibroMatriz.context";
import { LibroMatrixTable, LibroMatrizFilters } from "../components";

const LibroMatrix = () => {
  const { rows, getTableData } = useContext(LibroMatrizContext) as LibroMatriz;
  const [searchParams] = useSearchParams({});
  console.log("searchParams?", searchParams);
  const location = useLocation();

  console.log("location?", location);

  const handleFilterChange = useCallback(() => {
    console.log('Ejecutando handleFilterChange');
    getTableData(location.search);
  }, [searchParams]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div>
        <LibroMatrizFilters fetcher={handleFilterChange} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LibroMatrixTable rows={rows} />
      </div>
    </div>
  );
};

export default LibroMatrix;
