import { MdKeyboardControlKey } from "react-icons/md";
import "./ScrollToTop.scss";
import { useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className="ScrollToTop"
      style={{ display: visible ? "" : "none" }}
      onClick={scrollToTop}
    >
      <MdKeyboardControlKey/>
    </div>
  );
}
