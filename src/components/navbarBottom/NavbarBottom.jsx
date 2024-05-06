import React from "react";
import navbarbottomlogo from "../../assets/images/Icon.png";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// import { Routers } from "../../static/router";

const NavbarBottom = () => {
  // const navbarItem = Routers?.map((el) => (
  //   <li key={el.id} className="navbarbottom__item">
  //     <NavLink to={el.path}>{el.text}</NavLink>
  //   </li>
  // ));
  return (
    <div className="navbarbottom">
      <div className="container">
        <div className="navbarbottom__wrapper">
          <NavLink to={"/"} className="navbarbottom__wrapper__left">
            <img src={navbarbottomlogo} alt="" />
            <h3>E-Comm</h3>
          </NavLink>
          <ul className="navbarbottom__list">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/Belt"}>Belt</NavLink>
            </li>
            <li>
              <NavLink to={"/bags"}>Bags</NavLink>
            </li>
          </ul>
          <GiHamburgerMenu className="navbarbottom__burger" />
        </div>
        <ul className="navbarbottom__list__toggle">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/Belt"}>Belt</NavLink>
          </li>
          <li>
            <NavLink to={"/bags"}>Bags</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarBottom;