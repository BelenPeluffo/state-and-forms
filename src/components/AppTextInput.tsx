import { useField } from "formik";

const AppTextInput = ({
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
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default AppTextInput;
