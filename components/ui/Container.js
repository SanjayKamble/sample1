import classNames from "classnames";

function Container(props) {
  const attrs = {
    ...props,
    className: classNames(
      "p-8 mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full ",
      props.className
    ),
  };
  return <div {...attrs}>{props.children}</div>;
}

export default Container;
