import './button.styles.scss'

const BUTTON_CLASSES = {
  google: "google-button",
  inverted: "inverted-button",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
