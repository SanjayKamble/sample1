import { useContext, useState } from "react";
import ClassNames from "classnames";
import { PageContext } from "./layout/Page";
import Nav, {
  NavContainer,
  NavDropdownHeading,
  NavDropdown,
  NavDropdownLinks,
  NavLink,
} from "./Nav";
import NavbarLogo from "./NavbarLogo";
import menulinks from "./../config/ConfigNavLinks";

function Navbar() {
  const { navOpen } = useContext(PageContext);

  return (
    <nav
      id="sidebar-menu"
      className={ClassNames(
        "fixed w-64 transition-all duration-500 ease-in-out h-screen bg-white dark:bg-gray-800 shadow-sm ",
        { "w-20 md:w-20 sidebar-compact": navOpen, "w-0 md:w-64 ": !navOpen }
      )}
    >
      <div className="h-full overflow-y-auto scrollbars">
        <NavbarLogo></NavbarLogo>
        <Nav>
          <NavContainer>
            {menulinks.map((link, index) => (
              <NavDropdown id={`menu-link-` + index} key={`menu-link-` + index}>
                <NavDropdownHeading>
                  {link.icon}
                  <span>{link.title}</span>
                </NavDropdownHeading>
                <NavDropdownLinks>
                  {link.links.map((sub_link, sub_link_index) => (
                    <NavLink
                      href={sub_link.href}
                      key={`menu-link-` + sub_link_index}
                    >
                      {sub_link.title}
                    </NavLink>
                  ))}
                </NavDropdownLinks>
              </NavDropdown>
            ))}
          </NavContainer>
        </Nav>
      </div>
    </nav>
  );
}

export default Navbar;
