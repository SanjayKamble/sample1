import Link from "next/link";
import Page from "../../components/layout/Page";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Tooltip from "../../components/ui/Tooltip";

function exampleIndex() {
  return (
    <Page>
      <div className="flex flex-wrap flex-row">
        <div className="flex-shrink max-w-full px-4 w-full">
          <p className="text-xl font-bold mt-3 mb-5">Examples</p>
          <Container>
            <ul>
              <li>
                Examples <hr /> <br />
              </li>
              <li>
                <Link href="/examples/buttons">
                  <Button theme="light">Buttons</Button>
                </Link>

                <Link href="/examples/accordion">
                  <Button theme="light">Accordions</Button>
                </Link>
                <Link href="/examples/alerts">
                  <Button theme="light">Alerts</Button>
                </Link>
                <Link href="/examples/badges">
                  <Button theme="light">Badges</Button>
                </Link>
                <Link href="/examples/breadcrumbs">
                  <Button theme="light">Breadcrumbs</Button>
                </Link>
                <Link href="/examples/dropdowns">
                  <Button theme="light">Dropdowns</Button>
                </Link>
                <Link href="/examples/listgroups">
                  <Button theme="light">Listgroups</Button>
                </Link>
                <Link href="/examples/modals">
                  <Button theme="light">Modals</Button>
                </Link>
                <Link href="/examples/spinners">
                  <Button theme="light">Spinners</Button>
                </Link>
                <Link href="/examples/tooltips">
                  <Button theme="light">Tooltips</Button>
                </Link>
                <Link href="/examples/forms">
                  <Button theme="light">Forms Elemets</Button>
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </Page>
  );
}

export default exampleIndex;
