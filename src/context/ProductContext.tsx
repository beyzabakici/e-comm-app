import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../utils";
import { fetchProducts, getCatagories } from "../services";

type ProductProviderProps = {
  children: React.ReactNode;
};

type ProductContextData = {
  products: Product[];
  categories: string[];
};

const ProductContextDefaultData = {
  products: [],
  categories: [],
};

export const ProductContext = createContext<ProductContextData>(
  ProductContextDefaultData
);

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts().then((response) => setProducts(response.data.products));
    getCatagories().then((response) => setCategories(response.data));
  }, []);

  return (
    <ProductContext.Provider
      value={{ products: products, categories: categories }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
