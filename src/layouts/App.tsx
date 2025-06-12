// import Carrusel from "../components/Carrusel/Carrusel"
import Descripcion from "../ui/App/Descripcion"
import Navegacion from "../ui/App/Navegacion"
import Social from "../ui/App/Social"
import Video from "../ui/App/Video"

function App() {
  return (
    <>
      <Navegacion />
      <main>
        {/* <div className="flex justify-center bg-[#F8F6F1]">
          <Carrusel />
        </div> */}
        <Video />
        <Descripcion />
      </main>
      <footer className="">
        <h1 className="bg-[#F4A7C1] text-center text-3xl font-bold p-3">CONTACTANOS</h1>
        <Social />
      </footer>
    </>
  )
}

export default App
