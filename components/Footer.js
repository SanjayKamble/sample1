import classNames from "classnames";
import Link from "next/link";
import { useContext } from "react";
import { PageContext } from "./layout/Page";
function Footer() {
  const { navOpen, setNavOpen } = useContext(PageContext);
  return (
    <>
      <footer
        className={classNames(
          "bg-white dark:bg-gray-800 p-6 shadow-sm bottom-0 lg:fixed w-full transition-all duration-500 ease-in-out ",
          {
            "left-20 ": navOpen,
            "left-64 ": !navOpen,
          }
        )}
      >
        <div className="mx-auto">
          <div className="flex flex-wrap flex-row -mx-4">
            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-left md:rtl:text-right">
              <ul className="ltr:pl-0 rtl:pr-0">
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a
                    className="hover:text-indigo-500 dark:text-gray-300"
                    href="#"
                  >
                    Support
                  </a>
                </li>
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a
                    className="hover:text-indigo-500 dark:text-gray-300"
                    href="#"
                  >
                    Help Center
                  </a>
                </li>
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a
                    className="hover:text-indigo-500 dark:text-gray-300"
                    href="#"
                  >
                    Privacy
                  </a>
                </li>
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a
                    className="hover:text-indigo-500 dark:text-gray-300"
                    href="#"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-right md:rtl:text-left">
              <p className="mb-0 mt-3 md:mt-0">
                <Link href="/">
                  <a className="hover:text-indigo-500 dark:text-gray-300">
                    Schoolite
                  </a>
                </Link>{" "}
                | All right reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
