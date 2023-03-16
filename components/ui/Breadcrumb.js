import Link from "next/link";
import classNames from "classnames";

/**Breadcrumb */
export function Breadcrumb(props) {
  return (
    <>
      <nav aria-label="breadcrumb" className="mb-0">
        <ol className="flex flex-wrap justify-start bg-transparent text-sm mb-0 space-x-1">
          {props.children}
        </ol>
      </nav>
    </>
  );
}

/**
 <li>
      <a href="#" className="hover:text-indigo-500">
        Home
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 transform ltr:rotate-0 rtl:rotate-180 inline-block" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 512 512"><polyline points="184 112 328 256 184 400" style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px"></polyline></svg>
      </a>
    </li>
    <li>
      <a href="#" className="hover:text-indigo-500">
        Category
      </a>
    </li>
 */

export function BreadcrumbLink(props) {
  let link = "";
  const active = props.href ? false : true;
  const attrs = {
    ...props,
    className: classNames("hover:text-indigo-500", props.className),
  };
  if (!active) {
    link = (
      <Link href={props.href}>
        <div className="cursor-pointer">
          <a {...attrs}>{props.children}</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-1 transform ltr:rotate-0 rtl:rotate-180 inline-block"
            width="1rem"
            height="1rem"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <polyline
              points="184 112 328 256 184 400"
              style={{
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "48px",
              }}
            ></polyline>
          </svg>
        </div>
      </Link>
    );
  } else {
    link = (
      <li className="hidden md:block text-blue-700" aria-current="page">
        {props.children}
      </li>
    );
  }
  return <>{link}</>;
}
