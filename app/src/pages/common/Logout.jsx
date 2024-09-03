import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../auth/GlobalContext";
import { useEffect } from "react";

export default function Logout() {
  const { authStatus, setAuthStatus, role, setRole } = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    setRole("public");
    navigate("/");
  }, [authStatus, role]);
}
