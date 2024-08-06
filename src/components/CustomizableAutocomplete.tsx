import { Autocomplete, TextField, createFilterOptions } from "@mui/material";
import { useState } from "react";

export type OptionType = {
  id: number;
  label?: string;
  value: string;
};

const filter = createFilterOptions<OptionType>();

const CustomizableAutocomplete = ({options}: {options: OptionType[]}) => {
  const [value, setValue] = useState<OptionType | null>(null);
  return (
    <>
      Selected Value: {value?.value || "none"}
      <Autocomplete
        value={value}
        onChange={(_, newValue) => {
          if (newValue && typeof newValue === "string") {
            // Create a new value from the user input
            setValue({
              value: newValue,
              id: options.length,
            });
          } else if (newValue && typeof newValue !== "string") {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          const { inputValue } = params;
          const isExisting = options.some(
            (option) => inputValue.toLowerCase() === option.label
          );
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              id: options.length,
              value: inputValue,
              label: `Agregar "${inputValue}"`,
            } as OptionType);
          }
          return filtered;
        }}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          return option.value;
        }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>{option.label || option.value}</li>
        )}
        options={options}
        freeSolo
      />
    </>
  );
};

export default CustomizableAutocomplete;
