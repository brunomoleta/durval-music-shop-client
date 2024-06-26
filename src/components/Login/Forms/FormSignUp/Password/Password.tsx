import { useUserContext } from "../../../../../providers/hooks/";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../Input";
import React from "react";
import styled from "styled-components";
import { colors, fontSize } from "../../../../../styled-components/root.ts";
import passwordSchema from "../../../../../schemas/passwordSchema";
import { IUserContext } from "../../../../../types/user";
import { IPassword } from "../../../../../types/signUp";
import { FormUser } from "../../../../../styled-components/Modal.styles.tsx";
import Button from "../../../../Button";

const Ol = styled.ol`
  font-size: ${fontSize.smallLink};
  color: ${colors.grey70};

  & li {
    margin-inline-start: 24px;
    list-style-type: disc;
  }
`;

function Password() {
  const {
    setIsPasswordVisible,
    isPasswordVisible,
    setStep,
    signUpInfo,
    setSignUpInfo,
  } = useUserContext() as IUserContext;

  const id = React.useId();
  const passwordId = `${id}-password`;
  const confirmPasswordId = `${id}-confirm-password`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPassword>({
    resolver: zodResolver(passwordSchema),
  });

  function submit(formData: IPassword) {
    setSignUpInfo({ ...signUpInfo, ...formData });
    setStep(3);
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <>
      <FormUser onSubmit={handleSubmit(submit)}>
        <Input
          label="senha"
          type={isPasswordVisible ? "text" : "password"}
          error={errors.password}
          {...register("password")}
          id={passwordId}
        />

        <Input
          label="confirmação de senha"
          type={isPasswordVisible ? "text" : "password"}
          error={errors.confirmPassword}
          {...register("confirmPassword")}
          id={confirmPasswordId}
        />

        <Button>AVANÇAR</Button>
      </FormUser>
      <div>
        <h3> Sua senha deve cumprir os seguintes critérios:</h3>
        <Ol>
          <li>8 caracteres ou mais</li>
          <li>Uma letra Maiúscula</li>
          <li>Um caracterer especial (ex: #,$,!,*)</li>
          <li>Um número</li>
        </Ol>
      </div>
    </>
  );
}

export default Password;
