import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IAnuncioContext, IProductForm } from "../../../../../types/anuncios";
import {
  useAnuncioContext,
  useUserContext,
} from "../../../../../providers/hooks/";
import { IUserContext } from "../../../../../types/user";
import { anuncioSchema } from "../../../../../schemas/anuncioSchema";
import { FormUser } from "../../../../../styled-components/Modal.styles.tsx";
import Input from "../../../../Login/Forms/Input";
import Select from "../../../../Select";
import Loader from "../../../../Loader";
import React from "react";
import Button from "../../../../Button";

function CreateAnuncioForm() {
  const { createAnuncioRequest } = useAnuncioContext() as IAnuncioContext;
  const { isLoading } = useUserContext() as IUserContext;

  const id = React.useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProductForm>({
    resolver: zodResolver(anuncioSchema),
  });

  async function submit(formData: IProductForm) {
    const requestData = {
      ...formData,
      stock: Number(formData.stock),
      price: Number(formData.price),
      brandName: formData.brandName.toLowerCase(),
    };

    await createAnuncioRequest(requestData);
    reset();
  }

  return (
    <FormUser onSubmit={handleSubmit(submit)}>
      <Input
        label="Nome"
        error={errors.name}
        {...register("name")}
        id={`${id}-name`}
      />
      <Input
        label="Descrição"
        error={errors.description}
        {...register("description")}
        id={`${id}-description`}
      />
      <Input
        label="Preço (R$)"
        type="number"
        error={errors.price}
        {...register("price")}
        id={"price"}
      />
      <Input
        label="Imagem"
        error={errors.image}
        {...register("image")}
        id={`${id}-image`}
      />
      <Input
        label="Estoque"
        error={errors.stock}
        {...register("stock")}
        id={`${id}-stock`}
      />
      <Input
        label="Cor"
        error={errors.color}
        {...register("color")}
        id={`${id}-color`}
      />
      <Select
        label="Condição"
        error={errors.condition}
        {...register("condition")}
        id={`${id}-condition`}
        defaultValue=""
      >
        <option value="" disabled>
          Selecionar
        </option>
        <option value="new">Novo</option>
        <option value="used">Usado</option>
      </Select>
      <Input
        label="Categorias"
        error={errors.categories}
        {...register("categories")}
        id={`${id}-categories`}
      />
      <Input
        label="Marca"
        error={errors.brandName}
        {...register("brandName")}
        id={`${id}-brandName`}
      />
      <Button disabled={isLoading}>
        {isLoading ? <Loader /> : "CADASTRAR ANÚNCIO"}
      </Button>
    </FormUser>
  );
}

export default CreateAnuncioForm;
