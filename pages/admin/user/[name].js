import { useRouter } from "next/router";
import { currentRouteName, route } from "../../../config/routes";

function admin() {
  const href = route("admin.user.name", { name: "Ganesh" });

  const router = useRouter();
  const { name } = router.query;

  console.log(router.route);
  return (
    <div>
      admin {name} and current route name is {currentRouteName()}
    </div>
  );
}

export default admin;
