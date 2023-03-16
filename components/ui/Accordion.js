import { createContext, useContext, useState } from "react";
import ClassNames from "classnames";

function Accordion(props) {
  const [selected, setSelected] = useState(1);
  return <>{props.children}</>;
}

/**AccordionContent */
export const AccordionContentContext = createContext(null);

export function AccordionContent(props) {
  const [active, setActive] = useState(props.active);

  return (
    <>
      <AccordionContentContext.Provider value={{ active, setActive }}>
        <div className="relative flex flex-wrap flex-col shadow mb-4 bg-white dark:bg-gray-800">
          {props.children}
        </div>
      </AccordionContentContext.Provider>
    </>
  );
}

/** AccordionBody*/
export function AccordionBody(props) {
  const { active } = useContext(AccordionContentContext);
  return (
    <>
      <div
        className={ClassNames({
          hidden: !active,
        })}
      >
        <div className="flex-1 p-6">
          <p>{props.children}</p>
        </div>
      </div>
    </>
  );
}

/**AccordionHeading */
export function AccordionHeading(props) {
  const { active, setActive } = useContext(AccordionContentContext);
  return (
    <div className="border-b border-gray-200 mb-0 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-20 dark:border-gray-800 py-2 px-4">
      <div className="d-grid mb-0">
        <button
          className="py-3 w-full rounded leading-5 font-medium flex px-0 justify-between focus:outline-none focus:ring-0"
          onClick={() => {
            setActive(!active);
          }}
        >
          {props.children}
          <span>
            <svg
              className={ClassNames(
                { "-rotate-180": active },
                "transform transition duration-500"
              )}
              width="1rem"
              height="1rem"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
export default Accordion;
