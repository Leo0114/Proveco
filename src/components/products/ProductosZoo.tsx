import React from "react";
import ProductsContainer from "@components/shared/ProductsContainer";

import { productsForZootecnicos } from "@constants/products";

const categoriesPets = [
  "Todos",
  "Alimentos",
  "Accesorios",
  "Complementos",
  "Salud",
];

const animalTypesPets = [
  "Todos",
  "Vacas",
  "Toros",
  "Caballos",
  "Gallos",
  "Bovinos",
];

const ProductsZoo: React.FC = () => {
  return (
    <ProductsContainer
      title="Productos para Animales"
      products={productsForZootecnicos}
      categories={categoriesPets}
      animalTypes={animalTypesPets}
    />
  );
};

export default ProductsZoo;
