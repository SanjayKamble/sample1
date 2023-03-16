import { useContext, useState } from "react";
import Customizer from "./Customizer";
import HeaderSearchForm from "./HeaderSearchForm";
import Messages from "./Messages";
import Notifications from "./Notifications";
import ProfileDropdown from "./ProfileDropdown";
import ClasNames from "classnames";

import { PageContext } from "./layout/Page";

function Header() {
  const { navOpen, setNavOpen } = useContext(PageContext);
  return (
    <>
      <nav
        className={ClasNames(
          " z-50 fixed flex flex-row flex-nowrap items-center justify-between mt-0 py-2  ltr:right-0 rtl:right-0 md:rtl:right-64 rtl:left-0 px-6 bg-white dark:bg-gray-800 shadow-sm transition-all duration-500 ease-in-out",
          {
            "ltr:left-20 ltr:-right-20 md:ltr:left-20 md:ltr:right-0 rtl:right-20 rtl:-left-20 md:rtl:right-0 md:rtl:left-20":
              navOpen,
            "ltr:left-0 ltr:right-0 md:ltr:left-64 rtl:right-0 rtl:left-0 md:rtl:right-64":
              !navOpen,
          }
        )}
        id="desktop-menu"
      >
        <button
          id="navbartoggle"
          type="button"
          className="inline-flex items-center justify-center text-gray-800 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200 focus:outline-none focus:ring-0"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <span className="sr-only">Mobile menu</span>
          <svg
            className={ClasNames(" h-8 w-8 bi bi-list", {
              block: navOpen,
              hidden: !navOpen,
            })}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              className="hidden md:block"
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
            <path
              className="md:hidden"
              d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>

          <svg
            className={ClasNames("block h-8 w-8 bi bi-filter-left", {
              block: !navOpen,
              hidden: navOpen,
            })}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              className="md:hidden"
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
            <path
              className="hidden md:block"
              d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        <HeaderSearchForm></HeaderSearchForm>

        <ul className="flex ltr:ml-auto rtl:mr-auto mt-0">
          <Customizer></Customizer>

          <Messages></Messages>

          <Notifications></Notifications>

          <ProfileDropdown></ProfileDropdown>
        </ul>
      </nav>
    </>
  );
}

export default Header;
