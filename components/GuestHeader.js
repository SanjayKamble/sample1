import Link from "next/link";
function GuestHeader() {
  return (
    <>
      <header>
        <nav
          className="flex flex-row flex-nowrap items-center justify-between mt-0 py-4 px-6 border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-800"
          id="desktop-menu"
        >
          <Link href="/">
            <a className="flex items-center py-2 mr-4 text-xl cursor-pointer">
              <h2 className="text-2xl font-semibold text-gray-200 px-4 max-h-9 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-7 h-7 ltr:mr-2 rtl:ml-2 -mt-1"
                  viewBox="0 0 300.000000 300.000000"
                >
                  <g
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path
                      className="text-pink-500"
                      d="M1225 2825 c-546 -115 -959 -534 -1065 -1080 -28 -147 -28 -373 0
        -520 81 -419 350 -774 728 -964 115 -58 120 -58 65 3 -27 29 -65 84 -85 122
        -68 131 -90 236 -89 428 0 229 44 470 167 923 41 149 74 275 74 278 0 4 -102
        5 -227 3 -198 -4 -236 -7 -290 -25 -35 -12 -63 -18 -63 -14 0 4 22 43 49 87
        58 93 123 157 177 175 22 6 124 14 234 16 l195 5 33 112 c91 305 200 431 405
        465 43 7 31 9 -73 9 -94 1 -152 -5 -235 -23z"
                    />
                    <path
                      className="text-indigo-500"
                      d="M1695 2763 c-48 -77 -122 -231 -179 -375 -25 -65 -46 -120 -46 -123
        0 -7 995 -6 1069 1 34 4 61 12 61 18 0 6 -30 46 -65 88 -170 201 -426 361
        -687 428 -110 29 -111 28 -153 -37z"
                    />
                    <path
                      className="text-indigo-500"
                      d="M2660 2104 c-33 -36 -54 -47 -120 -67 -21 -6 -256 -12 -595 -16
        l-560 -6 -51 -180 c-62 -215 -116 -445 -144 -608 -74 -435 -37 -655 124 -740
        62 -32 189 -30 274 5 174 72 337 212 410 353 l20 40 24 -50 c32 -70 32 -162
        -1 -229 -48 -97 -216 -250 -383 -347 -86 -51 -170 -85 -261 -109 l-69 -17 94
        -6 c469 -33 947 205 1214 605 229 342 291 790 163 1173 -24 70 -76 192 -94
        217 -10 16 -14 14 -45 -18z"
                    />
                  </g>
                </svg>
                <span className="text-gray-700 dark:text-gray-200">
                  Schoolite
                </span>
              </h2>
            </a>
          </Link>
          <ul className="flex ltr:ml-auto rtl:mr-auto  mt-0">
            <li className="relative">
              <Link href="/admin/login">
                <a className=" py-3 px-4 flex hover:text-indigo-500 focus:outline-none gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>

                  <div className="relative inline-block">Login</div>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default GuestHeader;
