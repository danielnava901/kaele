import Presentation from "@/components/common/Presentation";
import BrideAndGroom from "@/components/common/BrideAndGroom";
import Schedule from "@/components/common/Schedule";
import Gallery from "@/components/common/Gallery";
import Mapa from "@/components/common/Mapa";
import Quote from "@/components/common/Quote";

const Boda = ({boda}) => {

    const photos = [
        {
            id: 3,
            src: "/photos/w3.jpeg",
            alt: ""
        },
        {
            id: 6,
            src: "/photos/w6.jpeg",
            alt: "seis"
        },
        {
            id: 1,
            src: "/photos/w1.jpeg",
            alt: ""
        },
        {
            id: 2,
            src: "/photos/w2.jpeg",
            alt: ""
        },
        {
            id:4,
            src: "/photos/w4.jpeg",
            alt: ""
        },
        {
            id: 5,
            src: "/photos/w5.jpeg",
            alt: ""
        },
    ];

    const quote = "Más valen dos que uno,\n" +
        "porque obtienen más fruto de su esfuerzo.\n" +
        "Si caen, el uno levanta al otro.\n" +
        "¡Ay del que cae\n" +
        "y no tiene quien lo levante!\n" +
        "Si dos se acuestan juntos,\n" +
        "entrarán en calor;\n" +
        "uno solo ¿cómo va a calentarse?\n" +
        "Uno solo puede ser vencido,\n" +
        "pero dos pueden resistir.\n" +
        "¡La cuerda de tres hilos\n" +
        "no se rompe fácilmente!";
    const quoteAuthor = "Ecleciastes 4:9-12"

    return <div>
        {/* Presentacion - saludo - fecha*/}
        <Presentation />
        {/* Foto novios - nosotros */}
        <BrideAndGroom />
        {/* Galeria */}
        <Gallery photos={photos} />
        {/* Itinerario */}
        <Schedule />
        {/* Nuestros padres */}
        {/* Texto bíblico */}
        <Quote text={quote} author={quoteAuthor} />
        {/* Ubicaciones */}
        {/* Mesas de regalo */}
        {/* Hospedajes */}
        {/* Contactos */}
    </div>
}

export async function getServerSideProps(context) {
    let {params: {boda}} = context


    if (boda != "ingrid-y-victor") {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            boda
        }, // will be passed to the page component as props
    }
}

export default Boda;