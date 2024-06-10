import PropTypes from "prop-types"; // Import PropTypes
import { createContext, useEffect, useState } from "react";

const MobileHandlerContext = createContext();

function MobileHandlerProvider({ children }) {
  const [isMobile, setIsMobile] = useState();
  const [openMenu, setOpenMenu] = useState(false);

  const isMobileHandler = (e) => {
    setIsMobile(e.matches);
  };

  useEffect(() => {
    window
      .matchMedia("(max-width:1024px)")
      .addEventListener("change", isMobileHandler);
    setIsMobile(window.matchMedia("(max-width:1024px)").matches);
  }, []);
  return (
    <MobileHandlerContext.Provider value={{ isMobile, openMenu, setOpenMenu }}>
      {children}
    </MobileHandlerContext.Provider>
  );
}
MobileHandlerProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};
export { MobileHandlerContext, MobileHandlerProvider };
