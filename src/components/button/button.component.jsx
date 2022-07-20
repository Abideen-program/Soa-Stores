import './button.styles.scss'

// setting button class to control different kind of button to use in the app.
const BUTTON_CLASSES = {
  google: "google-button",
  inverted: "inverted-button",
};

// destructuring children, buttonType and otherprops.
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
