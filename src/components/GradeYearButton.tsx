import GradeYearTab, { GradeYearTabProps } from "./GradeYearTab";

interface GradeYearButton extends GradeYearTabProps {
  pageYearNow: number;
  handle: (year: number) => void;
}

export const GradeYearButton = ({
  year,
  pageYearNow,
  pendingState = true,
  handle,
  label = "Ciclo",
  schoolYears,
  onSchoolYearChange
}: GradeYearButton) => {
  return (
    <>
      {pageYearNow != year ? (
        <GradeYearTab
          hoverStyle={{
            backgroundColor: "white",
            border: "solid 2px #005387",
            borderRadius: "4px",
          }}
          onTabClick={() => handle(year)}
          year={year}
          label={label}
          pendingState={pendingState}
          schoolYears={schoolYears}
          onSchoolYearChange={onSchoolYearChange}
        />
      ) : (
        <GradeYearTab
          style={{
            maxWidth: "max-content",
            backgroundColor: "#005387",
            color: "#fff",
            border: "solid 2px #005387",
            borderRadius: "4px",
            height: "28px",
          }}
          onTabClick={() => handle(year)}
          year={year}
          label={label}
          pendingState={pendingState}
          schoolYears={schoolYears}
          onSchoolYearChange={onSchoolYearChange}
        />
      )}
    </>
  );
};
