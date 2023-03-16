import ClassNames from "classnames";
import { useState } from "react";
function Alert(props) {
  const [closeable, setCloseable] = useState(props.closeable);
  const [closed, setClosed] = useState(false);

  let theme = "primary";
  const themes = [
    "primary",
    "danger",
    "success",
    "warning",
    "info",
    "light",
    "dark",
  ];
  theme = themes.includes(props.theme) ? props.theme : theme;

  const themeClasses = ClassNames({
    "bg-gray-200 text-blue-900": theme == "primary",
    "bg-red-100 text-red-900": theme == "danger",
    "bg-green-100 text-green-900": theme == "success",
    "bg-yellow-100 text-yellow-900": theme == "warning",
    "bg-blue-200 text-gray-900": theme == "info",
    "bg-gray-50 text-gray-900": theme == "light",
    "bg-gray-500 text-gray-100": theme == "dark",
  });

  let closeButton = closeable ? (
    <div>
      <button
        type="button"
        onClick={() => {
          setClosed(true);
        }}
      >
        <span className="text-2xl">×</span>
      </button>
    </div>
  ) : (
    <></>
  );
  const closeableClasses = ClassNames({
    " flex justify-between items-center ": closeable,
  });

  var attrs = {
    ...props,
    className:
      `relative  py-3 px-6 rounded mb-4 ` +
      themeClasses +
      closeableClasses +
      ClassNames({ " hidden ": closed }),
  };

  return (
    <>
      <div {...attrs}>
        <div>{props.children}</div>
        {closeButton}
      </div>
    </>
  );
}

export default Alert;
