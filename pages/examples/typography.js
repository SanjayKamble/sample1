import Page from "../../components/layout/Page";
import Container from "../../components/ui/Container";
import { H1, H2, H3, H4, H5, H6 } from "../../components/ui/Html";

function typography() {
  return (
    <Page>
      <div className="flex flex-wrap flex-row">
        <div className="flex-shrink max-w-full px-4 w-full">
          <p className="text-xl font-bold mt-3 mb-5">Typography</p>
          <Container>
            <div className="clear-both"></div>

            <H4>Headings</H4>
            <hr></hr>
            <br />

            <H1>Heading 1</H1>
            <H2>Heading 2</H2>
            <H3>Heading 3</H3>
            <H4>Heading 4</H4>
            <H5>Heading 5</H5>
            <H6>Heading 6</H6>
          </Container>
        </div>
      </div>
    </Page>
  );
}

export default typography;
