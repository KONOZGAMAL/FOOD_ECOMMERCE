import { Link } from "react-router-dom";
import "./notFound.scss";
export default function NotFound() {
  return (
    <div className="notFound">
    <h1 className="error">404</h1>
    <div className="page">Ooops!!! The page you are looking for is not found</div>
    <Link to={"/"} className="back-home">Back to home</Link>
    </div>
  )
}
