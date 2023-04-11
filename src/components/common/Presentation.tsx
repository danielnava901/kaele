import BackgroundContainer from "@/components/common/BackgroundContainer";

const Presentation = () => {
    return <BackgroundContainer
            imageUrl="/photos/flores1.jpeg"
    >
        <div className="flex w-full justify-between flex-col items-center text-center"
             style={{height: "100vh"}}>
            <div>Nos casamos</div>
            <div className="w-full lg:w-1/2 flex flex-col items-center">
                <span>Ingrid</span>
                <span>Y</span>
                <span>Victor</span>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
            <span>
                PARA NOSOTROS SERÁ UN PLACER CONTAR CON TU PRESENCIA EN ESTE DÍA TAN ESPECIAL,
                DONDE NUESTRAS HISTORIAS SE ENTRELAZAN ANTE DIOS, NUESTRA FAMILIA Y AMIGOS.
            </span>
            </div>
            <div className="w-full lg:w-1/2 flex justify-between items-center">
                <span>18</span>
                <span>Octubre</span>
                <span>2023</span>
            </div>
        </div>
    </BackgroundContainer>
}

export default Presentation;