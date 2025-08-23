import React from "react";
import { useState} from "react";
import {  useNavigate} from "react-router-dom";

import "./login_signup.scss";
import { Password } from "../../components/password-section";
import { useAuthActions } from "../../Utils/utils";

export const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useAuthActions();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const creds = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    await signup(creds);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };
  return (
    <div className="Container">
      <div className="login-img"></div>
      <div className="login-section">
        <div className="login-section-form">
          <h1>Sign UP</h1>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={firstName}
              name="firstName"
              id="firstName"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              value={lastName}
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="email"
              value={email}
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Password
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <div className="btns">
              <button className="btn" type="submit">
                Create New Account
              </button>
            </div>
          </form>
          <button className="btn" onClick={() => navigate("/login")}>
            Already have account? Log In
          </button>
        </div>
      </div>
    </div>
  );
};
