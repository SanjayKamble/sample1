import Tooltip from "../../components/ui/Tooltip";

import Link from "next/link";
import Button from "../../components/ui/Button";
import Page from "../../components/layout/Page";
import Container from "../../components/ui/Container";

function tooltips() {
  return (
    <>
      <Page>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">Tooltips</p>
            <Container>
              <div className="clear-both"></div>

              <Tooltip content="This is good" align="top">
                <Button theme="dark">Top aligned Tooltip</Button>
              </Tooltip>
              <Tooltip content="This is good" align="bottom">
                <Button theme="dark"> Bottom aligned Tooltip </Button>
              </Tooltip>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default tooltips;
