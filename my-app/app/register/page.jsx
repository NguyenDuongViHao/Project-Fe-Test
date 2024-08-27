"use client";
import { useState } from "react";
import "./register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

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

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", true);
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="container">
      <div className="signUpBox">
        <h2 className="title">Sign up</h2>
        <form className="form" onSubmit={handleRegister}>
          {error && <div className="errorMessage">{error}</div>}

          <input
            type="email"
            id="email"
            className="input"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="signUpButton">
            Create Account
          </button>
        </form>
        <div className="signInLink">
          Already have an account? <Link href="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
