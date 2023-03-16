import Link from "next/link";
import Page from "../../components/layout/Page";
import Alert from "../../components/ui/Alert";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

function alerts() {
  return (
    <>
      <Page>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">Alerts</p>

            <Container>
              <div className="clear-both"></div>

              <Alert theme="primary">This is primary text</Alert>
              <Alert theme="warning">This is warning text</Alert>
              <Alert theme="success">This is success text</Alert>
              <Alert theme="danger">This is danger text</Alert>
              <Alert theme="info">This is info text</Alert>
              <Alert theme="light">This is light text</Alert>
              <Alert theme="dark">This is dark text</Alert>

              <h1 className="mt-10 mb-2 text-2xl font-bold">
                Closeable Alerts
              </h1>
              <hr />

              <Alert closeable="true" theme="primary">
                <a href="#" className="underline font-bold">
                  Dismiss Primary!
                </a>{" "}
                This is primary text
              </Alert>
              <Alert closeable="true" theme="warning">
                This is warning text
              </Alert>
              <Alert closeable="true" theme="success">
                This is success text
              </Alert>
              <Alert closeable="true" theme="danger">
                This is danger text
              </Alert>
              <Alert closeable="true" theme="info">
                This is info text
              </Alert>
              <Alert closeable="true" theme="light">
                This is light text
              </Alert>
              <Alert closeable="true" theme="dark">
                This is dark text
              </Alert>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default alerts;
