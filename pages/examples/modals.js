import Button from "../../components/ui/Button";
import {
  Modal,
  ModalBody,
  ModalContext,
  ModalFooter,
  ModalHeader,
} from "../../components/ui/Modal";
import Link from "next/link";
import { useContext, useState } from "react";
import Page from "../../components/layout/Page";
import Container from "../../components/ui/Container";

function Modals() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);

  return (
    <>
      <Page>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">Modals</p>
            <Container>
              <div className="mt-5">
                <Button
                  theme="success"
                  onClick={() => {
                    setOpenModal(true);
                    console.log(openModal);
                  }}
                >
                  Open Modal
                </Button>
                <ModalContext.Provider value={{ openModal, setOpenModal }}>
                  <Modal>
                    <ModalHeader>Title of the modal</ModalHeader>
                    <ModalBody>Title of the modal</ModalBody>
                    <ModalFooter>
                      <div className="px-6 py-3 border-t dark:border-gray-700 flex justify-end">
                        <button
                          type="button"
                          className="py-2 px-4 inline-block text-center rounded leading-5 text-gray-800 bg-gray-100 border border-gray-100 hover:text-gray-900 hover:bg-gray-200 hover:ring-0 hover:border-gray-200 focus:bg-gray-200 focus:border-gray-200 focus:outline-none focus:ring-0 ltr:mr-2 rtl:ml-2"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          className="py-2 px-4 inline-block text-center rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0"
                        >
                          Saves Changes
                        </button>
                      </div>
                    </ModalFooter>
                  </Modal>
                </ModalContext.Provider>
              </div>
              <div className="mt-5">
                <Button
                  theme="success"
                  onClick={() => {
                    setOpenModal1(true);
                  }}
                >
                  Open Modal 2
                </Button>
                <ModalContext.Provider
                  value={{ openModal: openModal1, setOpenModal: setOpenModal1 }}
                >
                  <Modal>
                    <ModalHeader className="bg-red-700 text-white">
                      Title of the modal 2
                    </ModalHeader>
                    <ModalBody>Title of the modal2 </ModalBody>
                    <ModalFooter>
                      <Button
                        onClick={() => {
                          setOpenModal1(false);
                        }}
                        type="button"
                        theme="light"
                      >
                        Close
                      </Button>
                      <Button type="button" theme="primary">
                        Saves Changes
                      </Button>
                    </ModalFooter>
                  </Modal>
                </ModalContext.Provider>
              </div>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default Modals;
