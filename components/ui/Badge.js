import ClassNames from "classnames";

function Badge(props) {
  const themes = [
    "primary",
    "danger",
    "success",
    "warning",
    "info",
    "light",
    "dark",
  ];

  let theme = "primary";
  let pill = props.pill ? true : false;

  theme = themes.includes(props.theme) ? props.theme : theme;

  const themeClasses = ClassNames(
    "inline-block leading-none text-center py-1 px-2 ml-2  font-bold text-sm ",
    {
      "bg-indigo-500 text-gray-100": theme == "primary",
      "bg-red-700 text-gray-100": theme == "danger",
      "bg-green-700 text-gray-100": theme == "success",
      "bg-yellow-300 text-gray-900": theme == "warning",
      "bg-blue-400 text-gray-900": theme == "info",
      "bg-gray-100 text-gray-900": theme == "light",
      "bg-black text-gray-100": theme == "dark",
      "rounded-xl": pill,
      rounded: !pill,
    }
  );

  var attrs = {
    ...props,
    className: themeClasses,
  };

  return (
    <>
      <span {...attrs}>{props.children}</span>
    </>
  );
}

export default Badge;
