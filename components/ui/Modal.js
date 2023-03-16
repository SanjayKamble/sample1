import { createContext, useContext, useState } from "react";
import classNames from "classnames";

export const ModalContext = createContext("");

export function Modal(props) {
  const { openModal, setOpenModal } = useContext(ModalContext);

  const attrs = {
    ...props,
    className: classNames(
      "z-50 relative p-3 mx-auto my-0 max-w-full",
      props.className,
      { hidden: !openModal }
    ),
    style: { maxWidth: "580px", ...props.style },
  };

  return (
    <>
      <div
        tabIndex="0"
        className={classNames(
          "z-50 overflow-auto inset-0 w-full h-full fixed py-6",
          { hidden: !openModal }
        )}
      >
        <div {...attrs}>
          <div className="bg-white rounded shadow-lg border flex flex-col overflow-hidden dark:bg-gray-800 dark:border-gray-700">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="fill-current h-6 w-6 absolute ltr:right-0 rtl:left-0 top-0 m-6 font-3xl font-bold"
            >
              ×
            </button>
            {props.children}
          </div>
        </div>
        <div className="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"></div>
      </div>
    </>
  );
}

export function ModalHeader(props) {
  const attrs = {
    ...props,
    className: classNames(
      "px-6 py-3 text-xl border-b dark:border-gray-700 font-bold ",
      props.className
    ),
  };
  return (
    <>
      <div {...attrs}>{props.children}</div>
    </>
  );
}
export function ModalBody(props) {
  const attrs = {
    ...props,
    className: classNames(" p-6 flex-grow ", props.className),
  };
  return (
    <>
      <div {...attrs}>{props.children}</div>
    </>
  );
}
export function ModalFooter(props) {
  const attrs = {
    ...props,
    className: classNames(
      " px-6 py-3 border-t dark:border-gray-700 flex justify-end ",
      props.className
    ),
  };
  return (
    <>
      <div {...attrs}>{props.children}</div>
    </>
  );
}
