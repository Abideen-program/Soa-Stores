import { useState } from "react";

import { Link } from 'react-router-dom'

import {
  createAuthUserRefDocument,
  signInWithGooglePopup
} from "../../utilities/firebase/firebase";
import Button from "../button/button.component";

import FormInput from "../formInput/formInput.component";

import "./signIn.styles.scss";

const defaultFormFields = {
  email: "",
  password: ""
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormfields = () => {
    setFormFields(defaultFormFields);
  };

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createAuthUserRefDocument(user);
    console.log(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      

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
    <div className="signin-container">
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
          <Button buttonType={'google'} onClick={logGoogleUser}>Google sign in</Button>
        </div>
        <p>Don't have an account, register <Link to='/header/signUp'>here</Link> </p>
      </form>
    </div>
  );
};

export default SignIn;
