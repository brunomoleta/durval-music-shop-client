export const upper = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

export const priceToString = (price: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price);

export const capitalizedFirstLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);
