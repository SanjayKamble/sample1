import Page from "../../components/layout/Page";
import Container from "../../components/ui/Container";
import Head from "next/head";
import { useSelector } from "react-redux";

function blank() {
  const user = useSelector((state) => state.user.value);

  return (
    <>
      <Page>
        <Head>
          <title>Page Title</title>
        </Head>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">Page Title</p>

            <Container>
              <div className="mt-5">
                <p>{user && user.name}</p>
              </div>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default blank;
