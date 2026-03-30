import { useState } from "react";
import { logoURL } from "../utils/constants"
import { Link } from "react-router";
import useShareStatus from "../customHooks/useShareStatus";

const Header = () => {
  const [btnName, setBtnName]= useState("Sign In")
  const status = useShareStatus()
  console.log(status)

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logoURL}></img>
        </div>
        <nav className="nav-menu">
          <ul className="nav-list">
            <li>{status}</li>
            <li className="nav-item"><Link to="/about">About Us</Link></li>
            <li className="nav-item">
              <Link to="#cart" className="cart-link">
                Cart <span className="cart-count">0</span>
              </Link>
            </li>
            <li className="nav-item">
              <button className="signin-btn"
                onClick={() => {
                btnName === "Sign In" ? setBtnName('Sign Out') : setBtnName('Sign In')
              }}>{btnName}</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;