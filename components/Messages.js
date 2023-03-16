import { useRef, useState } from "react";
import ClassNames from "classnames";
import useOnClickOutside from "../hooks/useOnClickOutside";
import Image from "next/image";

function Messages() {
  const ref = useRef();
  const [messagesOpen, setMessagesOpen] = useState(false);
  useOnClickOutside(ref, () => setMessagesOpen(false));
  return (
    <li className="relative" ref={ref}>
      <button
        className=" py-3 px-4 flex text-sm rounded-full focus:outline-none"
        id="messages"
        onClick={() => {
          setMessagesOpen(!messagesOpen);
        }}
      >
        <div className="relative inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6 bi bi-envelope"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"></path>
          </svg>
          <span className="flex justify-center absolute -top-2 ltr:-right-1 rtl:-left-1 text-center bg-pink-500 px-1 text-white rounded-full text-xs">
            <span className="align-self-center">3</span>
          </span>
        </div>
      </button>

      <div
        className={ClassNames(
          {
            hidden: !messagesOpen,
          },
          " w-72 origin-top-right absolute ltr:-right-36 md:ltr:right-0 rtl:-left-36 md:rtl:left-0 rounded top-full z-50 py-0.5 ltr:text-left rtl:text-right bg-white dark:bg-gray-800 border dark:border-gray-700  shadow-md"
        )}
      >
        <div className="p-3 font-normal border-b border-gray-200 dark:border-gray-700 dark:text-gray-300 ">
          <div className="relative">
            <div className="font-bold">Messages</div>
            <div className="absolute top-0 ltr:right-0 rtl:left-0">
              <a
                href="#"
                className="inline-block ltr:mr-2 rtl:ml-2"
                title="Mark all as read"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block w-4 h-4 bi bi-envelope-open"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-block ltr:mr-2 rtl:ml-2"
                title="New message"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block w-4 h-4 bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-h-60 overflow-y-auto scrollbars show">
          <a href="#">
            <div className="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700  dark:bg-gray-900 dark:bg-opacity-40 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-50">
              <div className="flex-shrink max-w-full px-2 w-1/4 text-center">
                <div className="relative">
                  <Image
                    src="/src/img/avatar/avatar2.png"
                    className="h-10 w-10 rounded-full mx-auto"
                    alt="Daniel Esteban"
                    width={40}
                    height={40}
                  ></Image>
                  <span
                    title="online"
                    className="flex justify-center absolute -bottom-0.5 ltr:right-2 rtl:left-2 text-center bg-green-500 border border-white w-3 h-3 rounded-full"
                  ></span>
                </div>
              </div>
              <div className="flex-shrink max-w-full px-2 w-3/4">
                <div className="text-sm font-bold dark:text-gray-300">
                  Daniel Esteban
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  What do you think about this project?
                </div>
                <div className="text-gray-500 text-sm mt-1">12m ago</div>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700  dark:bg-gray-900 dark:bg-opacity-40 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-50">
              <div className="flex-shrink max-w-full px-2 w-1/4 text-center">
                <div className="relative">
                  <Image
                    src="/src/img/avatar/avatar3.png"
                    className="h-10 w-10 rounded-full mx-auto"
                    alt="Carlos Garcia"
                    width={40}
                    height={40}
                  ></Image>
                  <span
                    title="busy"
                    className="flex justify-center absolute -bottom-0.5 ltr:right-2 rtl:left-2 text-center bg-pink-500 border border-white w-3 h-3 rounded-full"
                  ></span>
                </div>
              </div>
              <div className="flex-shrink max-w-full px-2 w-3/4">
                <div className="text-sm font-bold dark:text-gray-300">
                  Carlos Garcia
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Hello, how are you friends?
                </div>
                <div className="text-gray-500 text-sm mt-1">30m ago</div>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700  dark:bg-gray-900 dark:bg-opacity-40 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100 bg-gray-50">
              <div className="flex-shrink max-w-full px-2 w-1/4 text-center">
                <div className="relative">
                  <Image
                    src="/src/img/avatar/avatar4.png"
                    className="h-10 w-10 rounded-full mx-auto"
                    alt="Steven Rey"
                    width={40}
                    height={40}
                  ></Image>
                  <span
                    title="offline"
                    className="flex justify-center absolute -bottom-0.5 ltr:right-2 rtl:left-2 text-center bg-gray-500 border border-white w-3 h-3 rounded-full"
                  ></span>
                </div>
              </div>
              <div className="flex-shrink max-w-full px-2 w-3/4">
                <div className="text-sm font-bold dark:text-gray-300">
                  Steven Rey
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Thank you for your help today.
                </div>
                <div className="text-gray-500 text-sm mt-1">4h ago</div>
              </div>
            </div>
          </a>
          <a href="#">
            <div className="flex flex-wrap flex-row items-center border-b border-gray-200 dark:border-gray-700  dark:hover:bg-gray-900 dark:hover:bg-opacity-20 py-2 hover:bg-gray-100">
              <div className="flex-shrink max-w-full px-2 w-1/4 text-center">
                <div className="relative">
                  <Image
                    src="/src/img/avatar/avatar.png"
                    className="h-10 w-10 rounded-full mx-auto"
                    alt="Roman Davis"
                    width={40}
                    height={40}
                  ></Image>
                  <span
                    title="offline"
                    className="flex justify-center absolute -bottom-0.5 ltr:right-2 rtl:left-2 text-center bg-gray-500 border border-white w-3 h-3 rounded-full"
                  ></span>
                </div>
              </div>
              <div className="flex-shrink max-w-full px-2 w-3/4">
                <div className="text-sm font-bold dark:text-gray-300">
                  Roman Davis
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Do you have time? I want to call you.
                </div>
                <div className="text-gray-500 text-sm mt-1">5h ago</div>
              </div>
            </div>
          </a>
        </div>
        <div className="p-3 text-center font-normal dark:text-gray-300">
          <a href="#" className="hover:underline">
            Show all Messages
          </a>
        </div>
      </div>
    </li>
  );
}

export default Messages;
