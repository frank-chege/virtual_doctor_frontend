import { useState } from "react";
import axios from "axios";

function Login() {
  //states to manage input values
  const [email, ChangeEmail] = useState("");
  const [pwd, ChangePwd] = useState("");
  const [role, ChangeRole] = useState("patient");
  //data object
  const data = { email, pwd };
  //handle form submission
  const HandleSubmit = (e) => {
    //prevent reload
    e.preventDefault();
    //send data to the backend
    axios
      .post(
        `http://127.0.0.1:5000/api/auth/login/${role}`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(console.log(error)));
  };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <h3>Enter your details to login</h3>
        <div className="mb-3">
          <label className="form-label">I am a</label>
          <select
            className="form-select"
            onChange={(e) => ChangeRole(e.target.value)}
          >
            <option value="user">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="hospital">Hospital admin</option>
            <option value="pharmacy">Pharmacy admin</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => ChangeEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={pwd}
            onChange={(e) => ChangePwd(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary ">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
