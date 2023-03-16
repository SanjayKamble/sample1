import React from "react";
import GuestPage from "../components/layout/GuestPage";
import { H1 } from "../components/ui/Html";

import { FormContainer, FormGroup } from "../components/ui/Form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useForm } from "react-hook-form";
import useAxios from "axios-hooks";

function test() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [{ data, loading, error, response }, login] = useAxios(
    {
      url: "auth/login",
      method: "POST",
      headers: { Accept: "Application/json" },
    },
    { manual: true }
  );

  return (
    <GuestPage>
      <div className="text-center">
        <H1>Testing Login functionality</H1>
        <FormContainer>
          {loading && <div>Loading ...</div>}
          {error && <div>{JSON.stringify(error.message)} ...</div>}
          <form
            onSubmit={handleSubmit((formdata) => {
              // alert(JSON.stringify(formdata));
              login({ data: formdata });
            })}
          >
            {JSON.stringify(data)}
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

export default test;
