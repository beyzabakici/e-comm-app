import React, { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../utils";
import { fetchProducts } from "../services";

type ProductProviderProps = {
  children: React.ReactNode;
};

type ProductContextData = {
  products: Product[];
};

const ProductContextDefaultData = {
  products: [],
};

export const ProductContext = createContext<ProductContextData>(
  ProductContextDefaultData
);

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts.then((response) => setProducts(response.data.products));
  }, []);

  return (
    <ProductContext.Provider value={{ products: products }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
