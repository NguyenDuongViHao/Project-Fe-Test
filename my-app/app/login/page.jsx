"use client";
import { useState } from "react";
import "./login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";

const login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const validateForm = () => {
    if (!Email) {
      setError("Email is required");
      return false;
    }
 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(Email)) {
      setError("Invalid email format");
      return false;
    }
    if (!Password) {
      setError("Password is required");
      return false;
    }
    if (Password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    setError("");
    return true;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const res = await signInWithEmailAndPassword(Email, Password);
      console.log({ res });
      sessionStorage.setItem("user", true);
      setEmail("");
      setPassword("");
      router.push("/dashboard");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <div className="signInBox">
        <h2 className="title">Sign in</h2>
        <button className="googleSignInButton">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ99clJ9uWmomyjNVgO-PjeZrnur-_sswiUg&s"
            alt="Google"
            className="googleIcon"
          />
          Sign in with Google
        </button>
        <div className="orDivider">
          <span className="orText">
            or sign in with email
          </span>
        </div>
        <form className="form" onSubmit={handleSignIn}>
        {error && <div className="errorMessage">{error}</div>}
          <input
            type="text"
            placeholder="Email"
            className="input"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="forgotPassword">
            Forgot?
          </a>
          <button type="submit" className="signInButton">
            Sign In
          </button>
        </form>
        <div className="signUpLink">
          Don&apos;t have an account? <Link href="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default login;
