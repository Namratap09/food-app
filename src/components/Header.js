import { logoURL } from "../utils/constants"

const Header = () => {
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
              <button className="signin-btn">Sign In</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;