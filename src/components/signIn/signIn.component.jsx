import { createAuthUserRefDocument, signInWithGooglePopup } from "../../utilities/firebase/firebase";
import SignUp from "../signUp/signUp.component";


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        await createAuthUserRefDocument(user)
        console.log(user)
    }

  return (
    <div>
      <h1>This is The sign in page</h1>
      <button onClick={logGoogleUser}>
        Google sign in
     </button>

     <SignUp/>
    </div>
  );
};

export default SignIn;
