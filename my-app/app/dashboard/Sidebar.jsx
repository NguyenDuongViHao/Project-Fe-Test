"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const balanceAmount = "$5003,50";

  const toggleBalance = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h2>GoStock</h2>
      </div>
      <div className="top-links">
        <p>Total Investment</p>
        <div className="iconhidden">
          <span id="balance">
            {isHidden ? "*****" : balanceAmount}

            <span className="itemiconhidden">
              <button className="btn" onClick={toggleBalance}>
                <FontAwesomeIcon icon={isHidden ? faEye : faEyeSlash} />
              </button>
            </span>
          </span>
        </div>
      </div>
      <div className="content-links">
        <ul>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Wallet</Link>
          </li>
          <li>
            <Link href="">News</Link>
          </li>
          <li>
            <Link href="">Stock & Fund</Link>
          </li>
          <li>
            <Link href="">Our Community</Link>
          </li>
        </ul>
      </div>

      <div className="bottom-links">
        <hr />
        <ul>
          <li>
            <Link href="">Settings</Link>
          </li>
          <li>
            <Link href="">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
