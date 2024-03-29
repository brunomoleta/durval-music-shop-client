import React, { createContext, ReactNode, useState } from "react";
import { api } from "../../services/api";
import {
  IFullProductContext,
  IGetProductsByCategoryResponse,
  IProductContext,
} from "../../types/product";
import { useUserContext } from "./UserProvider.tsx";
import { IUserContext } from "../../types/user";

export const ProductContext = createContext({});

const useProductContext = () => React.useContext(ProductContext);

const ProductProvider = (props: { children: ReactNode }) => {
  const { setIsLoading } = useUserContext() as IUserContext;

  const [allProducts, setAllProducts] = useState<IProductContext[]>([]);
  const [ singleProduct, setSingleProduct] = useState(allProducts[0]);
  const [productsPage, setProductsPage] = useState({
    prevPage: "",
    nextPage: "",
  });
  const [page, setPage] = useState(1);

  const getAllProducts = async (page: number, perPage: number) => {
    try {
      setIsLoading(true);
      const { data } = await api.get("products/all", {
        params: { page: page, perPage: perPage },
      });
      const { products, prevPage, nextPage } = data;

      setProductsPage({ prevPage, nextPage });
      setAllProducts(products);

      return { prevPage, nextPage };
    } finally {
      setIsLoading(false);
    }
  };

  const getProductsByCategory = async (categoryName: string) => {
    try {
      setIsLoading(true);
      const { data } = await api.get(`products/category/${categoryName}`);
      const { products, prevPage, nextPage }: IGetProductsByCategoryResponse =
        data;
      setAllProducts(products);
      return { prevPage, nextPage };
    } finally {
      setIsLoading(false);
    }
  };

  const getProductsByBrand = async (brandName: string) => {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/products/brand/${brandName}`);
      const { products, prevPage, nextPage } = data;
      setAllProducts(products);
      return { prevPage, nextPage };
    } finally {
      setIsLoading(false);
    }
  };

  const getProductById = async (id: number | undefined) => {
    try {
      setIsLoading(true);

      const { data } = await api.get(`/products/${id}`);
      setSingleProduct(data);
      return data;
    } catch (error: unknown) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSingleProduct = async (id: number) => {
    try {
      const product: IProductContext = await getProductById(id);

      setSingleProduct(product);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const searchProduct = async (productInfo: string) => {
    try {
      setIsLoading(true);
      const { data } = await api.get(`products/search/${productInfo}`);
      setAllProducts(data);
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const values: IFullProductContext = {
    page,
    setPage,

    allProducts,
    setAllProducts,

    getAllProducts,
    getProductsByCategory,
    getProductsByBrand,
    searchProduct,

    singleProduct,
    setSingleProduct,

    getProductById,
    getSingleProduct,

    productsPage,
  };

  return (
    <ProductContext.Provider value={values}>
      {props.children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, useProductContext };
