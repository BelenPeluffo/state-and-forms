import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form";
import { CellConfig } from "../constants/tableFormConfig";
import { ReactElement } from "react";
import { TableForm } from "../models/Rows";
import { Autocomplete, TextField } from "@mui/material";
import { OptionType } from "./CustomizableAutocomplete";

const calcAutocompleteValue = (
  value: number & OptionType,
  options: Array<OptionType>
) => {
  return typeof value !== "number"
    ? value
    : options.filter((option) => option.id === value)[0];
};

const TableFormAutocomplete = ({
  config,
}: {
  config: CellConfig;
}) => {
  const { control, name, options, rowId, label } = config;

  return (
    <Controller
      control={control}
      render={({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        field: { onChange, onBlur, ...rest },
        fieldState,
        formState: { isLoading },
      }: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        field: ControllerRenderProps<TableForm, any>;
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
            renderInput={(params) => <TextField {...params} label={label} />}
            renderOption={(props, option) => (
              <li {...props} key={option.id}>
                {option.label || option.value}
              </li>
            )}
            options={options || []}
            {...rest}
            value={
              !isLoading &&
              rest.value !== undefined &&
              rest.value !== null &&
              options &&
              options.length > 0
                ? calcAutocompleteValue(
                    rest.value as number & OptionType,
                    options
                  )
                : null
            }
            onChange={(_, newValue) => {
              console.log(newValue);
              onChange(newValue);
            }}
          />
        );
      }}
      name={`rows.${rowId}.${name}`}
    />
  );
};

export default TableFormAutocomplete;
