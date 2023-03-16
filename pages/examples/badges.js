import Button from "../../components/ui/Button";
import Link from "next/link";
import Badge from "../../components/ui/Badge";
import Page from "../../components/layout/Page";
import Container from "../../components/ui/Container";

function badges() {
  return (
    <>
      <Page>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">Badges</p>

            <Container>
              <div className="clear-both"></div>
              <Badge>Primary</Badge>
              <Badge theme="danger">Danger</Badge>
              <Badge theme="warning">Warning</Badge>
              <Badge theme="info">info</Badge>
              <Badge theme="success">Success</Badge>
              <Badge theme="light">Light</Badge>
              <Badge theme="dark">Dark</Badge>

              <h1 className="mt-10 mb-2 text-2xl font-bold">Pill Badges</h1>

              <Badge pill="true">Primary</Badge>
              <Badge pill="true" theme="danger">
                Danger
              </Badge>
              <Badge pill="true" theme="warning">
                Warning
              </Badge>
              <Badge pill="true" theme="info">
                info
              </Badge>
              <Badge pill="true" theme="success">
                Success
              </Badge>
              <Badge pill="true" theme="light">
                Light
              </Badge>
              <Badge pill="true" theme="dark">
                Dark
              </Badge>
              <hr />
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default badges;
