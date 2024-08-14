import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // En este proyecto usaremos Taildwild CSS para dar formato
  // Definimos la pagina incial con un saludo y el link para ingresar al blog

  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl text-center mt-8 mb-10">
        BIENVENIDOS AL MUNDO DE RICK AND MORTY
      </h1>
      <Link
        href="/blog"
        className="text-2xl text-blue-500 hover:underline mt-2"
      >
        ENTRAR
      </Link>
    </main>
  );
}
