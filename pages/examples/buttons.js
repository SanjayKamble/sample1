import Button from "../../components/ui/Button";
import Link from "next/dist/client/link";
import Page from "../../components/layout/Page";
import Container from "../../components/ui/Container";

function buttons() {
  return (
    <Page>
      <div className="flex flex-wrap flex-row">
        <div className="flex-shrink max-w-full px-4 w-full">
          <p className="text-xl font-bold mt-3 mb-5">Buttons</p>
          <Container>
            <div className="clear-both"></div>
            <div className="clear-both"></div>
            <Button theme="primary">Primary</Button>
            <Button theme="danger">Danger</Button>
            <Button theme="success">Success</Button>
            <Button theme="warning">Warning</Button>
            <Button theme="light">Light</Button>
            <Button theme="info">Info</Button>
            <Button theme="dark">dark</Button>
            <br />
            <Button outlined="true" theme="primary">
              Primary
            </Button>
            <Button outlined="true" theme="danger">
              Danger
            </Button>
            <Button outlined="true" theme="success">
              Success
            </Button>
            <Button outlined="true" theme="warning">
              Warning
            </Button>
            <Button outlined="true" theme="light">
              Light
            </Button>
            <Button outlined="true" theme="info">
              Info
            </Button>
            <Button outlined="true" theme="dark">
              dark
            </Button>

            <br />
            <Button disabled theme="primary">
              Primary
            </Button>
            <Button disabled theme="danger">
              Danger
            </Button>
            <Button disabled theme="success">
              Success
            </Button>
            <Button disabled theme="warning">
              Warning
            </Button>
            <Button disabled theme="light">
              Light
            </Button>
            <Button disabled theme="info">
              Info
            </Button>
            <Button disabled theme="dark">
              dark
            </Button>
          </Container>
        </div>
      </div>
    </Page>
  );
}

export default buttons;
