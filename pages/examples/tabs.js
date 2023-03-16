import Page from "../../components/layout/Page";
import Container from "../../components/ui/Container";
import Tabs, {
  TabContent,
  TabLink,
  TabLinks,
  TabPane,
} from "../../components/ui/Tabs";
import { H3 } from "../../components/ui/Html";
function tabs() {
  return (
    <>
      <Page>
        <div className="flex flex-wrap flex-row">
          <div className="flex-shrink max-w-full px-4 w-full">
            <p className="text-xl font-bold mt-3 mb-5">Tabs</p>

            <Container>
              <div className="mt-5"></div>
              <H3>Tabs Horizontal</H3>
              <Tabs className="mt-5">
                <TabLinks>
                  <TabLink target="home">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 bi bi-house-door"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path>
                    </svg>
                    Home
                  </TabLink>
                  <TabLink target="about">About</TabLink>
                  <TabLink target="contact">Contact</TabLink>
                </TabLinks>
                <TabContent>
                  <TabPane id="home" opened>
                    <H3>Home Page</H3>
                    <p>
                      This is some placeholder content the Home tab's associated
                      content. Clicking another tab will toggle the visibility
                      of this one for the next. The tab JavaScript swaps classes
                      to control the content visibility and styling. You can use
                      it with tabs, pills, and any other .nav-powered
                      navigation.
                    </p>
                  </TabPane>
                  <TabPane id="about">
                    <H3>About Page</H3>
                    <p>
                      Asynchronous methods and transitions All API methods are
                      asynchronous and start a transition. They return to the
                      caller as soon as the transition is started but before it
                      ends. In addition, a method call on a transitioning
                      component will be ignored.
                    </p>
                  </TabPane>
                  <TabPane id="contact">
                    <H3>Contact Page</H3>
                    <p>
                      Note that dynamic tabbed interfaces should not contain
                      dropdown menus, as this causes both usability and
                      accessibility issues. From a usability perspective, the
                      fact that the currently displayed tab’s trigger element is
                      not immediately visible (as it’s inside the closed
                      dropdown menu) can cause confusion. From an accessibility
                      point of view, there is currently no sensible way to map
                      this sort of construct to a standard WAI ARIA pattern,
                      meaning that it cannot be easily made understandable to
                      users of assistive technologies.
                    </p>
                  </TabPane>
                </TabContent>
              </Tabs>
              <br />
              <br />

              <hr></hr>
              <br />
              <H3 className="mt-2">Tabs & Fill</H3>
              <Tabs fill vertical>
                <TabLinks>
                  <TabLink target="home" className="w-80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 bi bi-house-door"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path>
                    </svg>
                    Home
                  </TabLink>
                  <TabLink target="about">About</TabLink>
                  <TabLink target="contact">Contact</TabLink>
                </TabLinks>
                <TabContent className="max-w-full px-4">
                  <TabPane id="home" opened>
                    <H3>Home Page</H3>
                    <p>
                      This is some placeholder content the Home tab's associated
                      content. Clicking another tab will toggle the visibility
                      of this one for the next. The tab JavaScript swaps classes
                      to control the content visibility and styling. You can use
                      it with tabs, pills, and any other .nav-powered
                      navigation.
                    </p>
                  </TabPane>
                  <TabPane id="about">
                    <H3>About Page</H3>
                    <p>
                      Asynchronous methods and transitions All API methods are
                      asynchronous and start a transition. They return to the
                      caller as soon as the transition is started but before it
                      ends. In addition, a method call on a transitioning
                      component will be ignored.
                    </p>
                  </TabPane>
                  <TabPane id="contact">
                    <H3>Contact Page</H3>
                    <p>
                      Note that dynamic tabbed interfaces should not contain
                      dropdown menus, as this causes both usability and
                      accessibility issues. From a usability perspective, the
                      fact that the currently displayed tab’s trigger element is
                      not immediately visible (as it’s inside the closed
                      dropdown menu) can cause confusion. From an accessibility
                      point of view, there is currently no sensible way to map
                      this sort of construct to a standard WAI ARIA pattern,
                      meaning that it cannot be easily made understandable to
                      users of assistive technologies.
                    </p>
                  </TabPane>
                </TabContent>
              </Tabs>
            </Container>
          </div>
        </div>
      </Page>
    </>
  );
}

export default tabs;
