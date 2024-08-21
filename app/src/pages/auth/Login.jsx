//authenticates login requests
import { useState } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useGlobalContext } from "./GlobalContext";
import { Redirect } from "react-router-dom";

function Login() {
  //define states to manage input values
  const [email, changeEmail] = useState("");
  const [pwd, changePwd] = useState("");
  const [role, changeRole] = useState("patient");
  const [login, changeLoginMessage] = useState(false);
  //access global context
  const { authStatus, setAuthStatus } = useGlobalContext();

  //create payload
  const data = { email, pwd, role };

  //handle form submission
  const handleSubmit = (e) => {
    //prevent reload
    e.preventDefault();
    changeLoginMessage(true);
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
      .then((res) => {
        //store the csrf token in session storage
        sessionStorage.setItem("csrfToken", res.data.csrf_token);

        //change the login status
        try {
          setAuthStatus(true);
          console.log(authStatus);
        } catch (error) {
          console.log(error);
        }

        toast.success(res.data.message);
      })
      .catch((error) => {
        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          toast.error(error.response.data.error);
        } else {
          toast.error("An error occured. PLease try again");
        }
        changeLoginMessage(false);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Enter your details to login</h3>
        <div className="mb-3">
          <label className="form-label">Login as: </label>
          <select
            className="form-select"
            onChange={(e) => changeRole(e.target.value)}
            required
          >
            <option value="patient">Patient</option>
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
            onChange={(e) => changeEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="form-label">Password</label>
          <input
            className="form-control"
            type="password"
            value={pwd}
            onChange={(e) => changePwd(e.target.value)}
            required
          />
        </div>
        <p>
          Don't have an account?
          <Link className="navbar-brand" to="/register">
            Register here
          </Link>
        </p>
        <button type="submit" className="btn btn-primary ">
          {login && <>Logging in...</> ? <>Logging in...</> : <>Login</>}
        </button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Login;
