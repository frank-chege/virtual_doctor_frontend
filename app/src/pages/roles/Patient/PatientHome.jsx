// patient portal
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function PatientHome() {
  const location = useLocation();

  useEffect(() => {
    if (location.state.message) {
      toast.success(location.state.message);
    }
  }, [location.state]);

  return (
    <>
      <div>
        <h2>Patient portal homepage</h2>
      </div>
      <ToastContainer />
    </>
  );
}

export default PatientHome;
