export interface Level {
  level: number;
  complete: boolean;
  schoolYear: number[];
}

class CurricularBoxService {
  async getCurricularBoxLevels() {
    const data: Level[] = [
      { level: 1, complete: true, schoolYear: [2022] },
      { level: 2, complete: true, schoolYear: [2023, 2024] },
      { level: 3, complete: true, schoolYear: [2025] },
      { level: 4, complete: false, schoolYear: [2026] },
      { level: 5, complete: false, schoolYear: [2027] },
      { level: 6, complete: false, schoolYear: [2028] },
    ];
    return data;
  }
}

export default new CurricularBoxService();
