//manages registration
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [role, changeRole] = useState("patient");
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [pwd, changePwd] = useState("");
  const [contact, changeContact] = useState("");
  const [birthday, changeBirthday] = useState("");
  const [gender, changeGender] = useState("");
  const [confirmPwd, changeConfirmPwd] = useState("");
  const [file, changeFile] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //check if passwords match
    if (role === "patient" && pwd !== confirmPwd) {
      alert("Passwords do not match");
    }
    const payload = { role, name, email, contact };
    if (role != "patient") {
      payload.pwd = pwd;
      payload.birthday = birthday;
      payload.gender = gender;
    } else {
      payload.files;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Register as: </label>
        <select
          className="form-select"
          value={role}
          onChange={(e) => changeRole(e.target.value)}
          required
        >
          <option value="patient">Patient</option>
          <option value="hospital">Hospital admin</option>
          <option value="pharmacy">Pharmacy admin</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Full name</label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={(e) => changeName(e.target.value)}
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          className="form-control"
          type="email"
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Contact</label>
        <input
          className="form-control"
          type="tel"
          pattern="[0-9]+"
          placeholder="0712345678"
          value={contact}
          onChange={(e) => changeContact(e.target.value)}
          required
        />
      </div>
      {/**file upload for pharmacy and hospital */}
      {role != "patient" && (
        <div className="mb-3">
          <label className="form-label">
            Upload documents verifying your institution
          </label>
          <input
            className="form-control"
            type="file"
            accept=".pdf, .docx"
            onChange={(e) => changeFile(e.target.files)}
            placeholder="Upload files. pdf/docx"
            required
          />
        </div>
      )}
      {/**input fields to be hidden if role is not patient */}
      {role == "patient" && (
        <>
          <div className="mb-3">
            <label className="form-label">Date of birth</label>
            <input
              className="form-control"
              type="date"
              value={birthday}
              onChange={(e) => changeBirthday(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select
              className="form-select"
              value={gender}
              onChange={(e) => changeGender(e.target.value)}
              required
            >
              <option value="" disabled>
                --Select your gender--
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
              <option value="other">Other</option>
            </select>
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

          <div>
            <label className="form-label">Confirm password</label>
            <input
              className="form-control"
              type="password"
              value={confirmPwd}
              onChange={(e) => changeConfirmPwd(e.target.value)}
              required
            />
          </div>
        </>
      )}
      <p>
        Already have an account?
        <Link className="navbar-brand" to="/login">
          Login here
        </Link>
      </p>
      <button type="submit" className="btn btn-primary ">
        Register
      </button>
    </form>
  );
}
export default Register;
