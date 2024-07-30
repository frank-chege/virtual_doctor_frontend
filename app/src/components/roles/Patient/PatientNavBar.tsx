//doctor portal navigation bar
import { Link } from "react-router-dom";

function PatientNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/patient/home">
          Home
        </Link>
        <Link className="navbar-brand" to="/patient/booking">
          Booking
        </Link>
        <Link className="navbar-brand" to="/buyMeds/home">
          Buy medicine
        </Link>
      </div>
    </nav>
  );
}

export default PatientNavBar;
