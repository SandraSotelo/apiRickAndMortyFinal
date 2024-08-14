import React from "react";
import Link from "next/link";

// Este componenete nos permite diseñar y dar formato a las tarjetas
const CharacterCard = ({ character }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-blue-300 hover:shadow-lg hover:scale-105 transition-transform">
      <img
        src={character.image}
        alt={`${character.name} Avatar`}
        className="w-full h-auto rounded-md mb-4"
      />
      <Link href={`/blog/${character.id}`}>
        <h3 className="text-lg font-semibold text-blue-500 hover:underline">
          {character.id}--{character.name}
        </h3>
      </Link>

      <p className="text-gray-600">Status: {character.status}</p>
      <p className="text-gray-600">Origin: {character.origin.name}</p>
      <p className="text-gray-600">Url: {character.origin.url}</p>
    </div>
  );
};

export default CharacterCard;
