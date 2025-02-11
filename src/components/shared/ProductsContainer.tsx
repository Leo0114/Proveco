// ProductsContainer.tsx

import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "@styles/custos-tabs.css";
import ProductCard from "@components/products/ProductCard";
import type { Product } from "@constants/products";

interface ProductsContainerProps {
  title: string;
  products: Product[];
  categories: string[];
  animalTypes: string[];
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({
  title,
  products,
  categories,
  animalTypes,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnimalType, setSelectedAnimalType] = useState("Todos");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedAnimalType === "Todos" ||
        product.animalType === selectedAnimalType)
  );

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full sm:w-64 px-4 py-2 border rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-full sm:w-auto px-4 py-2 border rounded-md"
          value={selectedAnimalType}
          onChange={(e) => setSelectedAnimalType(e.target.value)}
        >
          {animalTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <Tabs>
        <TabList className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {categories.map((category) => (
            <Tab
              key={category}
              className="px-4 py-2 text-texto cursor-pointer transition-colors duration-300 hover:text-primary focus:outline-none"
              selectedClassName="text-primary border-b-2 border-primary"
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {categories.map((category) => (
          <TabPanel key={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts
                .filter(
                  (product) =>
                    category === "Todos" || product.category === category
                )
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </section>
  );
};

export default ProductsContainer;
