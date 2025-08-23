import { useState} from "react";
import { useNavigate,useLocation} from "react-router-dom";
import "./login_signup.scss";
import { Password } from "../../components/password-section";
import { useAuthActions } from "../../Utils/utils";

export const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("adarshbalika@gmail.com");
  const [password, setPassword] = useState("adarshbalika");
  const [showPassword, setShowPassword] = useState(false);
  const {login} = useAuthActions();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({email,password})   
  };

  return (
    <div className="Container">

      <div className="login-img"></div>
      <div className="login-section">
        <div className="login-section-form">
          <h1>Log In</h1>
          <form action="" onSubmit={(e) => handleSubmit(e)}>
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
              <button className="btn btn1" type="submit">
                Log In
              </button>
              {/* <button className="btn btn2" type="submit" onClick={(e)=>loginAsGuest(e)} >Log In as Guest</button> */}
            </div>
          </form>
          <button className="btn" onClick={() => navigate("../signup",{state:{from:(location?.state?.from)?(location?.state?.from) : "/products"}})}>
            Don't have account? Register here
          </button>
        </div>
      </div>
    </div>
  );
};
