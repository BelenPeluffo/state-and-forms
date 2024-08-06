import { FormField } from "../models/FormField";

export const FORM_FIELDS: FormField[] = [
  {
    name: "firstname",
    label: "First Name",
    type: "string",
    placeholder: "Enter your first name",
    required: true,
    length: 40,
  },
  {
    name: "lastname",
    label: "Last Name",
    type: "string",
    placeholder: "Enter your last name",
    required: true,
    length: 40,
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "date",
    required: true,
  },
  {
    name: "documentType",
    label: "Document Type",
    type: "number",
    required: true,
  },
  {
    name: "documentNumber",
    label: "Document Number",
    type: "string",
    required: true,
  },
  {
    name: "gender",
    label: "Gender",
    type: "number",
    required: true,
  },
  {
    name: "country",
    label: "Country",
    type: "number",
    required: true,
  },
  {
    name: "province",
    label: "Province",
    type: "number",
    required: true,
  },
  {
    name: "city",
    label: "City",
    type: "number",
    required: true,
  },
  {
    name: "certificate",
    label: "Certificate",
    type: "number",
    required: true,
  },
];
