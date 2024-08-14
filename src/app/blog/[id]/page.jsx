import { notFound } from "next/navigation";
import CharacterCard from "@/app/components/CharacterCard";

//Esta va a ser la página dinámica que se me genera a partir de las rutas dinámicas.

export async function generateStaticParams(){  
const posts = await fetch("https://rickandmortyapi.com/api/character").then((res) => res.json()) // Capturamos la información de la API para guardarla en posts

return posts.results.map((post) => ({id:String(post.id)}))  //En la función anonima construimos un objeto con un identificador, esto nos contruye las carpetas, convertimos el id que se recibe en numero a string porque es lo que se debe asignar como nombre a cada carpeta

}

export default async function Page({params}){ //Este Page recibe {params} tiene que ver con la función anterior, es algo automático.  Entonces automaticamente Next.js me genera un llamado a esto con esos parámetros para construir las páginas previamente
    const data = await getData(params.id)

    //Necesito mostrar un error al usuario por si falla la consulta
if(!data){
    notFound();
}

return (
    
<div className="w-1/3 mx-auto">
<div>
  <CharacterCard character={data} /> {/* Aquí usamos el componente CharacterCard.js que pintará las 100 tarjetas con los respectivos personajes e información*/}
</div>
</div>

)

}


async function getData(id){ //Esta es la función asincrona que me recibe el id y con el cual objeto la data de los personajes
    try{
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

        if(!res.ok){
            throw new Error("Hubo un error en la red");
        }

        const posts = await res.json();

        return posts;
        
    }catch (error){
        
        //Hacemos un manejo extra de errores
        console.error(error);
        return null;
    }

}