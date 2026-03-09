import { useState } from "react";
import { logoURL } from "../utils/constants"

const Header = () => {
  const [btnName, setBtnName]= useState("Sign In")

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logoURL}></img>
        </div>
        <nav className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item"><a href="#contact">Contact Us</a></li>
            <li className="nav-item">
              <a href="#cart" className="cart-link">
                Cart <span className="cart-count">0</span>
              </a>
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