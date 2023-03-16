import classNames from "classnames";

function Textarea(props) {
  const attrs = {
    ...props,
    className: classNames(
      "w-full leading-5 relative py-3 px-5 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600 ",
      props.className
    ),
    rows: props.rows ? props.rows : 3,
  };
  return (
    <>
      <textarea {...attrs}>{props.children}</textarea>
    </>
  );
}

export default Textarea;
