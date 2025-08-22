import Hamburger from "hamburger-react";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../Contexts/dataContext";
import { AuthContext } from "../../Contexts/authcontext/authcontext";
import "./hammenu.css";

export const HamMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const { cartLength, wishlistLength } = useContext(DataContext);
  const { isLogIn } = useContext(AuthContext);
  const location = useLocation();
  const panelRef = useRef(null);

  // Close when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      {/* Backdrop */}
      <div
        className={`ham-backdrop ${isOpen ? "show" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!isOpen}
      />
      {/* Drawer */}
      <aside
        className={`ham-drawer ${isOpen ? "open" : ""}`}
        ref={panelRef}
        aria-hidden={!isOpen}
        aria-label="Mobile navigation"
      >
        <nav className="ham-nav">
          <Link to="/" className="ham-link">Home</Link>
          <Link to="/products" className="ham-link">Products</Link>

          {isLogIn && (
            <Link to="/wishlist" className="ham-link">
              Wishlist <span className="tag">{wishlistLength}</span>
            </Link>
          )}
          {isLogIn && (
            <Link to="/cart" className="ham-link">
              Cart <span className="tag">{cartLength}</span>
            </Link>
          )}

          {isLogIn ? (
            <Link to="/profile" className="ham-link">Profile</Link>
          ) : (
            <Link to="/login" className="ham-link">Login</Link>
          )}
        </nav>
      </aside>
    </>
  );
};
