export default function Descripcion() {
    return (
    <div className="flex flex-col items-center flex-wrap bg-[#F8F6F1]" >
        <h1 className="bg-[#F4A7C1] text-center font-bold text-2xl p-3 w-full">Descripcion</h1>
        <div className="flex flex-wrap flex-col md:flex-row sm:justify-center">
            <div className="m-4 p-2 shadow-lg rounded-4xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 bg-[#AEC6CF] hover:bg-[#9794f6] max-w-[250px]">
                <p className="text-justify max-w-[700px] text-sm py-5 px-3 font-mono ">
                En Dely Sweets convertimos lo dulce en momentos inolvidables. Somos un emprendimiento artesanal que prepara postres caseros con ingredientes frescos, decoraciones encantadoras y mucho cariño.
                Cada postre está hecho a mano, con dedicación y una presentación única que encanta a la vista y al paladar. Perfectos para regalar, celebrar o simplemente consentirte.
                </p>
            </div>
        </div>
    </div>
    )
};
