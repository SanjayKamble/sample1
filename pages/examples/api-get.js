import React from "react";
import useAxios from "axios-hooks";
import Page from "../../components/layout/Page";
import Head from "next/head";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import Spinner from "../../components/ui/Spinner";
import Badge from "../../components/ui/Badge";

function apiGet() {
  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca",
      method: "get",
      data: {
        title: "miss",
        firstName: "Sara",
        lastName: "Khan",
      },
      headers: { "app-id": "63161b461b0e4c4623ed1bd3" },
    },
    {
      manual: true,
    }
  );

  return (
    <>
      <Page>
        <Head>
          <title>Axios Get Example Hook</title>
        </Head>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">
              Axios Get Example Hook
            </p>
            <Badge>
              https://github.com/simoneb/axios-hooks#useaxiosurlconfig-options
            </Badge>

            <Container>
              <div className="mt-5">
                {loading && (
                  <p>
                    <Spinner theme="success" className="inline-block"></Spinner>{" "}
                    Loading..
                  </p>
                )}
                {error && <p>{error}..</p>}
                <div>
                  <Button theme="dark" onClick={refetch}>
                    Get User
                  </Button>
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default apiGet;
