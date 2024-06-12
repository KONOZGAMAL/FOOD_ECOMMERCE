import "./HeadLines.scss";
import PropTypes from "prop-types"; 
export default function HeadLines({ title, suptitle }) {
  return (
    <section className="head-lines">
      <p>{suptitle}</p>
      <h3>{title}</h3>
    </section>
  );
}
HeadLines.propTypes = {
    title: PropTypes.node, // Validate title prop
    suptitle: PropTypes.node, // Validate suptitle prop
  };