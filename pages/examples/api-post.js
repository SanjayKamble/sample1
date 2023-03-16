import React from "react";
import useAxios from "axios-hooks";
import Page from "../../components/layout/Page";
import Head from "next/head";
import Container from "../../components/ui/Container";
import Badge from "../../components/ui/Badge";

function apiPost() {
  const [
    { data: postData, loading: postLoading, error: postError },
    executePost,
  ] = useAxios(
    {
      url: "https://dummyapi.io/data/v1/user/create",
      method: "POST",
      headers: { "app-id": "63161b461b0e4c4623ed1bd3" },
    },
    { manual: true }
  );

  async function updateData() {
    try {
      await executePost({
        data: {
          title: "miss",
          firstName: "Sara",
          lastName: "Khan",
          email: "saraalikhan@gmail.com",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Page>
        <Head>
          <title>Page Title</title>
        </Head>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">Page Title</p>
            <Badge>
              https://github.com/simoneb/axios-hooks#useaxiosurlconfig-options
            </Badge>

            <Container>
              <div className="mt-5">
                {postLoading && <p>Loading..</p>}
                {postError && <p>{JSON.stringify(postError.response)}..</p>}
                <div>
                  <button onClick={updateData}>updateData</button>
                  <pre>{JSON.stringify(postData, null, 2)}</pre>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default apiPost;
