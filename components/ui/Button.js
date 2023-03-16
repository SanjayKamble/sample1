import ClassNames from "classnames";
import React from "react";

//
const Button = React.forwardRef((props, ref) => {
  let theme = props.theme ? props.theme : "primary";
  let themeClasses = ClassNames({
    " bg-indigo-500 border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 ":
      (theme == "primary") & (props.outlined != "true"),

    " text-white ": props.theme != "light" && props.outlined != "true",

    " text-indigo-500 bg-transparent border border-indigo-500 hover:text-gray-100 hover:bg-indigo-500 hover:ring-0 hover:border-indigo-500 focus:text-gray-100 focus:bg-indigo-500 focus:border-indigo-500 focus:outline-none focus:ring-0 ":
      (theme == "primary") & (props.outlined == "true"),

    " bg-red-500 border-red-500 hover:text-white hover:bg-red-600 hover:ring-0 hover:border-red-600 focus:bg-red-600 focus:border-red-600 ":
      (theme == "danger") & (props.outlined != "true"),

    " text-red-500 bg-transparent border border-red-500 hover:text-white hover:bg-red-500 hover:ring-0 hover:border-red-500 focus:text-white focus:bg-red-500 focus:border-red-500 focus:outline-none focus:ring-0 ":
      (theme == "danger") & (props.outlined == "true"),

    " bg-green-500 border-green-500 hover:text-white hover:bg-green-600 hover:ring-0 hover:border-green-600 focus:bg-green-600 focus:border-green-600 ":
      (theme == "success") & (props.outlined != "true"),

    " text-green-500 bg-transparent border border-green-500 hover:text-white hover:bg-green-500 hover:ring-0 hover:border-green-500 focus:text-white focus:bg-green-500 focus:border-green-500 focus:outline-none focus:ring-0 ":
      (theme == "success") & (props.outlined == "true"),

    " bg-yellow-300 border-yellow-300 hover:text-gray-900 text-gray-800 hover:bg-yellow-400 hover:ring-0 hover:border-yellow-400 focus:bg-yellow-400 focus:border-yellow-400 ":
      (theme == "warning") & (props.outlined != "true"),

    " text-yellow-500 bg-transparent border border-yellow-500 hover:text-gray-100 hover:bg-yellow-500 hover:ring-0 hover:border-yellow-500 focus:text-gray-900 focus:bg-yellow-500 focus:border-yellow-500 focus:outline-none focus:ring-0 ":
      (theme == "warning") & (props.outlined == "true"),

    " bg-indigo-300 border-indigo-300 hover:text-gray-900 text-gray-800 hover:bg-indigo-400 hover:ring-0 hover:border-indigo-400 focus:bg-indigo-400 focus:border-indigo-400 ":
      (theme == "info") & (props.outlined != "true"),

    " text-indigo-300 bg-transparent border border-indigo-300 hover:text-gray-900 hover:bg-indigo-300 hover:ring-0 hover:border-indigo-300 focus:text-gray-900 focus:bg-indigo-300 focus:border-indigo-300 focus:outline-none focus:ring-0 ":
      (theme == "info") & (props.outlined == "true"),

    " bg-gray-200 border-gray-300 hover:text-gray-900 text-gray-800 hover:bg-gray-200 hover:ring-0 hover:border-gray-200 focus:bg-gray-200 focus:border-gray-200 ":
      (theme == "light") & (props.outlined != "true"),

    " text-gray-100 bg-transparent border border-gray-100 hover:text-gray-900 hover:bg-gray-200 hover:ring-0 hover:border-gray-200 focus:text-gray-900 focus:bg-gray-200 focus:border-gray-200 focus:outline-none focus:ring-0 ":
      (theme == "light") & (props.outlined == "true"),

    " text-gray-100 bg-gray-700  border-gray-700 hover:text-white hover:bg-black hover:ring-0 hover:border-black focus:bg-black focus:border-black ":
      (theme == "dark") & (props.outlined != "true"),

    " text-gray-900 bg-transparent border border-gray-900 hover:text-white hover:bg-black hover:ring-0 hover:border-black focus:text-white focus:bg-black focus:border-black focus:outline-none focus:ring-0 ":
      (theme == "dark") & (props.outlined == "true"),
  });

  if (props.disabled) {
    themeClasses += " cursor-not-allowed opacity-70 ";
  }

  var attrs = {
    ...props,
    className: ClassNames(themeClasses, props.className, {
      "py-2 px-4 inline-block text-center mb-3 mr-2 rounded leading-5   border  focus:outline-none focus:ring-0 ":
        props.outlined != "true",
      "py-2 px-4 inline-block text-center mb-3 mr-2 rounded leading-5 bg-transparent border":
        props.outlined,
    }),
    type: props.type ? props.type : "button",
  };

  return (
    <>
      <button {...attrs} ref={ref}>
        {props.children}
      </button>
    </>
  );
});

export default Button;
