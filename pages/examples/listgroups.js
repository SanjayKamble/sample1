import Link from "next/link";
import Container from "../../components/ui/Container";
import Page from "../../components/layout/Page";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import { ListGroup, ListGroupItem } from "../../components/ui/ListGroup";

function listgroups() {
  let theme = "primary";
  return (
    <>
      <Page>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">ListGroups</p>
            <Container>
              <div className="mt-5">
                <ListGroup theme={theme}>
                  <ListGroupItem>An item</ListGroupItem>
                  <ListGroupItem active="true">
                    A second item <Badge theme={theme}>25</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    A third item <Badge theme={theme}>10</Badge>
                  </ListGroupItem>
                  <ListGroupItem>
                    A fourth item <Badge theme={theme}>10</Badge>
                  </ListGroupItem>
                  <ListGroupItem>And a fifth one</ListGroupItem>
                </ListGroup>
              </div>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default listgroups;
