import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect } from "react";
import GuestPage from "../../components/layout/GuestPage";
import Button from "../../components/ui/Button";
import { route } from "../../config/routes";
import useLogout from "../../hooks/useLogout";

function logout() {
  useLogout();

  return (
    <GuestPage>
      <div className="max-w-full w-full md:w-2/3 lg:w-1/2 px-6 sm:px-12">
        <div className="relative">
          <div className="p-6 sm:py-8 sm:px-12 rounded-lg bg-white dark:bg-gray-800 shadow-xl">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="text-green-500 mx-auto w-16 h-16 mb-6 bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
              <h1 className="text-2xl font-bold mb-2">See You Again !</h1>
              <p className="text-gray-500 mb-6">
                You are now successfully sign out.
              </p>
              <Link href={route("admin.login")}>
                <Button>
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-box-arrow-in-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                      />
                    </svg>
                    Relogin
                  </>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </GuestPage>
  );
}

export default logout;
