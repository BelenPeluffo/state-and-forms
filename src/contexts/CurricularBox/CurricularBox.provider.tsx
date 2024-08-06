import { useEffect, useState } from "react";
import { CurricularBoxContext } from "..";
import { CurricularBoxService, Level } from "../../services";

const CurricularBoxProvider = ({ children }: { children: React.ReactNode }) => {
  const service = CurricularBoxService;
  const [levelsList, setLevelsList] = useState<Level[] | []>([]);
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [content, setContent] = useState("");

  useEffect(() => {
    getAllLevels();
  }, []);

  useEffect(() => {
    if (levelsList && selectedLevel) {
      getDefaultLevelContent();
    }
  }, [selectedLevel]);

  /**
   * Hace get del array de niveles con que poblar los tabs.
   */
  const getAllLevels = async () => {
    try {
      const levels = await service.getCurricularBoxLevels();
      setLevelsList(levels);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Hace get de los datos relacionados al nivel seleccionado.
   * @param schoolYear Ciclo lectivo correspondiente.
   */
  const getLevelContent = (schoolYear?: number) => {
    // Acá haríamos los fetch necesarios para obtener la data de la currícula
    setContent(`Tab ${selectedLevel}${schoolYear ? ` ${schoolYear}` : ""}`);
  };

  /**
   * Hace get de los datos relacionados al ciclo lectivo por defecto del nivel seleccionado.
   */
  const getDefaultLevelContent = () => {
    const currentLevel = levelsList.filter((x) => x.level === selectedLevel)[0];
    const schoolYearLength = currentLevel?.schoolYear.length;
    getLevelContent(currentLevel?.schoolYear[schoolYearLength - 1]);
  };

  return (
    <CurricularBoxContext.Provider
      value={{
        selectedLevel,
        setSelectedLevel,
        content,
        levelsList,
        getLevelContent,
      }}
    >
      {children}
    </CurricularBoxContext.Provider>
  );
};

export default CurricularBoxProvider;
