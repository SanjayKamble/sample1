import classNames from "classnames";
import { useState } from "react";

function Tooltip(props) {
  const [tooltips, setTooltips] = useState(false);
  const align = props.align ? props.align : "top";
  return (
    <>
      <div
        onMouseOver={() => {
          setTooltips(true);
        }}
        onMouseOut={() => {
          setTimeout(setTooltips(false), 3000);
        }}
        className="relative inline-block mb-3 "
      >
        {props.children}
        <div
          className={classNames("absolute  mb-3 ", {
            hidden: !tooltips,
            " top-auto bottom-full ": align == "top",
            " bottom-auto top-full ": align == "bottom",
          })}
        >
          <div
            className={classNames(
              " z-40 w-32 p-3  text-sm leading-tight text-white bg-black rounded-lg shadow-lg text-center ",
              {
                "-mb-1": align == "top",
                "-mt-1": align == "bottom",
              }
            )}
          >
            {props.content}
          </div>
          <div
            className={classNames(
              " absolute transform -rotate-45 p-1 w-1 bg-black   ltr:ml-6 rtl:mr-6 ",
              {
                "bottom-0 -mb-2 ": align == "top",
                " top-0 -mt-2 ": align == "bottom",
              }
            )}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Tooltip;

/*
 <div className="absolute top-full bottom-auto mt-3">
    <div className="z-40 w-32 p-3 -mt-1 text-sm leading-tight text-white bg-black rounded-lg shadow-lg text-center">
      Tooltip on bottom
    </div>
    <div className="absolute transform -rotate-45 p-1 w-1 bg-black top-0 -mt-2 ltr:ml-6 rtl:mr-6"></div>
  </div>

  */
