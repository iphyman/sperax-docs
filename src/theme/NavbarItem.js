import React from "react";
import OriginalNavBarItem from "@theme-original/NavbarItem"
import {
    useLocation
} from "@docusaurus/router";

export default function NavbarItem(props) {
    const { pathname } = useLocation();
  
    let versionDoc = pathname.split("/");
    let activeNav = null;
  
    if (versionDoc[2] === "V3" || versionDoc[2] === "3.0.0") {
      activeNav = "V3";
    } else if (versionDoc[2] === "V2" || versionDoc[2] === "2.0.0") {
      activeNav = "V2";
    } else {
      activeNav = "V1";
    }
  
    return (
      <>
        <OriginalNavBarItem
          {...props}
          className={props.className + " " + activeNav}
        />
      </>
    );
  }