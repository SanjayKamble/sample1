import Head from "next/head";
import Page from "../../components/layout/Page";
import Button from "../../components/ui/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../components/ui/Container";
import { H2 } from "../../components/ui/Html";

function toasts() {
  return (
    <>
      <Page>
        <Head>
          <title>Toasts(react-toastify)</title>
        </Head>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">
              Toasts(react-toastify)
            </p>

            <Container>
              <div className="mt-5">
                <div>
                  <Button
                    onClick={() => {
                      toast("Wow so easy !");
                    }}
                  >
                    Deafault Toast
                  </Button>

                  <Button
                    theme="success"
                    onClick={() => {
                      toast.success("Wow so easy !");
                    }}
                  >
                    Success Toast
                  </Button>

                  <Button
                    theme="danger"
                    onClick={() => {
                      toast.error("Wow so easy !");
                    }}
                  >
                    Error Toast
                  </Button>

                  <Button
                    theme="info"
                    onClick={() => {
                      toast.info("Wow so easy !");
                    }}
                  >
                    Info Toast
                  </Button>

                  <Button
                    theme="light"
                    onClick={() => {
                      toast("Wow so easy !", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                      });
                    }}
                  >
                    Bottom Right
                  </Button>

                  <Button
                    theme="light"
                    onClick={() => {
                      toast("Wow so easy !", {
                        position: toast.POSITION.TOP_LEFT,
                        autoClose: false,
                      });
                    }}
                  >
                    TOP LEFT Autoclose False
                  </Button>

                  <Button
                    theme="light"
                    onClick={() => {
                      toast("Wow so easy !", {
                        position: toast.POSITION.TOP_CENTER,
                      });
                    }}
                  >
                    TOP Center
                  </Button>

                  <Button
                    theme="dark"
                    onClick={() => {
                      const id = toast.loading("Please wait...");
                      //do something else
                      setTimeout(() => {
                        toast.update(id, {
                          render: "All is good",
                          type: "success",
                          isLoading: false,
                          autoClose: 2000,
                        });
                      }, 3000);
                    }}
                  >
                    Loading
                  </Button>

                  <ToastContainer />

                  <H2>Options</H2>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default toasts;
