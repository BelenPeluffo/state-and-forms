import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { DROPDOWN_FIELDS, WESTER_ZODIAC_SIGNS } from "../constants";
import { useEffect } from "react";

const LibroMatrizFilters = ({ fetcher }: { fetcher: () => void }) => {
  const [searchParams, setSearchParams] = useSearchParams({
    sun: "0",
    moon: "0",
    rising: "0",
    name: "",
  });

  const handleChange = (field: string, value: number | string) => {
    setSearchParams((prev) => {
      prev.set(field, value.toString());
      return prev;
    });
  };

  useEffect(() => {
    fetcher();
  }, [searchParams]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        width: "100%",
      }}
    >
      {DROPDOWN_FIELDS.map((field) => (
        <div>
          <InputLabel>{field.label}</InputLabel>
          <Select
            id={field.id}
            value={searchParams.get(field.id)}
            label={field.label}
            onChange={(event) =>
              handleChange(field.id, event.target.value || 0)
            }
          >
            <MenuItem value={0}>Todos</MenuItem>
            {WESTER_ZODIAC_SIGNS.map((sign) => (
              <MenuItem value={sign.value} key={sign.id}>
                {sign.label}
              </MenuItem>
            ))}
          </Select>
        </div>
      ))}
      <div>
        <InputLabel>Name</InputLabel>
        <TextField
          label="Name"
          value={searchParams.get("name")}
          onChange={(event) => handleChange("name", event.target.value)}
        />
      </div>
      <div></div>
    </div>
  );
};

export default LibroMatrizFilters;
