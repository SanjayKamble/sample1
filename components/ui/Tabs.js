import { createContext, useContext, useState } from "react";
import classNames from "classnames";

/** TabsContext */
const TabsContext = createContext("");

function Tabs(props) {
  const [active, setActive] = useState(false);
  const attrs = {
    ...props,
    className: classNames(
      {
        "flex justify-between ": props.vertical,
      },
      props.className
    ),
  };
  return (
    <>
      <TabsContext.Provider
        value={{
          active,
          setActive,
          fill: props.fill,
          vertical: props.vertical,
        }}
      >
        <div {...attrs}>{props.children}</div>
      </TabsContext.Provider>
    </>
  );
}

export default Tabs;

/**TabLinks */

export function TabLinks(props) {
  const { fill, vertical } = useContext(TabsContext);
  return (
    <>
      <ul
        className={classNames(
          " border-b dark:border-gray-700 ",
          {
            "justify-between": fill & !vertical,
            flex: !vertical,
            " px-4 w-80": vertical,
          },
          props.className
        )}
      >
        {props.children}
      </ul>
    </>
  );
}
/**TabLink */

export function TabLink(props) {
  const { active, setActive, fill } = useContext(TabsContext);

  let style = {};

  if (active === props.target) {
    style = { borderBottomWidth: "3px" };
  }

  const attrs = {
    ...props,
    className: classNames("mr-1 cursor-pointer  text-center", {
      "-mb-px": active == props.target,
      "w-full": fill,
    }),
  };

  return (
    <>
      <li
        {...attrs}
        onClick={() => {
          setActive(props.target);
        }}
      >
        <a
          className={classNames(
            "bg-white dark:bg-gray-800 dark:border-gray-700 inline-block py-2 px-4 hover:text-indigo-500 font-semibold w-full",
            {
              "border-indigo-700": active === props.target,
            }
          )}
          style={style}
        >
          {props.children}
        </a>
      </li>
    </>
  );
}
/**TabsContainer */

export function TabContent(props) {
  const { vertical } = useContext(TabsContext);
  const attrs = {
    ...props,
    className: classNames(props.className, {
      "max-w-full px-4": vertical,
      "pt-4": !vertical,
    }),
  };
  return (
    <>
      <div {...attrs}>{props.children}</div>
    </>
  );
}

export function TabPane(props) {
  const { active, setActive } = useContext(TabsContext);

  if (props.opened && !active) {
    setActive(props.id);
  }
  const attrs = {
    ...props,
    className: classNames({
      hidden: props.id != active,
    }),
  };
  return (
    <>
      <div {...attrs}>{props.children}</div>
    </>
  );
}
