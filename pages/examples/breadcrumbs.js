import Link from "next/link";
import Page from "../../components/layout/Page";
import { Breadcrumb, BreadcrumbLink } from "../../components/ui/Breadcrumb";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

function breadcrumbs() {
  return (
    <Page>
      <div className="flex flex-wrap flex-row">
        <div className="flex-shrink max-w-full px-4 w-full">
          <p className="text-xl font-bold mt-3 mb-5">Accordions</p>

          <Container>
            <div className="mt-5">
              <Breadcrumb>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                <BreadcrumbLink href="/">Products</BreadcrumbLink>
                <BreadcrumbLink>Xiomi 11i Lite NE 5G</BreadcrumbLink>
              </Breadcrumb>
            </div>
          </Container>
        </div>
      </div>
    </Page>
  );
}

export default breadcrumbs;
