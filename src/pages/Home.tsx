import { TextField } from "@mui/material";
import DisabilityClick from "../components/DisabilityClick";
import CustomizableAutocomplete, { OptionType } from "../components/CustomizableAutocomplete";

const OPTIONS: OptionType[] = [
  {
    id: 1,
    value: "Soyeon",
  },
  {
    id: 2,
    value: "Miyeon",
  },
  {
    id: 3,
    value: "Minnie",
  },
  {
    id: 4,
    value: "Shuhua",
  },
  {
    id: 5,
    value: "Yuqi",
  },
  {
    id: 6,
    value: "Soojin",
  },
  {
    id: 7,
    value: "Sojung",
  },
  {
    id: 8,
    value: "",
  },
];

const Home = () => {
  const isDisabled = true;
  const handleAnything = () => {
    console.log("handleAnything");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <DisabilityClick
        child={
          <TextField
            label="Nombre"
            type="text"
            onClick={handleAnything}
            sx={{ width: "50vw" }}
          />
        }
        disabled={isDisabled}
      />
      <CustomizableAutocomplete options={OPTIONS} />
    </div>
  );
};

export default Home;
