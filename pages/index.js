import Page from "../components/layout/Page";

function Home() {
  return (
    <>
      <Page>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">CMS</p>
          </div>
        </div>
      </Page>
    </>
  );
}

export default Home;
