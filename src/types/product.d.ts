import React from "react";

export interface IProductContext {
  id: number;
  brandName: string;
  categories: string[];
  createdAt: string;
  name: string;
  description?: string;
  price: number;
  image: string;
  stock: number;
  color?: string;
  condition: string;
  deletedAt?: string;
  ownerId: number;
  owner: Owner;
}

export interface productsPage {
  prevPage: string;
  nextPage: string;
}

export interface IProductsPage {
  prevPage: string | null;
  nextPage: string | null;
}

export interface CardProductProps {
  item: IProductContext;
  children?: React.ReactNode;
}

export interface IManagePagesProps {
  nextPage: string | null;
  prevPage: string | null;
  setPrevPage: React.Dispatch<React.SetStateAction<string | null>>;
  setNextPage: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface IGetProductsByCategoryResponse {
  nextPage: string | null;
  prevPage: string | null;
  products: IProductContext[];
}

export interface IFullProductContext {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  returnHome: () => void;

  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;

  allProducts: IProductContext[] | null;
  setAllProducts: React.Dispatch<React.SetStateAction<IProductContext[]>>;

  singleProduct: IProductContext | null;
  setSingleProduct: React.Dispatch<
    React.SetStateAction<IProductContext | null>
  >;

  productsPage: productsPage;

  getProductById: (id: number) => Promise<IProductContext>;
  getSingleProduct: (id: number) => Promise<void>;

  getProductsByCategory: (categoryId: string) => Promise<IProductsPage>;
  getProductsByBrand: (brandName: string) => Promise<IProductsPage>;
  searchProduct: (productInfo: string) => Promise<void>;

  getAllProducts: (page: number, perPage: number) => Promise<IProductsPage>;
}
