import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import HeadLines from "../../components/HeadLines/HeadLines";
import "./Login.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../rtk/slices/authSlice";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, error} = useSelector((state) => state.auth);
  useEffect(() => {
    if (error) {
      navigate("/login");
      setEmail("");
      setPass("");
    }
    if (token) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [error, token, navigate]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let user = {
      identifier: email,
      password: pass,
    };
    dispatch(loginUser(user));
  };
  return (
    <section className="register">
      <BreadCrumbs />
      <HeadLines title={"food order form"} />
      <div className="container">
        <div className="img-login"> </div>
        <div className="form-login">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder=" Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder=" password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <input type="submit" value={"login"} className="btn" />
          </form>
          <p className="txt">
            Not Have Account ? <Link to={"/register"}> create account</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
