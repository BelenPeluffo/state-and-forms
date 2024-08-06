import { Formik } from "formik";
import { UserInput } from "../models/UserInput";
import { userFormSchema } from "../utils/createYupSchema";
import { FORM_FIELDS } from "../constants/formConfig";
import AppTextInput from "../components/AppTextInput";
import AppSelect from "../components/AppSelect";

const FormikAndYup = () => {
  const INITIAL_VALUE: UserInput = {
    firstname: "",
    lastname: "",
    dob: new Date(),
    documentType: 0,
    documentNumber: "",
    gender: 0,
    country: 0,
    province: 0,
    city: 0,
    certificate: 0,
  };
  userFormSchema;
  return (
    <Formik
      initialValues={INITIAL_VALUE}
      validationSchema={userFormSchema}
      onSubmit={() => console.log("yeah")}
      style={{ height: "100vh" }}
    >
      {({ isValid }) => (
        <div>
          isValid? {isValid}
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              height: "50%",
            }}
          >
            {FORM_FIELDS.map((x) => {
              const { label, type, ...props } = x;
              console.log("isValid?", isValid);
              return type === "string" ? (
                <AppTextInput key={props.name} label={label} {...props} />
              ) : type === "number" ? (
                <AppSelect key={props.name} label={label} {...props} />
              ) : null;
            })}
            <button type="submit" disabled={!isValid}>
              Mandale mecha
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default FormikAndYup;
