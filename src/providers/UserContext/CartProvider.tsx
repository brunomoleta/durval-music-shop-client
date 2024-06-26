import React, { createContext, ReactNode, useEffect, useState } from "react";
import { IProductContext } from "../../types/product";
import { toast } from "react-toastify";
import { ICart, ICartContext } from "../../types/cart";

export const CartContext = createContext({});

const CartProvider = (props: { children: ReactNode }) => {
  const storedCartString = localStorage.getItem("@cartList");
  const cartLocalS: ICart[] = storedCartString && JSON.parse(storedCartString);

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cart, setCart] = useState<ICart[]>(() =>
    cartLocalS ? cartLocalS : [],
  );
  const [prevCounter, setPrevCounter] = React.useState(cart ? cart.length : 0);

  useEffect(() => {
    localStorage.setItem("@cartList", JSON.stringify(cart));
  }, [cart]);

  const addProductInCart = (newProduct: IProductContext) => {
    const tellUser = () => setIsCartModalOpen(!isCartModalOpen);

    const addItem = () => {
      setCart([...cart, { product: newProduct, amount: 1 }]);

      toast.success(`${newProduct.name} adicionado ao carrinho :D`);
      setPrevCounter(cart && cart.length > 1 ? cart.length - 1 : 0);
    };
    cart.some((item) => item.product.id === newProduct.id)
      ? tellUser()
      : addItem();
  };

  const updateProductAmount = (
    product: IProductContext,
    amount: number,
    id: number,
    operation: "add" | "remove" = "add",
  ) => {
    const oldCart = cart.filter((product) => product.product.id !== id);
    const newAmount = operation === "add" ? amount + 1 : amount - 1;
    const newCart = [...oldCart, { product: product, amount: newAmount }];

    setCart(newCart);
  };

  const removeProductInCart = (id: number) => {
    const removedProduct = cart.filter((product) => product.product.id === id);

    const newCart = cart.filter((product) => product.product.id !== id);
    setCart(() => newCart);
    setPrevCounter(cart && cart.length > 0 ? cart.length + 1 : 0);

    toast.success(`${removedProduct[0].product.name} excluído com sucesso.`);
  };
  const cleanCart = () => {
    toast.success(`Carrinho esvaziado.`);
    setCart([]);
    setIsCartModalOpen(!isCartModalOpen);
    setPrevCounter(0);
  };

  const values: ICartContext = {
    cart,
    setCart,

    addProductInCart,
    removeProductInCart,

    isCartModalOpen,
    setIsCartModalOpen,

    updateProductAmount,
    cleanCart,

    prevCounter,
    setPrevCounter,
  };

  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
};

export { CartProvider };
