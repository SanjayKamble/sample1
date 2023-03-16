import React from "react";
import useAxios from "axios-hooks";
import Page from "../../components/layout/Page";
import Head from "next/head";
import Container from "../../components/ui/Container";
import Badge from "../../components/ui/Badge";

function apiPut() {
  const [{ data: putData, loading: putLoading, error: putError }, executePut] =
    useAxios(
      {
        url: "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca",
        method: "PUT",
        headers: { "app-id": "63161b461b0e4c4623ed1bd3" },
      },
      { manual: true }
    );

  function updateData() {
    executePut({
      data: {
        title: "miss",
        firstName: "Sara",
        lastName: "Khan",
      },
    });
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
                {putLoading && <p>Loading..</p>}
                {putError && <p>{error}..</p>}
                <div>
                  <button onClick={updateData}>updateData</button>
                  <pre>{JSON.stringify(putData, null, 2)}</pre>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default apiPut;
