import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  margin-right: 10px;
`;

const NavBar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">CRUD operations</Tabs>
          <Tabs to="/allusers">All users</Tabs>
          <Tabs to="/adduser">Add user</Tabs>
        </Toolbar>
      </Header>
    </>
  );
};

export default NavBar;
