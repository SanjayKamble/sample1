import { useRouter } from "next/router";
function Multiple() {
  const router = useRouter();
  const { param1, param2 } = router.query;
  return (
    <div>
      Multiple Paramerter Param1 is {param1} and Param2 is {param2}
    </div>
  );
}

export default Multiple;
