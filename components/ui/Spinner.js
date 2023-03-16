import classNames from "classnames";

function Spinner(props) {
  const themes = [
    "primary",
    "danger",
    "success",
    "warning",
    "info",
    "light",
    "dark",
  ];

  const themeClasses = classNames({
    "text-blue-700 ": props.theme == "primary",
    "text-red-700 ": props.theme == "danger",
    "text-green-700 ": props.theme == "success",
    "text-yellow-300 ": props.theme == "warning",
    "text-blue-400 ": props.theme == "info",
    "text-gray-400 ": props.theme == "light",
    "text-black": props.theme == "dark",
  });

  return (
    <>
      <div className={classNames("inline-block", props.className)}>
        <svg
          className={classNames("animate-spin h-5 w-5 mr-2 ", themeClasses)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25 "
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Spinner;
