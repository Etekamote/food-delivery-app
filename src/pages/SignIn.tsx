import { useEffect } from "react";
import SignInComponent from "../components/SignIn/SignInComponent";
import SignUp from "../components/SignIn/SignUp";
import { useUserStore } from "../stores/userStore";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const isLoggedIn = useUserStore((state) => state.isUserLoggedIn());

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [navigate, isLoggedIn]);

  return (
    <section className="flex gap-8 mt-16">
      <SignInComponent />
      <SignUp />
    </section>
  );
}

export default SignIn;
