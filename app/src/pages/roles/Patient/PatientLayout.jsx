//patient layout
import PatientNavbar from "./PatientNavbar";
import PatientHome from "./PatientHome";
import Logout from "../../common/Logout";
import MedicalRecords from "./PatientMedicalRecords";
import BuyMeds from "../../common/BuyMeds";
import Booking from "../../common/Booking";
import { useGlobalContext } from "../../auth/GlobalContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

export default function PatientLayout({ children }) {
  const { authStatus } = useGlobalContext();
  const navigate = useNavigate();

  //check login status
  useEffect(() => {
    if (!authStatus) {
      navigate("/login");
    }
  }, [authStatus]);
  return (
    <>
      <PatientNavbar />
      <Routes>
        <Route path="/home" element={<PatientHome />} />
        <Route path="/records" element={<MedicalRecords />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/buyMeds" element={<BuyMeds />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}
