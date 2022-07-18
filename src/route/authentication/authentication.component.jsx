import SignIn from "../../components/signIn/signIn.component"
import SignUp from "../../components/signUp/signUp.component"
import './authentication.styles.scss'

const Authentication = () => {
    return(
        <div className="authentication-container">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Authentication