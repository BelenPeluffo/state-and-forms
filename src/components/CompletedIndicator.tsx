import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Typography } from "@mui/material";

const CompletedIndicator = ({ isCompleted }: { isCompleted: boolean }) => {
  return (
    <>
      {isCompleted === null ? (
        ""
      ) : isCompleted ? (
        <TaskAltIcon sx={{ color: "#26874A", mr: 1 }}></TaskAltIcon>
      ) : (
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "#9EAAB8", ml: 1 }}
        >
          (pendiente)
        </Typography>
      )}
    </>
  );
};

export default CompletedIndicator;
