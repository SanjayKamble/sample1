import classNames from "classnames";
import React from "react";

const Checkbox = React.forwardRef((props, ref) => {
  const attrs = {
    ...props,
    className: classNames(
      "form-checkbox h-5 w-5 text-indigo-500 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded focus:outline-none ltr:mr-2 rtl:ml-2 cursor-pointer ",
      props.className
    ),
  };
  return (
    <>
      <input type="checkbox" {...attrs} ref={ref} />
    </>
  );
});

export default Checkbox;
