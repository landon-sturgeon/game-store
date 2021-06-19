import React from "react";
import NavBar from "../NavBar/NavBar.component";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <NavBar />
      </div>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
