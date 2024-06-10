import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
      localStorage.setItem("token", "");
      navigate("/login");
      window.location.reload();
    }, [navigate]);
  
    return null;
}
