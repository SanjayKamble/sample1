import classNames from "classnames";

function Ping(props) {
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
    "bg-blue-400 ": props.theme == "primary",
    "bg-red-400 ": props.theme == "danger",
    "bg-green-400 ": props.theme == "success",
    "bg-yellow-300 ": props.theme == "warning",
    "bg-blue-400 ": props.theme == "info",
    "bg-gray-400 ": props.theme == "light",
    "bg-black": props.theme == "dark",
  });

  return (
    <>
      <div className="inline-block">
        <span className="relative flex h-5 w-5 mr-2">
          <span
            className={classNames(
              "animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75 ",
              themeClasses
            )}
          ></span>
          <span
            className={classNames(
              "relative inline-flex rounded-full h-5 w-5 ",
              themeClasses
            )}
          ></span>
        </span>
      </div>
    </>
  );
}

export default Ping;
