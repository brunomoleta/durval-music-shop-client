import { z } from "zod";

const firstName = "Favor coloque o seu nome :)"
const lastName = "Favor coloque o seu sobrenome :)"
const nameSchema = z

  .object({
    firstName: z.string().min(1, firstName).trim().refine((value) => value !== "", {
      message: firstName,
    }),
    lastName: z.string().min(1, lastName).trim().refine((value) => value !== "", {
      message: lastName,
    }),
  });

export default nameSchema;
