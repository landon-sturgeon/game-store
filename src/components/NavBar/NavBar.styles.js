import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 20;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const mainContainer = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const StyledNavLogo = styled(NavLink)`
  color: #f5b921;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  flex-grow: 1;
`;

export const styledIcon = css`
  height: 30px;
  width: 30px;
  color: white;
`;

export const NavMenuUl = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin-right: 2rem;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1pxsolid #fff;
    position: absolute;
    top: 80px;
    left: -110%;
    opacity: 1;
    transition: all 0.5s ease;

    ${(props) =>
      props.active &&
      css`
        background: #1f5156;
        left: 0px;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
      `}
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  border-bottom: 3px solid transparent;

  @media (max-width: 960px) {
    padding: 1.5rem;
    width: 100%;
  }
`;

export const FontAwesomeCode = css`
  margin-left: 1rem;
`;

export const StyledListItem = styled.li`
  line-height: 40px;
  margin-right: 1rem;

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }

  &:hover:after {
    width: 100%;
    background: #ffdd40;
  }

  .active {
    color: #ffdd40;
    border: 1px solid #ffdd40;
  }

  @media (max-width: 960px) {
    .active {
      color: #ffdd40;
      border: none;
    }
  }
`;

export const NavIconContainer = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #ffdd40;
  }
`;
