import { Box, Typography } from "@mui/material";
import { GradeYearButton } from "../components";
import { useContext } from "react";
import { CurricularBoxContext } from "../contexts";
import { CurricularBox as Interface } from "../contexts/CurricularBox/CurricularBox.context";
import { Level } from "../services";

const studentSelectedTable = {
  study_plan: {
    study_plan_modality_id: 1,
  },
};

/**
 * Componente para evaluar la implementación de un botón desplegable dentro a su vez de otro botón.
 * Es en `GradeYearButton` que realmente se implementa toda la lógica nueva.
 * @returns CurricularBox
 */
const CurricularBox = () => {
  const { selectedLevel, setSelectedLevel, content, levelsList, getLevelContent } = useContext(
    CurricularBoxContext
  ) as Interface;
  return (
    <div>
      {" "}
      <br />
      <Typography variant="h4">Caja curricular</Typography>
      <br />
      <Box sx={{ display: "flex" }}>
        {levelsList.map((x: Level) => (
          <GradeYearButton
            year={x.level}
            key={x.level}
            pendingState={!x.complete}
            pageYearNow={selectedLevel}
            handle={setSelectedLevel}
            label={
              studentSelectedTable && studentSelectedTable.study_plan
                ? studentSelectedTable.study_plan.study_plan_modality_id === 1
                  ? "Año"
                  : "Ciclo"
                : null
            }
            schoolYears={x.schoolYear}
            onSchoolYearChange={getLevelContent}
          />
        ))}
      </Box>
      <br />
      {/* <TableGenericComponent
        displayPagination={false}
        bar={false}
        columns={headers}
        rows={analyticsHtmlCurriculumBox}
      /> */}
      <div
        style={{
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div> {content ? content : "Yeah"}</div>
      </div>
      <br />
    </div>
  );
};

export default CurricularBox;
