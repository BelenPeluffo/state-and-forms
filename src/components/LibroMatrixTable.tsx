import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { getSignLabel } from "../utils/getSignLabel";

const LibroMatrixTable = ({ rows }: { rows: any[] }) => {
  console.log("rows:", rows);
  return (
    <Table sx={{ width: "90%" }}>
      <TableHead>
        <TableRow>
          <TableCell align="center">Idol</TableCell>
          <TableCell align="center">Sol</TableCell>
          <TableCell align="center">Luna</TableCell>
          <TableCell align="center">Ascendente</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows && rows.length > 0 ? (
          rows.map((idol) => (
            <TableRow key={idol.id}>
              <TableCell align="center">{idol.name}</TableCell>
              <TableCell align="center">{getSignLabel(idol.sun)}</TableCell>
              <TableCell align="center">{getSignLabel(idol.moon)}</TableCell>
              <TableCell align="center">{getSignLabel(idol.rising)}</TableCell>
            </TableRow>
          ))
        ) : (
          <div
            style={{
              width: "100%",
              padding: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            No hay datos para mostrar.
          </div>
        )}
      </TableBody>
    </Table>
  );
};

export default LibroMatrixTable;
