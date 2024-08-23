import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../auth/GlobalContext";
import { useEffect } from "react";

export default function Logout() {
  const { setAuthStatus } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    setAuthStatus(false);
    navigate("/");
  }, [setAuthStatus, navigate]);
}
