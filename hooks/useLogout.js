import useAxios from "axios-hooks";
import Cookies from "js-cookie";

function useLogout() {
  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "auth/logout",
      method: "get",
      headers: { Authorization: "Bearer " + Cookies.get("jwt") },
    },
    {
      manual: false,
    }
  );

  Cookies.set("jwt", null);
}

export default useLogout;
