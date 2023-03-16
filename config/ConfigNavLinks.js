import { route } from "./routes";

const links = [
  {
    title: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 bi bi-house-door"
        viewBox="0 0 16 16"
      >
        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path>
      </svg>
    ),
    links: [
      {
        title: "Home",
        href: "/",
      },
      {
        title: "Examples",
        href: route("examples"),
      },
      {
        title: "Dynamic Routes",
        href: route("admin.user.name", { name: "Ganesh" }),
      },
      {
        title: "Multi-Dynamic Routes",
        href: route("admin.multiple", { param1: "Ganesh", param2: "Kanade" }),
      },
    ],
  },
  {
    title: "Authentication",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-box-arrow-in-right"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
        />
        <path
          fillRule="evenodd"
          d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
        />
      </svg>
    ),
    links: [
      {
        title: "Login",
        href: route("admin.login"),
      },
      {
        title: "Change Password",
        href: route("admin.change-password"),
      },
      {
        title: "Forgot Password",
        href: route("admin.reset-password"),
      },
    ],
  },
  {
    title: "Components",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 bi bi-layers"
        viewBox="0 0 16 16"
      >
        <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"></path>
      </svg>
    ),
    links: [
      {
        title: "Blank Page",
        href: route("examples.blank"),
      },

      {
        title: "Buttons",
        href: route("examples.buttons"),
      },
      {
        title: "Accordion",
        href: route("examples.accordion"),
      },
      {
        title: "Alerts",
        href: route("examples.alerts"),
      },
      {
        title: "Badges",
        href: route("examples.badges"),
      },
      {
        title: "Breadcrumbs",
        href: route("examples.breadcrumbs"),
      },
      {
        title: "Dropdowns",
        href: route("examples.dropdowns"),
      },
      {
        title: "Listgroups",
        href: route("examples.listgroups"),
      },
      {
        title: "Modals",
        href: route("examples.modals"),
      },
      {
        title: "Spinners",
        href: route("examples.spinners"),
      },
      {
        title: "Tooltips",
        href: route("examples.tooltips"),
      },
      {
        title: "Form Elements",
        href: route("examples.forms"),
      },
      {
        title: "Typography",
        href: route("examples.typography"),
      },
      {
        title: "Toasts",
        href: route("examples.toasts"),
      },
      {
        title: "API GET",
        href: route("examples.api"),
      },
      {
        title: "API PUT",
        href: route("examples.apiput"),
      },
      {
        title: "API POST",
        href: route("examples.apipost"),
      },
    ],
  },
  {
    title: "Blogs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="inline-block h-4 w-4 ltr:mr-2 rtl:ml-2 bi bi-house-door"
        viewBox="0 0 16 16"
      >
        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"></path>
      </svg>
    ),
    links: [
      {
        title: "Blog List",
        href: route("admin.blogs"),
      },
      {
        title: "Create Blog",
        href: route("admin.blogs.create"),
      },
    ],
  },
];
export default links;
