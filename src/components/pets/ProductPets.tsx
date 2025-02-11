import React from "react";
import ProductsContainer from "@components/shared/ProductsContainer";
import { productsForPets } from "@constants/products";

const categoriesPets = [
  "Todos",
  "Alimentos",
  "Accesorios",
  "Complementos",
  "Salud",
];

const animalTypesPets = ["Todos", "Perros", "Gatos", "Hámsters"];

const ProductsZoo: React.FC = () => {
  return (
    <ProductsContainer
      title="Productos para Mascotas"
      products={productsForPets}
      categories={categoriesPets}
      animalTypes={animalTypesPets}
    />
  );
};

export default ProductsZoo;
