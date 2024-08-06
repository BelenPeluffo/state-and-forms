import { createContext } from "react";
import { Level } from "../../services";

export interface CurricularBox {
  selectedLevel: number;
  setSelectedLevel: (level: number) => void;
  /**
   * Data relacionada a los datos del tab.
   */
  content: string;
  levelsList: Level[];
  /**
   * Hace get de los datos relacionados al nivel seleccionado.
   * @param schoolYear Ciclo lectivo correspondiente.
   */
  getLevelContent: (schoolYear?: number) => void;
}

export const CurricularBoxContext = createContext<CurricularBox | null>(null);
