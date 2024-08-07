export interface Row {
  id: number;
  name: string;
  sunSign: number;
  moonSign: number;
}

export interface TableForm {
  rows: Row[];
}
