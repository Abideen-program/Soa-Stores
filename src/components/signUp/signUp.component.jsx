import { useState } from "react";
import { createAuthUserRefDocument, createAuthUserWithEmailAndPassword } from "../../utilities/firebase/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value})
  };

  const resetFormfields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
        alert('password does not match')
        return;
    }

    try {

        const { user } = await createAuthUserWithEmailAndPassword(email, password)

        await createAuthUserRefDocument(user, { displayName })

        resetFormfields()
        
    } catch (error) {
        if(error.code === 'auth/email-already-in-use') {
            alert('cannot create user, email already in use')
        } else {
            console.log(error)
        }
    }
  } 

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        />

        <label>Email</label>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />

        <label>Enter Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
