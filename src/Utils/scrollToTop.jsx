import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);   // scrolls to top whenever route changes
  }, [pathname]);

  return null; // this component doesn’t render anything
};
