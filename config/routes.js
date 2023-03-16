import { useRouter } from "next/router";

const API_BASE_URL = "http://127.0.0.1:8000/api/";

export function ApiBaseURL(url = "") {
  return API_BASE_URL + url;
}
/**Define All App routes here
 * @key = route name
 * @value = route path/URL
 */
const routes = {
  "admin.dashboard": "/",

  /** Admin Auth Routes */
  "admin.login": "/admin/login",
  "admin.logout": "/admin/logout",
  "admin.reset-password": "/admin/reset-password",
  "admin.change-password": "/admin/change-password",
  "admin.user.name": "/admin/user/[name]",
  "admin.multiple": "/admin/[param1]/[param2]",

  /** Components Examples */
  examples: "/examples",
  "examples.api": "/examples/api-get",
  "examples.apiput": "/examples/api-put",
  "examples.apipost": "/examples/api-post",
  "examples.blank": "/examples/blank",
  "examples.buttons": "/examples/buttons",
  "examples.accordion": "/examples/accordion",
  "examples.alerts": "/examples/alerts",
  "examples.badges": "/examples/badges",
  "examples.breadcrumbs": "/examples/breadcrumbs",
  "examples.dropdowns": "/examples/dropdowns",
  "examples.listgroups": "/examples/listgroups",
  "examples.modals": "/examples/modals",
  "examples.spinners": "/examples/spinners",
  "examples.tooltips": "/examples/tooltips",
  "examples.forms": "/examples/forms",
  "examples.typography": "/examples/typography",
  "examples.tabs": "/examples/tabs",
  "examples.toasts": "/examples/toasts",

  /** Blog */
  "admin.blogs": "/admin/blogs",
  "admin.blogs.create": "/admin/blogs/create",
  "admin.blogs.view": "/admin/blogs/[id]",
};
export default routes;

export function route(name, params = {}) {
  let href = routes[name] ? routes[name] : "/";
  const paramsKeys = Object.keys(params);

  for (let i = 0; i < paramsKeys.length; i++) {
    console.log(params[paramsKeys[i]]);
    var find = `[${paramsKeys[i]}]`;
    // var search = new RegExp(find, "g");
    href = href.replace(find, params[paramsKeys[i]]);
  }
  return href;
}

export function currentRouteName() {
  const router = useRouter();
  const href = router.route;
  return Object.keys(routes).find((key) => routes[key] === href);
}

export function currentRoute() {
  const router = useRouter();
  return router.route;
}
