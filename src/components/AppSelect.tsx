import { useField } from "formik";

const AppSelect = ({
  label,
  ...props
}: {
  label: string;
  name: string;
  placeholder?: string | undefined;
  required: boolean;
  length?: number | undefined;
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default AppSelect;
