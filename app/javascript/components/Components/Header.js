import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const { logged_in, new_user_route, sign_in_route, sign_out_route } =
      this.props;

    return (
      <>
        <Nav>
          <NavItem>
            <NavLink to="/" className="nav-link">
              Path Unknown
            </NavLink>
          </NavItem>
          {logged_in && (
            <NavItem>
              <a href={sign_out_route} className="nav-link">
                Sign Out
              </a>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <a href={sign_in_route} className="nav-link">
                Sign In
              </a>
            </NavItem>
          )}
          {!logged_in && (
            <NavItem>
              <a href={new_user_route} className="nav-link">
                Sign Up
              </a>
            </NavItem>
          )}
          <NavItem>
            <NavLink to="/aboutus" className="nav-link">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/locationindex" className="nav-link">
              Path List
            </NavLink>
          </NavItem>
          {logged_in && (
            <NavItem>
              <NavLink to="/userlocation" className="nav-link">
                Your Paths
              </NavLink>
            </NavItem>
          )}
          {logged_in && (
            <NavItem>
              <NavLink to="/locationnew" className="nav-link">
                Add a New Path
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </>
    );
  }
}
export default Header;
