import "./formInput.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-field">
      <input className="form-input" {...otherProps} />

      <label
        className={`${
          otherProps.value.length > 0 ? "shrink" : "none"
        } form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
