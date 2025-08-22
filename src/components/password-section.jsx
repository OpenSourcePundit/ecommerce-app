import { BiHide, BiShow } from "react-icons/bi";

export const Password = ({
  password,
  setPassword,
  showPassword,
  setShowPassword,
}) => (
  <div className="password-section">
    <input
      type={showPassword ? "text" : "password"}
      value={password}
      name="password"
      id="password"
      placeholder="password"
      onChange={(e) => setPassword(e.target.value)}
    />
    <div
      className="show-password"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <BiHide size="20px" /> : <BiShow size="20px" />}
    </div>
  </div>
);
