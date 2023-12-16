import "./RegisterPage.css";
import Logo from "./assets/logo.jpg";
import { useState } from "react";

const FormRow = ({ labelText, type = "text" }) => {
  return (
    <div className="form-row">
      <label className="form-label">{labelText}</label>
      <input type={type} className="form-input"></input>
    </div>
  );
};

function RegisterPage() {
  const [isMember, setIsMember] = useState(false);

  const onSubmit = () => {
    console.log("form submitted");
  };

  return (
    <div>
      <div className="container page">
        <form class="form" onSubmit={onSubmit}>
          <h3>{isMember ? "Login" : "Register"}</h3>

          {!isMember && <FormRow labelText="Name" />}
          <FormRow type="email" labelText="Email" />
          <FormRow type="password" labelText="Password" />
          {!isMember && (
            <FormRow type="password" labelText="Confirm Password" />
          )}

          <button className="btn-register">Submit</button>
          {!isMember && (
            <p className="login-register-text">
              Already have an account? Please
              <span className="login-register-link" onClick={() => setIsMember(true)}> Login</span>
            </p>
          )}
          {isMember && (
            <p className="login-register-text">
              Don't have an account? Please
              <span className="login-register-link"  onClick={() => setIsMember(false)}> Register</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
