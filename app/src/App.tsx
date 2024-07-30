//main app component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/MainNavBar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth";
import Booking from "./components/Booking";
import BuyMeds from "./components/BuyMeds";
import DoctorHome from "./components/roles/Doctor/DoctorHome";
import DoctorNavBar from "./components/roles/Doctor/DoctorNavBar";
import HospitalHome from "./components/roles/Hospital/HospitalHome";
import HospitalNavBar from "./components/roles/Hospital/HospitalNavBar";
import PatientHome from "./components/roles/Patient/PatientHome";
import PatientNavBar from "./components/roles/Patient/PatientNavBar";
import PharmacyHome from "./components/roles/Pharmacy/PharmacyHome";
import PharmacyNavBar from "./components/roles/Pharmacy/PharmacyNavBar";

function App() {
  return (
    <Router>
      {/*public routes*/}
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/buyMeds" element={<BuyMeds />} />
      </Routes>
      {/**private routes */}
      <Routes>
        <Route path="/doctor/home" element={<DoctorHome />} />
        <Route path="/hospital/home" element={<HospitalHome />} />
        <Route path="/patient/home" element={<PatientHome />} />
        <Route path="/pharmacy/home" element={<PharmacyHome />} />
      </Routes>
    </Router>
  );
}

export default App;
