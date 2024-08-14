import Link from "next/link";
import React from 'react';
import CharacterCard from '../components/CharacterCard.js';

//Esta es la página principal donde se aprecia la lista de personajes

//Procedemos a hacer SEO: optimización para buscadores

// Es la información que yo le entrego a los buscadores para que sepan de que se trata la página, sus palabras claves
export const metadata = {
    title: "Blog Personajes Rick and Morty",
    descripcion: "Esta es una lista detallada de los primeros 20 personajes de la API Rick and Morty donde se pueden ver algunas de sus caracteristica, tambien se puede ver la información de un solo personaje",
    keywords: ["Eick", "Morty", "API", "Caracteristicas", "Blog"]  // Estas son las palabras claves
}


export default async function Post(){ //Este nombre que pongo es indiferente, aveces significan algo en esta oportunidad no
const data= await getData(); 
    
//Iteramos entre los personajes los cuales se van renderizando para luego poder ser visualizados
return(
    <div>
        <h1>Por:  Sandra Milena Sotelo Tobar</h1>
        <p>Lista de Personajes</p>
        <br></br>
        <br></br><s></s>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
        </div>
    </div>)




}


//Creamos una función asincrona para obtener los datos del servidor.

async function getData(){
    try {

const res = await fetch("https://rickandmortyapi.com/api/character") // Obtenemos la data de la API

if(!res.ok){
    throw new Error("Hubo un error en la red");
}

//Convierto la información recibida a formato json y le digo que voy a esperar (await) hasta que termine.
const posts = await res.json();
return posts;

}catch (error){
console.error(error);
    }
}