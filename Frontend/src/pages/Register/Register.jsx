import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import HeadLines from "../../components/HeadLines/HeadLines";
import "./register.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../rtk/slices/authSlice";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {error, signIn} = useSelector((state)=> state.auth);
  useEffect(()=>{
    if (error){
      navigate("/register");
    } 
    if (signIn){
      navigate("/login");
      setUserName("");
      setEmail("");
      setAddress("");
      setPhone("");
      setPass("");
    } 
  },[navigate,error,signIn])
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = {
      username: userName,
      email,
      Address: address,
      contactNumber: phone,
      password: pass,
    };
    dispatch(signUpUser(user)).then((response) => {
     return response.payload
    })
  };
  return (
    <section className="register">
      <BreadCrumbs />
      <HeadLines title={"Register"} />
      <div className="container">
        <div className="form-register">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <input
              type="text"
              placeholder=" User Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder=" Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder=" Contact Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder=" Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="password"
              placeholder=" password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <input type="submit" value={"Register"} className="btn" />
          </form>
          <p className="txt">
            Have Account ? <Link to={"/login"}>sign in</Link>
          </p>
        </div>
        <div className="img-register"> </div>
      </div>
    </section>
  );
}
