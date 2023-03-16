import Spinner from "../../components/ui/Spinner";
import Link from "next/link";
import Button from "../../components/ui/Button";
import Ping from "../../components/ui/Ping";
import Page from "../../components/layout/Page";
import Container from "../../components/ui/Container";

function spinners() {
  return (
    <Page>
      <div className="flex flex-wrap flex-row">
        <div className="flex-shrink max-w-full px-4 w-full">
          <p className="text-xl font-bold mt-3 mb-5">Spinners</p>
          <Container>
            <br />
            <Spinner theme="primary"></Spinner>
            <Spinner theme="danger"></Spinner>
            <Spinner theme="success"></Spinner>
            <Spinner theme="warning"></Spinner>
            <Spinner theme="dark"></Spinner>
            <Spinner theme="light"></Spinner>

            <hr />
            <br />
            <Ping theme="primary"></Ping>
            <Ping theme="danger"></Ping>
            <Ping theme="success"></Ping>
            <Ping theme="warning"></Ping>
            <Ping theme="dark"></Ping>
            <Ping theme="light"></Ping>
          </Container>
        </div>
      </div>
    </Page>
  );
}

export default spinners;
