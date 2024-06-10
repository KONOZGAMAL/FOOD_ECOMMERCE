import { useContext } from "react";
// import "../../styles/components/MobileMenu.scss";
import { MobileHandlerContext } from "../../utils/mobileHandler";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export default function MobileMenu() {
  const { openMenu , setOpenMenu} = useContext(MobileHandlerContext);
  return (
    <div className={`${openMenu ? "mobile_menu active" : "mobile_menu"}`}>
    <motion.ul
     initial={{opacity: 0 , y:-10}}
    whileInView={{ opacity: 1, y:0 }}
    transition={{
      delay: 0.5,
      duration: 0.4,
      ease: "easeInOut"
    }}>
    <NavLink to="/"  onClick={() => setOpenMenu(!openMenu)}>Home</NavLink>
    <NavLink to="/about" onClick={() => setOpenMenu(!openMenu)}>About</NavLink>
    <NavLink to="/shop" onClick={() => setOpenMenu(!openMenu)}>Shop</NavLink>
    <NavLink to="/contact" onClick={() => setOpenMenu(!openMenu)}>Contact</NavLink>
  </motion.ul>
    </div>
  );
}
