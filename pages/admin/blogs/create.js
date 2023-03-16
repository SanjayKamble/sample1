import Head from "next/head";
import Page from "../../../components/layout/Page";
import Container from "../../../components/ui/Container";

function create() {
  return (
    <>
      <Page>
        <Head>
          <title>Create new blog</title>
        </Head>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mb-5">Create new blog</p>

            <Container>
              <div className="mt-5">
                <p>Lorem</p>
              </div>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default create;
