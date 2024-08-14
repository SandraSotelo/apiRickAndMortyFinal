//El Layout es como un template, la manera general en que se me va a ver las páginas.  En otras palabras me contiene el encabezado y pie depágina

export default function Layout({children}){

    return(
    <>
    
    <nav className="bg-blue-500 text-white p-4 text-center">
        API RICK AND MORTY - PERSONAJES Y CARACTERÍSTICAS
      </nav>

      <main className="container mx-auto p-4">
        {children}
      </main>

      <footer className="bg-gray-400 text-center py-2">
        Desarrollo de Software - React II
      </footer>
       
    </>
    )
    }
    
    