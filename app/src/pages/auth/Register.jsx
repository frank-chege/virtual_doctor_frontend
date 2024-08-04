//manages registration
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [role, ChangeRole] = useState("patient");
  const [name, ChangeName] = useState("");
  const [email, ChangeEmail] = useState("");
  const [pwd, ChangePwd] = useState("");
  const [contact, ChangeContact] = useState("");
  const [birthday, ChangeBirthday] = useState("");
  const [gender, ChangeGender] = useState("");
  const [confirmPwd, ChangeConfirmPwd] = useState("");

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Register as: </label>
        <select
          className="form-select"
          value={role}
          onChange={(e) => ChangeRole(e.target.value)}
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
          onChange={(e) => ChangeName(e.target.value)}
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
          onChange={(e) => ChangeEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Contact</label>
        <input
          className="form-control"
          type="tel"
          value={contact}
          onChange={(e) => ChangeContact(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Date of birth</label>
        <input
          className="form-control"
          type="date"
          value={birthday}
          onChange={(e) => ChangeBirthday(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Gender</label>
        <select
          className="form-select"
          value={gender}
          onChange={(e) => ChangeGender(e.target.value)}
          required
        >
          <option value="" disabled selected>
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
          onChange={(e) => ChangePwd(e.target.value)}
          required
        />
      </div>

      <div>
        <label className="form-label">Confirm password</label>
        <input
          className="form-control"
          type="password"
          value={confirmPwd}
          onChange={(e) => ChangeConfirmPwd(e.target.value)}
          required
        />
      </div>
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
