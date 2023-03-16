import React, { useEffect } from "react";
import GuestPage from "../../components/layout/GuestPage";
import { H1 } from "../../components/ui/Html";

import { FormContainer, FormGroup } from "../../components/ui/Form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useForm } from "react-hook-form";
import useAxios from "axios-hooks";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useRouter } from "next/router";
import { route } from "../../config/routes";

function login2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  if (useAuthCheck()) {
    router.push(route("admin.dashboard"));
  }
  const [{ data, loading, error, response }, login] = useAxios(
    {
      url: "auth/login",
      method: "POST",
      headers: { Accept: "Application/json" },
    },
    { manual: true }
  );

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
    if (data) {
      if (data?.status == "Error") {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        Cookies.set("jwt", data.token);
      }
    }
  }, [data, error]);

  return (
    <GuestPage>
      <div className="text-center">
        <H1>Testing Login functionality</H1>
        <FormContainer>
          {loading && <div>Loading ...</div>}

          <form
            onSubmit={handleSubmit((formdata) => {
              // alert(JSON.stringify(formdata));
              login({ data: formdata });
            })}
          >
            <FormGroup>
              <Input
                type="text"
                placeholder="Username"
                {...register("email")}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
              ></Input>
            </FormGroup>
            <Button type="submit" className="block w-full">
              Login
            </Button>
          </form>
        </FormContainer>
      </div>
    </GuestPage>
  );
}

export default login2;
