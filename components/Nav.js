import classNames from "classnames";
import Link from "next/link";
import { createContext, useContext } from "react";
import { PageContext } from "./layout/Page";
import { useRouter } from "next/router";
import { useEffect } from "react";

/**NavDropdownContext */
export const NavDropdownContext = createContext(null);

function Nav(props) {
  const { activeNavLink, setActiveNavLink, navOpen } = useContext(PageContext);
  return (
    <>
      <ul
        id="side-menu"
        className={classNames(
          "w-full float-none flex flex-col font-medium pl-1.5 rtl:pr-1.5"
        )}
      >
        {props.children}
      </ul>
    </>
  );
}

export default Nav;

/**Named Export */

/** NavContainer */
export function NavContainer(props) {
  const { activeNavLink, setActiveNavLink } = useContext(PageContext);
  return (
    <>
      <li className="relative">{props.children}</li>
    </>
  );
}

/** NavItem */
export function NavItem(props) {
  const { activeNavLink, setActiveNavLink } = useContext(PageContext);
  return <>{props.children}</>;
}

/** NavDropdown */
export function NavDropdown(props) {
  const { activeNavLink, setActiveNavLink } = useContext(PageContext);

  return (
    <>
      <NavDropdownContext.Provider value={{ id: props.id }}>
        <div>{props.children}</div>
      </NavDropdownContext.Provider>
    </>
  );
}

/** NavDropdownHeading */
export function NavDropdownHeading(props) {
  const { activeNavLink, setActiveNavLink } = useContext(PageContext);
  const { id } = useContext(NavDropdownContext);
  return (
    <>
      <a
        href="#"
        className={
          "block py-2.5 px-6 hover:text-indigo-500 dark:hover:text-gray-300 " +
          (activeNavLink == id ? `text-indigo-500 dark:text-gray-300` : ``)
        }
        onClick={(e) => {
          activeNavLink != id ? setActiveNavLink(id) : setActiveNavLink(null);

          e.preventDefault();
          return false;
        }}
      >
        {props.children}

        <span className="inline-block  float-right rtl:float-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={
              "transform transition duration-300 mt-1.5 bi bi-chevron-down " +
              (activeNavLink == id ? "rotate-0" : "-rotate-90 rtl:rotate-90")
            }
            width=".8rem"
            height=".8rem"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </span>
      </a>
    </>
  );
}

/** NavDropdownLinks */
export function NavDropdownLinks(props) {
  const { activeNavLink, setActiveNavLink } = useContext(PageContext);
  const { id } = useContext(NavDropdownContext);
  return (
    <>
      <ul
        className={
          (activeNavLink != id ? "hidden" : "") +
          " block rounded rounded-t-none top-full z-50 pl-7 rtl:pr-7 py-0.5 text-left rtl:text-right mb-1 font-normal "
        }
      >
        {props.children}
      </ul>
    </>
  );
}

/** NavLink */
export function NavLink(props) {
  const { activeNavLink, setActiveNavLink } = useContext(PageContext);
  const { id } = useContext(NavDropdownContext);
  const router = useRouter();

  useEffect(() => {
    if (activeNavLink == 0 && router.pathname == props.href) {
      setActiveNavLink(id);
    }
  }, [activeNavLink]);

  return (
    <>
      <li className="relative">
        <div
          className={classNames(
            "cursor-pointer block w-full py-2 px-6 clear-both whitespace-nowrap hover:text-indigo-500 dark:hover:text-gray-300 ",
            {
              "text-indigo-500": router.pathname == props.href,
              "dark:text-gray-500": router.pathname != props.href,
            }
          )}
        >
          <Link href={props.href}>{props.children}</Link>
        </div>
      </li>
    </>
  );
}
