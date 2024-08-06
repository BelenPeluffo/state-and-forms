import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CompletedIndicator from "./CompletedIndicator";
import { useState } from "react";

export interface GradeYearTabProps {
  style?: object;
  hoverStyle?: object;
  onTabClick?: () => void;
  year: number;
  label: string | null;
  pendingState: boolean;
  schoolYears?: number[];
  onSchoolYearChange?: (year: number) => void;
}

const GradeYearTab = ({
  style,
  hoverStyle,
  onTabClick,
  year,
  label,
  pendingState,
  schoolYears,
  onSchoolYearChange,
}: GradeYearTabProps) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchor);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    !anchor ? setAnchor(event.currentTarget) : setAnchor(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        p: "12px 20px",
        alignItems: "center",
        mr: "2px",
        ...style,
        "&:hover": {
          ...hoverStyle,
          cursor: "pointer",
        },
      }}
      onClick={onTabClick}
    >
      {!pendingState && <CompletedIndicator isCompleted={!pendingState} />}
      <Typography variant="body1" align="center">
        {year}° {label}
      </Typography>
      {pendingState && <CompletedIndicator isCompleted={!pendingState} />}
      {schoolYears && schoolYears.length > 1 && (
        <>
          <IconButton onClick={handleMenuClick}>
            <ArrowDropDownIcon />
          </IconButton>
          <Menu open={isOpen} anchorEl={anchor} onClose={handleMenuClick}>
            {schoolYears.map((year) => (
              <MenuItem
                key={year}
                onClick={() => {
                  console.log("Ejecutando onClick del menú item > year?", year);
                  onSchoolYearChange!(year);
                }}
              >
                {year}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </Box>
  );
};

export default GradeYearTab;
