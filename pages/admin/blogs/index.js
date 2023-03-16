import Head from "next/head";
import Page from "../../../components/layout/Page";
import Container from "../../../components/ui/Container";

function index() {
  return (
    <>
      <Page>
        <Head>
          <title>Manage Blogs</title>
        </Head>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mb-5">Manage Blogs</p>

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

export default index;
