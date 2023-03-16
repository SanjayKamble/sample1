import Link from "next/link";
import GuestPage from "../../components/layout/GuestPage";
import Button from "../../components/ui/Button";
import { FormContainer, FormGroup } from "../../components/ui/Form";
import Input from "../../components/ui/Input";
import { H3 } from "../../components/ui/Html";

function reset_password() {
  return (
    <>
      <GuestPage>
        <FormContainer className=" max-w-full w-full md:w-5/12 lg:w-5/12 px-6 sm:px-12 ">
          <div className="relative">
            <form>
              <H3 className="text-center"> Reset Password</H3>
              <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />
              <p className="text-gray-500 mb-6">
                Enter your email address and we'll send you an email with
                instructions to reset your password.
              </p>
              <FormGroup>
                <Input type="email" name="email" placeholder="Email address" />
              </FormGroup>
              <Button className="w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-key"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                Reset Password
              </Button>
            </form>
            <div className="mt-6">
              <p className="text-center">
                <Link href="/admin/login">
                  <a className="hover:text-indigo-500"> Login </a>
                </Link>
              </p>
            </div>
          </div>
        </FormContainer>
      </GuestPage>
    </>
  );
}

export default reset_password;
