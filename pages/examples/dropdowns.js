import Link from "next/link";
import Page from "../../components/layout/Page";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import {
  Dropdown,
  DropdownItem,
  DropdownItems,
  DropdownSeparator,
  DropdownTitle,
} from "../../components/ui/Dropdown";

function dropdowns() {
  return (
    <Page>
      <div className="flex flex-wrap flex-row">
        <div className="flex-shrink max-w-full px-4 w-full">
          <p className="text-xl font-bold mt-3 mb-5">Dropdowns</p>
          <Container>
            <div className="mt-5">
              <Dropdown>
                <DropdownTitle> Dropdown Active</DropdownTitle>
                <DropdownItems>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem active="true">Another Action</DropdownItem>
                  <DropdownSeparator></DropdownSeparator>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownItems>
              </Dropdown>

              <Dropdown dir="top" theme="success">
                <DropdownTitle> Dropdown</DropdownTitle>
                <DropdownItems>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownSeparator></DropdownSeparator>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownItems>
              </Dropdown>

              <Dropdown dir="right" theme="success">
                <DropdownTitle> Dropdown</DropdownTitle>
                <DropdownItems>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownSeparator></DropdownSeparator>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownItems>
              </Dropdown>

              <Dropdown theme="danger" outlined="true" dir="left">
                <DropdownTitle> Dropdown</DropdownTitle>
                <DropdownItems>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownSeparator></DropdownSeparator>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownItems>
              </Dropdown>
            </div>
          </Container>
        </div>
      </div>
    </Page>
  );
}

export default dropdowns;
