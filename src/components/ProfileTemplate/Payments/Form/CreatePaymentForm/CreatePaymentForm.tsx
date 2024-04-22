import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IPaymentContext, IPaymentForm } from "../../../../../types/payment";
import { IUserContext } from "../../../../../types/user";
import {
  usePaymentContext,
  useUserContext,
} from "../../../../../providers/hooks/";
import { paymentSchema } from "../../../../../schemas/paymentSchema";
import { FormUser } from "../../../../../styled-components/Modal.styles.tsx";
import Input from "../../../../Login/Forms/Input";
import Select from "../../../../Select";
import Loader from "../../../../Loader";
import Button from "../../../../Button";

function CreatePaymentForm() {
  const { createPaymentRequest } = usePaymentContext() as IPaymentContext;
  const { isLoading } = useUserContext() as IUserContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPaymentForm>({
    resolver: zodResolver(paymentSchema),
  });

  async function submit(formData: IPaymentForm) {
    await createPaymentRequest(formData);
    reset();
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <Input
        label="Número do Cartão"
        error={errors.number}
        {...register("number")}
        id="name"
      />
      <Select
        label="Tipo de Cartão"
        error={errors.type}
        {...register("type")}
        id="type"
        defaultValue=""
      >
        <option value="" disabled>
          Selecionar
        </option>
        <option value="debit">Débito</option>
        <option value="credit">Crédito</option>
      </Select>
      <Button disabled={isLoading}>
        {isLoading ? <Loader /> : "CADASTRAR CARTÃO"}
      </Button>
    </FormUser>
  );
}

export default CreatePaymentForm;
