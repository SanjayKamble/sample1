import classNames from "classnames";

function Select(props) {
  const attrs = {
    ...props,
    className: classNames(
      "inline-block w-full leading-5 relative py-2 pl-3 pr-8 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 select-caret appearance-none ",
      props.className
    ),
  };
  return (
    <>
      <select {...attrs}>{props.children}</select>
    </>
  );
}

export default Select;
