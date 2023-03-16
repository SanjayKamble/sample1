import classNames from "classnames";
import React from "react";
const Input = React.forwardRef((props, ref) => {
  const attrs = {
    ...props,
    className: classNames(
      "w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 ",
      props.className
    ),
  };
  return (
    <>
      <input {...attrs} ref={ref} />
    </>
  );
});

export default Input;
