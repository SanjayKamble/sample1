import classNames from "classnames";
import { createContext, useContext, useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Button from "./Button";
export const DropdownContext = createContext(null);
/**
 * Dropdown
 */
export function Dropdown(props) {
  const [hidden, setHidden] = useState(true);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setHidden(true));

  const attrs = {
    ...props,
    className: classNames(
      " relative inline-block ltr:mr-2 rtl:ml-2 ",
      props.className
    ),
  };
  return (
    <>
      <DropdownContext.Provider
        value={{
          hidden,
          setHidden,
          theme: props.theme,
          dir: props.dir,
          outlined: props.outlined,
        }}
      >
        <div ref={ref} {...attrs}>
          {props.children}
        </div>
      </DropdownContext.Provider>
    </>
  );
}

/**
 * Dropdown Title
 */
export function DropdownTitle(props) {
  const { hidden, setHidden, theme, dir, outlined } =
    useContext(DropdownContext);

  const icon = (
    <svg
      className={classNames(" fill-current ", {
        " transform rotate-180 ": dir == "top",
        " transform rotate-90 ": dir == "left",
        " transform -rotate-90 ": dir == "right",
      })}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M7 10l5 5 5-5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
  return (
    <>
      <Button
        onClick={() => {
          setHidden(!hidden);
        }}
        theme={theme}
        outlined={outlined}
        className={classNames(" flex inline-block ")}
      >
        {dir == "left" ? icon : <></>}
        <span className="ltr:pr-2 rtl:pl-2"> {props.children} </span>
        {dir != "left" ? icon : <></>}
      </Button>
    </>
  );
}

/**
 * Dropdown Items
 */
export function DropdownItems(props) {
  const { hidden, dir } = useContext(DropdownContext);
  return (
    <>
      <div
        className={classNames(
          " absolute bg-white z-10 rounded border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-left",
          {
            " left-0 bottom-full top-auto mb-2": dir == "top",
            " top-0 ltr:right-full ltr:left-auto rtl:left-full rtl:right-full mr-2 ":
              dir == "left",
            " top-0 left-full right-auto ": dir == "right",
            " hidden ": hidden,
          }
        )}
        style={{
          minWidth: "12rem",
        }}
      >
        {props.children}
      </div>
    </>
  );
}

export function DropdownItem(props) {
  const attrs = {
    ...props,
    className: classNames(
      " block px-3 py-2 hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-gray-900 dark:focus:bg-gray-900 cursor-pointer ",
      props.className,
      { " bg-gray-100 ": props.active }
    ),
  };
  return (
    <>
      <div {...attrs}>{props.children}</div>
    </>
  );
}

export function DropdownSeparator(props) {
  const attrs = {
    ...props,
    className: classNames(
      " border-t border-gray-200 dark:border-gray-700 my-0 ",
      props.className
    ),
  };
  return (
    <>
      <hr {...attrs} />
    </>
  );
}
