import classNames from "classnames";
export function H1(props) {
  const attrs = {
    ...props,
    className: classNames(
      "text-4xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-300 ",
      props.className
    ),
  };
  return <h1 {...attrs}></h1>;
}

export function H2(props) {
  const attrs = {
    ...props,
    className: classNames(
      "text-3xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-300",
      props.className
    ),
  };
  return <h2 {...attrs}></h2>;
}

export function H3(props) {
  const attrs = {
    ...props,
    className: classNames(
      "text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-300",
      props.className
    ),
  };
  return <h3 {...attrs}></h3>;
}

export function H4(props) {
  const attrs = {
    ...props,
    className: classNames(
      "text-xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-300",
      props.className
    ),
  };
  return <h4 {...attrs}></h4>;
}

export function H5(props) {
  const attrs = {
    ...props,
    className: classNames(
      "text-lg leading-normal mb-2 font-bold text-gray-800 dark:text-gray-300",
      props.className
    ),
  };
  return <h5 {...attrs}></h5>;
}

export function H6(props) {
  const attrs = {
    ...props,
    className: classNames(
      "text-base leading-normal mb-2 font-bold text-gray-800 dark:text-gray-300",
      props.className
    ),
  };
  return <h6 {...attrs}></h6>;
}

/**
<h6 className="text-base leading-normal mb-2 font-bold text-gray-800 dark:text-gray-300">H6</h6>
 */
