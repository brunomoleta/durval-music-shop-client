import Gibson from "../assets/brand-logos/Gibson_logo.svg";
import Behringer from "../assets/brand-logos/Behringer-Logo.svg";
import Fender from "../assets/brand-logos/Fender_guitars_logo.svg";
import Zildjian from "../assets/brand-logos/Zildjian_Logo.svg";
import Shure from "../assets/brand-logos/Shure_Logo.svg";
import Epiphone from "../assets/brand-logos/Epiphone-Logo-1024x640.svg";
import { nanoid } from "nanoid";

import Quality from "../assets/illustrations/Best-Quality-Guarantee.svg";
import Delivery from "../assets/illustrations/Fast-Delivery.svg";
import Return from "../assets/illustrations/Free-Return.svg";
import EasyPay from "../assets/illustrations/Easy-Payment.svg";

const BREAKPOINTS = {
  tabletMin: 35,
  laptopMin: 62.5,
  desktopMin: 93.5,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin}rem)`,
};
export const logoName: string = "DURVAL music shop";
export const categories = [
  {
    url: "audio",
    text: "ÁUDIO",
  },
  {
    url: "cordas",
    text: "CORDAS",
  },
  {
    url: "bateria",
    text: "BATERIA",
  },
  {
    url: "sopro",
    text: "SOPRO",
  },
  {
    url: "teclas",
    text: "TECLAS",
  },
];
export const brands = ["gibson", "epiphone", "behringer", "fender", "todas"];

export const brandsLogo = [
  {
    logo: Shure,
    name: "shure",
    id: nanoid(),
  },
  {
    logo: Behringer,
    name: "behringer",
    id: nanoid(),
  },
  {
    logo: Gibson,
    name: "gibson",
    id: nanoid(),
  },
  {
    logo: Fender,
    name: "fender",
    id: nanoid(),
  },
  {
    logo: Epiphone,
    name: "epiphone",
    id: nanoid(),
  },
  {
    logo: Zildjian,
    name: "zildjian",
    id: nanoid(),
  },
];

export const LogInInfo = {
  title: "Login",
  description: "Logue para comprar o melhor equipamento por menos ",
  question: "Não tens conta com a gente?",
  buttonTitle: "CADASTRAR",
};
export const SignUpInfo = {
  title: "Bem-vinda(o)",
  description: "Cadastre-se conosco e encontre seu equipamento ",
  question: "Tens conta com a gente?",
  buttonTitle: "LOGIN",
};
export const HomeIllustrations = [
  {
    image: Quality,
    title: "Garantia de qualidade",
    description:
      "Os produtos aqui passam por um controle de qualidade profissional",
    id: nanoid(),
  },
  {
    image: EasyPay,
    title: "Pagamento facilitado",
    description: "Várias opções de pagamento que facilitam sua vida",
    id: nanoid(),
  },
  {
    image: Delivery,
    title: "Entrega no mesmo dia",
    description:
      "Toda compra feita até as 15:00 de um dia útil são entregues até 23:59",
    id: nanoid(),
  },
  {
    image: Return,
    title: "Direito de arrependimento",
    description:
      "Se você se arrepender em até 15 dias garantimos o dinheiro de volta",
    id: nanoid(),
  },
];

export const helpOptions = [
  "DEVOLUÇÃO E RECLAMAÇÃO",
  "ENTREGA E PAGAMENTO",
  "PERGUNTAS FREQUENTES",
  "CONTATO",
];

export const personalItems = [
  {
    url: "addresses",
    text: "ENDEREÇOS",
  },
  {
    url: "payments",
    text: "FORMAS DE PAGAMENTO",
  },
];
export const buyingItems = [
  {
    url: "orders",
    text: "PEDIDOS DE COMPRA",
  },
  {
    url: "anuncios",
    text: "ANÚNCIOS",
  },
];

export const schemaMessages = {
  firstName: "Favor coloque seu o nome :)",
  lastName: "Favor coloque seu sobrenome :)",
  email: "Por favor insira um e-mail válido",
  noConfirmation: "Favor confirmar a senha.",
  equalPassword: "As senhas hão de ser identicasíssimas.",
  minimumPassword: "O tamanho mínimo é de 8 caracteres :)",
};

export const corporationOptions = ["ARQUIVOS", "MÍDIA", "SOBRE NÓS"];
