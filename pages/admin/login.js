import Input from "../../components/ui/Input";
import Link from "next/link";
import { ErrorText, FormContainer, FormGroup } from "../../components/ui/Form";
import Label from "../../components/ui/Label";
import Checkbox from "../../components/ui/Checkbox";
import GuestPage from "../../components/layout/GuestPage";
import Button from "../../components/ui/Button";
import { H3 } from "../../components/ui/Html";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";

import useAxios from "axios-hooks";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setUser } from "../../store/features/user/userSlice";
import { route } from "../../config/routes";

/**
 * Validation Rules
 */
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(32).required(),
});

function login() {
  const toastId = "customId";
  const dispatch = useDispatch();
  /**
   * step:1 Extract Methods & State from useForm,
   * step:2 Pass Yup Resolver to useForm
   */
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [
    { data: postData, loading: postLoading, error: postError },
    executePost,
  ] = useAxios(
    {
      url: "auth/login",
      method: "POST",
      headers: { Accept: "application/json" },
    },
    { manual: true }
  );

  const router = useRouter();
  if (useAuthCheck()) {
    router.push(route("admin.dashboard"));
  }

  /**
   * Handles Login Logic
   * @param {*} formdata
   */
  async function handleLogin(formdata) {
    toast.loading("Please wait...", { toastId: toastId });
    await executePost({
      data: formdata,
    });
  }

  useEffect(() => {
    if (postData?.status) {
      // toast.error(postData.message);
      toast.update(toastId, {
        render: postData?.message,
        type: "error",
        isLoading: false,
        autoClose: true,
      });
    }
    if (postData?.errors) {
      toast.update(toastId, {
        render: postData?.message,
        type: "error",
        isLoading: false,
        autoClose: true,
      });
    }
    if (postData?.response?.token) {
      Cookies.set("jwt", postData?.response?.token);
      // toast.success(postData.message);
      toast.update(toastId, {
        render: postData?.message,
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      dispatch(setUser(postData?.response?.user));

      setTimeout(() => {
        if (router.query?.redirect) {
          router.push(router.query.redirect);
        } else {
          router.push(route("admin.dashboard"));
        }
      }, 3000);
    }

    if (postError) {
      toast.update(toastId, {
        render: postError.response.data.message,
        type: "error",
        isLoading: false,
        autoClose: true,
      });
      // console.log();
    }
  }, [postData, postLoading, postError]);

  return (
    <>
      <GuestPage>
        <FormContainer className=" max-w-full w-full md:w-5/12 lg:w-5/12 px-6 sm:px-12 ">
          <div className="relative">
            <form
              onSubmit={handleSubmit((data) => {
                handleLogin(data);
              })}
            >
              <H3 className="text-center">Login</H3>
              <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />
              {/** Email Field */}
              <FormGroup>
                <Input placeholder="Email address" {...register("email")} />
                <ErrorText>{errors?.email?.message}</ErrorText>
              </FormGroup>
              {/** Password Field */}
              <FormGroup>
                <Input
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  {...register("password", { required: true })}
                />
                <ErrorText>{errors.password?.message}</ErrorText>
              </FormGroup>
              {/** Remember Field */}
              <FormGroup>
                <Label className="block">
                  <Checkbox {...register("remember")}></Checkbox>
                  <span
                    className=" inline-block absolute"
                    style={{ marginTop: "-2px" }}
                  >
                    Remember me
                  </span>
                </Label>
              </FormGroup>
              {/** Submit */}
              <FormGroup>
                <Button type="submit" className="w-full">
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
                  Login
                </Button>
              </FormGroup>
            </form>
            <div className="mt-6">
              <p className="text-center">
                <Link href="/admin/reset-password">
                  <a className="hover:text-indigo-500"> Lost password ? </a>
                </Link>
              </p>
            </div>
          </div>
        </FormContainer>
      </GuestPage>
    </>
  );
}

export default login;
