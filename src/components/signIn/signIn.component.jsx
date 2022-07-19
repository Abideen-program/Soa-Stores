import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { Link } from 'react-router-dom'

import {
  createAuthUserRefDocument,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      await signInAuthUserWithEmailAndPassword(email, password)

      resetFormfields();

    } catch (error) {
      switch(error.code) {
        case ('auth/wrong-password'):
          alert('you have entered the wrong password')
          break;
        case ('auth/user-not-found'):
          alert('this user has not been registered')
          break;
        default:
          console.log(error)
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
          <Button buttonType={'google'} onClick={logGoogleUser}>Google sign in</Button>
        </div>
        <p>Don't have an account, register <Link to='/header/signUp'>here</Link> </p>
      </form>
    </div>
  );
};

export default SignIn;
