import { ButtonSignin } from "../ButtonSignIn/ButtonSignIn";
import "./style.css";

export default function SignUp() {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <div className="textbox">
            <div className="div">Email</div>
          </div>
          <div className="div-wrapper">
          <div className="div">Password</div>
        </div>
        <div className="text-wrapper-2">Sign in</div>
        <ButtonSignin>
            className="button-signin-instance"
        </ButtonSignin>
        </div>
      </div>
    </div>
  );
}
