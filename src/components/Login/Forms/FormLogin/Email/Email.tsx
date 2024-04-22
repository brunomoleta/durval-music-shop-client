import React from "react";

import { useUserContext } from "../../../../../providers/hooks/";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../Input";
import { IUserContext } from "../../../../../types/user";
import emailSchema from "../../../../../schemas/emailSchema";
import { FormUser } from "../../../../../styled-components/Modal.styles.tsx";
import Button from "../../../../Button";

function Email() {
  const { loginInfo, setLoginInfo, setStepLogin } =
    useUserContext() as IUserContext;

  const id = React.useId();
  const emailId = `${id}-email`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(emailSchema),
  });

  function submit(formData: { email: string }) {
    setLoginInfo({ ...loginInfo, ...formData });
    setStepLogin(1);
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <Input
        label="e-mail"
        type="text"
        error={errors.email}
        {...register("email")}
        id={emailId}
      />
      <Button>AVANÇAR</Button>
    </FormUser>
  );
}

export default Email;
