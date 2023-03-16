import classNames from "classnames";
import React from "react";

export default function Form(props) {
  return <form {...props}>{props.children}</form>;
}

export function FormGroup(props) {
  const attrs = {
    ...props,
    className: classNames("mb-6 ", props.className),
  };
  return (
    <>
      <div {...attrs}>{props.children}</div>
    </>
  );
}

export function FormContainer(props) {
  const attrs = {
    ...props,
    className: classNames(
      " p-8 mb-6 bg-white dark:bg-gray-800 rounded-lg md:shadow-lg w-full ",
      props.className
    ),
  };
  return (
    <>
      <div {...attrs}>{props.children}</div>
    </>
  );
}

export function ErrorText(props) {
  return (
    <>
      <small className="text-red-500 text-sm inline-block mt-2 first-letter:capitalize">
        {props.children}
      </small>
    </>
  );
}
