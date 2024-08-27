"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("uesr");

  console.log({ user });

  useEffect(() => {
    if (!loading && !user && !userSession) {
      router.push("/login");
    }
  }, [loading, user, userSession, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="header">
      <input type="text" className="search-input" placeholder="Search..." />
      <div className="user-info">
        <span className="notification-icon">🔔</span>
        <div className="profile-dropdown">
          <span className="profile-name">🧑 {" "} vihao</span>
          <div className="dropdown-menu">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <p
              onClick={() => {
                signOut(auth);
                sessionStorage.removeItem("user");
              }}
              href="#"
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
