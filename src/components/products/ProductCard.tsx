import type React from "react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  animalType: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  category,
  animalType,
}) => {
  const handleAvailabilityCheck = () => {
    // Aquí puedes implementar la lógica para consultar la disponibilidad
    alert(`Consultando disponibilidad de ${name}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
      <img
        src={
          image ||
          "https://res.cloudinary.com/dk6h3pmlf/image/upload/v1739307455/logo_c0l0r3.avif"
        }
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{name}</h3>
        <p className="text-sm text-texto mb-2 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-bold text-accent">
            ${price.toFixed(2)}
          </span>
          <span className="text-sm text-texto-claro">
            {category} - {animalType}
          </span>
        </div>
        <button
          onClick={handleAvailabilityCheck}
          className="w-full bg-bluePrimary text-white py-2 px-4 rounded hover:bg-bluePrimary/90 cursor-pointer transition-colors duration-300 mt-auto"
        >
          Consultar disponibilidad
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
