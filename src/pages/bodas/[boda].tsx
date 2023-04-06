import Presentation from "@/components/common/Presentation";
import BrideAndGroom from "@/components/common/BrideAndGroom";
import Schedule from "@/components/common/Schedule";

const Boda = ({boda}) => {
    return <div>
        {/* Presentacion - saludo - fecha*/}
        <Presentation />
        {/* Foto novios - nosotros */}
        <BrideAndGroom />
        {/* Galeria */}
        {/* Itinerario */}
        <Schedule />
        {/* Nuestros padres */}
        {/* Texto bíblico */}
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