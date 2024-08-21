//main app component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/common/NavBar";
import LandingPage from "./pages/common/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Booking from "./pages/common/Booking";
import BuyMeds from "./pages/common/BuyMeds";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import PatientHome from "./pages/roles/Patient/PatientHome";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/buyMeds" element={<BuyMeds />} />
        <ProtectedRoute component={<PatientHome />} />
      </Routes>
    </Router>
  );
}

export default App;
