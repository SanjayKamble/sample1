import useAxios from "axios-hooks";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/user/userSlice";

function useAuthCheck() {
  const dispatch = useDispatch();
  if (!Cookies.get("jwt")) {
    return false;
  }

  const [{ data, loading, error }, refetch] = useAxios(
    {
      url: "/user",
      method: "get",
      headers: { Authorization: "Bearer " + Cookies.get("jwt") },
    },
    {
      manual: false,
    }
  );

  return data?.id;
}

export default useAuthCheck;
