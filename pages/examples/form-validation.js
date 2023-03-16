import { createRef, useState } from "react";
import Label from "../../components/ui/Label";
import Input from "../../components/ui/Input";
import { H1 } from "../../components/ui/Html";
import { FormContainer, FormGroup } from "../../components/ui/Form";
import Button from "../../components/ui/Button";

import { useForm } from "react-hook-form";

function formValidation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formdata, setFormdata] = useState();
  return (
    <FormContainer className="w-5/9 m-auto">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(JSON.stringify(data));
          setFormdata(data);
        })}
      >
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            {...register("firstName", { required: true })}
            name="firstName"
            id="firstName"
            placeholder="First Name"
          ></Input>
          {errors.firstName && <span>This field is required</span>}
        </FormGroup>
        <Button type="submit">Focus</Button>
        {JSON.stringify(formdata)}
      </form>
    </FormContainer>
  );
}
export default formValidation;
