import React, { useState } from "react";
import {
  mainContainer,
  NavBarContainer,
  NavIconContainer,
  NavMenuUl,
  StyledListItem,
  StyledNav,
  StyledNavLink,
  StyledNavLogo,
} from "./NavBar.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? mainContainer : ""} onClick={() => Close()} />
      <StyledNav onClick={(e) => e.stopPropagation()}>
        <NavBarContainer>
          <StyledNavLogo exact to="/">
            Game Store
            <FontAwesomeIcon icon={faCode} style={{ marginLeft: "1rem" }} />
          </StyledNavLogo>
          <NavMenuUl active={click}>
            <StyledListItem>
              <StyledNavLink
                exact
                to="/"
                activeClassName="active"
                onClick={click ? handleClick : null}
              >
                Home
              </StyledNavLink>
            </StyledListItem>

            <StyledListItem>
              <StyledNavLink
                to="/about"
                activeClassName="active"
                onClick={click ? handleClick : null}
              >
                About
              </StyledNavLink>
            </StyledListItem>
            <StyledListItem>
              <StyledNavLink
                to="/blog"
                activeClassName="active"
                onClick={click ? handleClick : null}
              >
                Blog
              </StyledNavLink>
            </StyledListItem>
            <StyledListItem>
              <StyledNavLink
                activeClassName="active"
                onClick={click ? handleClick : null}
                href="https://github.com/landon-sturgeon/game-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </StyledNavLink>
            </StyledListItem>
          </NavMenuUl>
          <NavIconContainer onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faXmark : faBars} />
          </NavIconContainer>
        </NavBarContainer>
      </StyledNav>
    </div>
  );
}

export default NavBar;
