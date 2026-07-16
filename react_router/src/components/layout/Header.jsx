import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="section-Navbar">

        <section className="top-txt">
          <div className="header-container">
            <div className="header-txt">
              <p>Hey I am Afsheen And this is my header</p>
            </div>
            <div className="sign_in_up">
              <NavLink to="#">Login</NavLink>
              <NavLink to="#">Signup</NavLink>
            </div>
          </div>
        </section>
       <div className="container">
        <div className="navbar-brand">
          <NavLink to="Index">Brand</NavLink>     
        </div>
        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="About">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
       </div>
      </header>
    </>
    );
    }
    
export default Header;