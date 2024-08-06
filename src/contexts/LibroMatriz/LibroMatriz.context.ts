import { createContext } from "react";

export interface LibroMatriz {
    rows: any[];
    getTableData: (query?: string | null) => void;
}

export const LibroMatrizContext = createContext<LibroMatriz | null>(null);
