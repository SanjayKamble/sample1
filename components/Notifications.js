import { useRef, useState } from "react";
import ClassNames from "classnames";
import useOnClickOutside from "../hooks/useOnClickOutside";

function Notifications() {
  const ref = useRef();
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  useOnClickOutside(ref, () => setNotificationsOpen(false));
  return (
    <>
      <li className="relative" ref={ref}>
        <button
          onClick={() => {
            setNotificationsOpen(!notificationsOpen);
          }}
          className="py-3 px-4 flex text-sm rounded-full focus:outline-none"
          id="notify"
        >
          <div className="relative inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6 bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            <span className="flex justify-center absolute -top-2 ltr:-right-1 rtl:-left-1 text-center bg-pink-500 px-1 text-white rounded-full text-xs">
              <span className="align-self-center">1</span>
            </span>
          </div>
        </button>

        <div
          className={ClassNames(
            { hidden: !notificationsOpen },
            " w-72 origin-top-right absolute ltr:right-0 rtl:left-0 rounded top-full z-50 py-0.5 ltr:text-left rtl:text-right bg-white dark:bg-gray-800 border dark:border-gray-700 shadow-md"
          )}
        >
          <div className="p-3 font-normal border-b border-gray-200 dark:border-gray-700 dark:text-gray-300">
            <div className="relative">
              <div className="font-bold">Notifications</div>
              <div className="absolute top-0 ltr:right-0 rtl:left-0">
                <a
                  href="#"
                  className="inline-block ltr:mr-2 rtl:ml-2 "
                  title="Clear all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-4 h-4 bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fillRule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto scrollbars show">
            <a className="relative" href="#">
              <div className="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:bg-opacity-40 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-50">
                <div className="flex-shrink max-w-full px-2 w-1/4 text-center">
                  <div className="flex justify-center mx-auto w-8 h-8 rounded-full bg-indigo-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="self-center w-4 h-4 bi bi-calendar4-event"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                      <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-shrink max-w-full px-2 w-3/4">
                  <div className="text-sm font-bold dark:text-gray-300">
                    Event will coming
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    Meeting with Mr.John Navas at:10.00Am
                  </div>
                  <div className="text-gray-500 text-sm mt-1">1h ago</div>
                </div>
              </div>
            </a>
            <a className="relative" href="#">
              <div className="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700 dark:hover:bg-gray-900 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100">
                <div className="flex-shrink max-w-full px-2 w-1/4 text-center">
                  <div className="flex justify-center mx-auto w-8 h-8 rounded-full bg-indigo-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="self-center w-4 h-4 bi bi-hand-thumbs-up"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-shrink max-w-full px-2 w-3/4">
                  <div className="text-gray-500 text-sm mt-1">
                    <b className="text-gray-600 dark:text-gray-400">Daniel</b>{" "}
                    like your post:{" "}
                    <b className="text-gray-600 dark:text-gray-400">
                      Hello World!
                    </b>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">3h ago</div>
                </div>
              </div>
            </a>
            <a className="relative" href="#">
              <div className="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700 dark:hover:bg-gray-900 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100">
                <div className="flex-shrink max-w-full px-2 w-1/4 text-center">
                  <div className="flex justify-center mx-auto w-8 h-8 rounded-full bg-indigo-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="self-center w-4 h-4 bi bi-hdd-stack"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z" />
                      <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                      <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-shrink max-w-full px-2 w-3/4">
                  <div className="text-sm font-bold dark:text-gray-300">
                    Server maintenance
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    Server maintenance at:07.00Am
                  </div>
                  <div className="text-gray-500 text-sm mt-1">8h ago</div>
                </div>
              </div>
            </a>
            <a className="relative" href="#">
              <div className="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700 dark:hover:bg-gray-900 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100">
                <div className="flex-shrink max-w-full px-2 w-1/4 text-center">
                  <div className="flex justify-center mx-auto w-8 h-8 rounded-full bg-indigo-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="self-center w-4 h-4 bi bi-chat-left"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-shrink max-w-full px-2 w-3/4">
                  <div className="text-gray-500 text-sm mt-1">
                    <b className="text-gray-600 dark:text-gray-400">Carlos</b>{" "}
                    comment in your post:{" "}
                    <b className="text-gray-600 dark:text-gray-400">
                      Hello World!
                    </b>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">1d ago</div>
                </div>
              </div>
            </a>
          </div>
          <div className="p-3 text-center font-normal">
            <a href="#" className="hover:underline dark:text-gray-300">
              Show all Notifications
            </a>
          </div>
        </div>
      </li>
    </>
  );
}

export default Notifications;
