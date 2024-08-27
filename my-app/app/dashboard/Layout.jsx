'use client'
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect } from "react";

const Layout =({ children }) =>{
  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = 'loaded';
      window.location.reload();
    }
  }, []);
  return (
    <div className="container">
      <div>
      <Sidebar />
      </div>
      <div className="content">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
