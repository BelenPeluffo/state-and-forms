import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";
import { CellConfig } from "../constants/tableFormConfig";
import { ReactElement } from "react";
import { Row, TableForm } from "../models/Rows";
import { Autocomplete, TextField } from "@mui/material";

const TableFormAutocomplete = ({ config }: { config: CellConfig }) => {
  const { control, name, options } = config;
  return (
    <Controller
      control={control}
      render={({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        field: { onChange, onBlur, ...rest },
        fieldState,
        formState,
      }: {
        field: ControllerRenderProps<
          TableForm,
          //   keyof TableForm
          | "rows"
          | `rows.${number}`
          | `rows.${number}.name`
          | `rows.${number}.zodiacSign`
        >;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<TableForm>;
      }): ReactElement => {
        return (
          <Autocomplete
            getOptionLabel={(option) => {
              if (typeof option === "string") {
                return option;
              }
              return option.value;
            }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.label || option.value}
              </li>
            )}
            options={options || []}
            {...rest}
            onChange={(_, newValue) => {
              console.log(newValue);
              onChange(newValue);
            }}
          />
        );
      }}
      name={"rows"}
    />
  );
};

export default TableFormAutocomplete;
