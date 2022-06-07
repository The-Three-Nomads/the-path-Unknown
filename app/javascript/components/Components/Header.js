import React, { Component } from "react";
import {
  Nav,
  Bars,
  NavMenu,
  NavLink,
} from "./navbar/NavBarElements";


class Header extends Component {
  render() {
    const { logged_in, new_user_route, sign_in_route, sign_out_route } =
      this.props;

      return (
        <>
          <Nav>
            <NavLink to="/" >
              <h1 className="link">Path Unknown</h1>
            </NavLink>
            <Bars/>
              <NavMenu>
                <NavLink to="/aboutus">About Us</NavLink>
                  <NavLink to="/locationindex">Path List</NavLink>
                {logged_in && (
                  <NavLink to="/userlocation" >Your Paths</NavLink>
                )}
                {logged_in && (
                  <NavLink to="/locationnew" className="link">
                    Add a New Path
                  </NavLink>
                )}
                {logged_in && (
                  <a href={sign_out_route} className= "link" >Sign Out</a>
                )}
                {!logged_in && (
                  <a href={sign_in_route} className= "link" >Sign In</a>
                )}
                {!logged_in && (
                  <a href={new_user_route} className= "link" >Sign Up</a>
                )}
              </NavMenu>
           </Nav>
        </>
      );
    }
  }
export default Header;
