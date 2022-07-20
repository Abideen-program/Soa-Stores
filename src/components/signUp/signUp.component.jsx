import { useState } from "react";

import {
  createAuthUserRefDocument,
  createAuthUserWithEmailAndPassword,
} from "../../utilities/firebase/firebase";
import Button from "../button/button.component";

import FormInput from "../formInput/formInput.component";

import "./signUp.styles.scss";

// setting a default form field for displayName, email, password and confirmPassword
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// using useState to keep track of any changes that occur in the formFields
const SignUp = () => {
  // the defaultFormFields is now set as the value for the formFields
  const [formFields, setFormFields] = useState(defaultFormFields);

  /* destructuring displayName, email, password and confirmPassword from the formfield 
    to get access to them in the code*/
  const { displayName, email, password, confirmPassword } = formFields;


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

// this function handles the submission of the form
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createAuthUserRefDocument(user, { displayName });

      resetFormfields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>SOAStore.</h2>
      <h3>Don't have an account, register with your email and password</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Enter Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />

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

        <FormInput
          label="confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
