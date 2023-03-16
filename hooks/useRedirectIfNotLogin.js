import { useRouter } from "next/router";
import { useEffect } from "react";
import { route } from "../config/routes";
import useAuthCheck from "./useAuthCheck";

function useRedirectIfNotLogin() {
  useEffect(() => {
    const router = useRouter();
    if (!useAuthCheck()) {
      router.push(`${route("admin.login")}?redirect=${route.route}`);
    }
  }, []);
}

export default useRedirectIfNotLogin;
