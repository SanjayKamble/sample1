import classNames from "classnames";

function Label(props) {
  const attrs = {
    ...props,
    className: classNames(" inline-block mb-2 ", props.className),
  };
  return (
    <>
      <label {...attrs}>{props.children}</label>
    </>
  );
}

export default Label;
