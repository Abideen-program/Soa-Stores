import { useState } from "react";

import { Link } from "react-router-dom";

import {
  createAuthUserRefDocument,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utilities/firebase/firebase";

import Button from "../button/button.component";

import FormInput from "../formInput/formInput.component";

import "./signIn.styles.scss";

// setting a default form field for both email and password
const defaultFormFields = {
  email: "",
  password: "",
};

// using useState to keep track of any changes that occur in the formFields
const SignIn = () => {
  // the defaultFormFields is now set as the value for the formFields
  const [formFields, setFormFields] = useState(defaultFormFields);

  // the email and password are being destructured from the formfield to get access to them in the code
  const { email, password } = formFields;

  // this function handles the changes that occur in the email and password input field
  /* when the state of the input field changes, the name and the value of the input field (target) 
  are destructured */
  /* the setFormFields updates the formField by spreading the inital state of the formField, and updating 
    the value of any input field (email or password) that might have changed
  */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  /* this function update the state of the formFields with defaultFormField value, thereby clearing the input 
  field once the form has been submited */
  const resetFormfields = () => {
    setFormFields(defaultFormFields);
  };

  /* this function controls the google sign-in button */
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    /*user is being destructured from the response in the above call and pass down to the call below to create
      a user reference document */
    await createAuthUserRefDocument(user);
  };

  // this function handles the submission of the form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormfields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("you have entered the wrong password");
          break;
        case "auth/user-not-found":
          alert("this user has not been registered");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="signin-container">
      <h2>SOAStore.</h2>
      <h3>Already have an account, sign in with your email and password</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType={"google"} onClick={logGoogleUser}>
            Google sign in
          </Button>
        </div>
        <p>
          Don't have an account, register <Link to="/header/signUp">here</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
