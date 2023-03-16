import Footer from "../Footer";
import GuestHeader from "../GuestHeader";

import { configure } from "axios-hooks";
import Axios from "axios";
import { ApiBaseURL, currentRouteName, route } from "../../config/routes";
const axios = Axios.create({
  baseURL: ApiBaseURL(),
});
configure({ axios });

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GuestPage(props) {
  return (
    <>
      <ToastContainer />
      <GuestHeader></GuestHeader>
      <main>
        <div className="relative py-12 md:bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40 md:min-h-min-screen">
          <div className="container xl:max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap flex-row -mx-4 justify-center">
              {props.children}
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default GuestPage;
