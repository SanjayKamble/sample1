import { createContext, useEffect, useState } from "react";

import ClassNames from "classnames";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import { Breadcrumb, BreadcrumbLink } from "../ui/Breadcrumb";
import {
  currentRouteName,
  baseURL,
  route,
  ApiBaseURL,
} from "../../config/routes";
import useAxios, { configure } from "axios-hooks";
import Axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser, unsetUser } from "../../store/features/user/userSlice";
const axios = Axios.create({
  baseURL: ApiBaseURL(),
});
configure({ axios });

export const PageContext = createContext(null);

function Page(props) {
  const [navOpen, setNavOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState(0);
  const [currentLink, setCurrentLink] = useState(0);

  const dispatch = useDispatch();

  /** Check if user is logged in or not*/
  const [{ data: userData, loading: getLoading, error: getError }, getUser] =
    useAxios(
      {
        url: "/user",
        method: "get",
        headers: { Authorization: "Bearer " + Cookies.get("jwt") },
      },
      {
        manual: true,
      }
    );
  const router = useRouter();
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (userData?.id) {
      dispatch(setUser(userData));
    }
  }, [userData]);

  if (getError?.response?.data?.message == "Unauthenticated.") {
    dispatch(unsetUser());
    router.push(route("admin.login"));
  }
  return (
    <>
      <PageContext.Provider
        value={{
          navOpen,
          setNavOpen,
          activeNavLink,
          setActiveNavLink,
          currentLink,
          setCurrentLink,
        }}
      >
        <div className="wrapper overflow-x-hidden bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
          <Navbar></Navbar>
          <div
            className={ClassNames(
              "flex flex-col ltr:ml-64 rtl:mr-64 min-h-screen transition-all duration-500 ease-in-out",
              {
                "ltr:ml-64 ltr:-mr-64 md:ltr:ml-0 md:ltr:mr-0 rtl:mr-64 rtl:-ml-64 md:rtl:mr-0 md:rtl:ml-0":
                  navOpen,
                "ltr:ml-0 ltr:mr-0 md:ltr:ml-64 rtl:mr-0 rtl:ml-0 md:rtl:mr-64":
                  !navOpen,
              }
            )}
          >
            <Header></Header>
            <main className="pt-20 -mt-2 wrapper overflow-x-hidden bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40 min-h-screen">
              <div className="mx-auto p-2">
                <div className="px-4">
                  <Breadcrumb>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    {currentRouteName() &&
                      currentRouteName() !== "admin.dashboard" &&
                      currentRouteName()
                        .split(".")
                        .map((route) => {
                          return (
                            <BreadcrumbLink
                              href="/"
                              className="capitalize"
                              key={route}
                            >
                              {route}
                            </BreadcrumbLink>
                          );
                        })}
                  </Breadcrumb>
                </div>

                {props.children}
              </div>
            </main>
            <Footer></Footer>
          </div>
        </div>
      </PageContext.Provider>
    </>
  );
}

export default Page;
