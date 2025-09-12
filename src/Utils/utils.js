import { useContext,useCallback } from "react";
import { DataContext } from "../Contexts/dataContext";
import { AuthContext } from "../Contexts/authcontext/authcontext";
import { useNavigate,useLocation } from "react-router-dom";







export function useAuthActions() {
  const { dataDispatch } = useContext(DataContext);
  const { setIsLogIn,setIsLoading } = useContext(AuthContext);
   const navigate = useNavigate();
    const location = useLocation();

  const login = useCallback(async ({ email, password }) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.errors?.join?.(", ") || "Login failed");
      }

      if (result?.encodedToken) {
        // ✅ don’t store plaintext password
        localStorage.setItem("encodedToken", result.encodedToken);
        localStorage.setItem("email", email);
        localStorage.setItem("name", result?.foundUser?.firstName || "");

        setIsLogIn(true); // state update is async; don’t read it immediately

        // Use the token we just received
        const token = result.encodedToken;

        // Fetch cart & wishlist sequentially (or Promise.all)
        const cartRes = await fetch("/api/user/cart", {
          headers: { authorization: token },
        });
        const cartJson = await cartRes.json();
        dataDispatch({ type: "fetch_cart", payload: cartJson.cart || [] });

        const wlRes = await fetch("/api/user/wishlist", {
          headers: { authorization: token },
        });
        const wlJson = await wlRes.json();
        dataDispatch({ type: "fetch_wishlist", payload: wlJson.wishlist || [] });

         location?.state
      ? navigate(location?.state?.from?.pathname)
      : navigate("/products");
      }
    } catch (err) {
      console.error(err);
      throw err;
    } finally{
      setIsLoading(false)
    }
  }, [dataDispatch, setIsLogIn]);

  const signup = useCallback(async (creds) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(creds),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.errors?.join?.(", ") || "Signup failed");
      }

      if (result?.encodedToken) {
        localStorage.setItem("encodedToken", result.encodedToken);
        localStorage.setItem("email", creds.email);
        localStorage.setItem("name", result?.createdUser?.firstName || "");
        setIsLogIn(true);
         location?.state ? navigate((location?.state?.from?.pathname)!=="/login"? (location?.state?.from?.pathname): "/products") : navigate("/products");
      }
    } catch (err) {
      console.error(err);
      throw err;
    } finally{
      setIsLoading(false);
    }
  }, [setIsLogIn]);

  return { login, signup };
}
