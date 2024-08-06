import * as Yup from "yup";
import { UserInput } from "../models/UserInput";

const createYupSchema = <T extends object>(
  yupSchema: Yup.ObjectSchema<T>
): Yup.ObjectSchema<T> => yupSchema;

export const userFormSchema = createYupSchema<UserInput>(
  Yup.object().shape({
    firstname: Yup.string().required("Required").length(40, "Max 40 chars"),
    lastname: Yup.string().required("Required").length(40, "Max 40 chars"),
    dob: Yup.date().required("Required"),
    documentType: Yup.number().required("Required"),
    documentNumber: Yup.string().required("Required"),
    gender: Yup.number().required("Required"),
    country: Yup.number().required("Required"),
    province: Yup.number().required("Required"),
    city: Yup.number().required("Required"),
    certificate: Yup.number().required("Required"),
  })
);
