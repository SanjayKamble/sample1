import classNames from "classnames";
import { createContext, useContext, useState } from "react";

export const ListGroupContext = createContext("");

export function ListGroup(props) {
  return (
    <>
      <ListGroupContext.Provider value={{ theme: props.theme }}>
        <ul className="px-0 border-b border-gray-200 dark:border-gray-700">
          {props.children}
        </ul>
      </ListGroupContext.Provider>
    </>
  );
}

export function ListGroupItem(props) {
  let { theme } = useContext(ListGroupContext);

  theme = theme ? theme : "primary";

  const themeClasses = classNames({
    " group-hover:bg-indigo-500 group-hover:text-gray-100 ": theme == "primary",
    " bg-indigo-500 text-gray-100 ": theme == "primary" && props.active,
    " group-hover:bg-red-700 group-hover:text-gray-100 ": theme == "danger",
    " bg-red-700 text-gray-100 ": theme == "danger" && props.active,
    " group-hover:bg-green-700 group-hover:text-gray-100 ": theme == "success",
    " bg-green-700 text-gray-100 ": theme == "success" && props.active,
    " group-hover:bg-yellow-300 group-hover:text-gray-900 ": theme == "warning",
    " bg-yellow-300 text-gray-900 ": theme == "warning" && props.active,
    " group-hover:bg-blue-400 group-hover:text-gray-900 ": theme == "info",
    " bg-blue-400 text-gray-900 ": theme == "info" && props.active,
    " group-hover:bg-gray-100 group-hover:text-gray-900 ": theme == "light",
    " bg-gray-100 text-gray-900 ": theme == "light" && props.active,
    " group-hover:bg-black group-hover:text-gray-100 ": theme == "dark",
    " bg-black text-gray-100 ": theme == "dark" && props.active,
  });

  const attrs = {
    ...props,
    className: classNames(
      " border border-gray-200 dark:border-gray-700 border-b-0 list-none rounded py-3 px-4 flex justify-between items-center  cursor-pointer ",
      themeClasses,
      props.className
    ),
  };

  return (
    <>
      <li className="group">
        <div {...attrs}>{props.children}</div>
      </li>
    </>
  );
}
