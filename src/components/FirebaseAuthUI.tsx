import { useEffect } from "react";
import { auth } from "@/lib/firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { GoogleAuthProvider, GithubAuthProvider, EmailAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const FirebaseAuthUI = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(auth);

    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        GithubAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
      ],
      signInSuccessUrl: "/", // fallback, not used if signInSuccessWithAuthResult returns false
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          console.log("✅ User signed in:", authResult.user);
          navigate("/dashboard"); // redirect in React
          return false; // prevent FirebaseUI from handling redirect
        },
      },
    });

    return () => ui.reset(); // cleanup on unmount
  }, [navigate]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">Sign In</h2>
      <div id="firebaseui-auth-container" />
    </div>
  );
};

export default FirebaseAuthUI;
