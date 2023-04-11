import BackgroundContainer from "@/components/common/BackgroundContainer";

const BrideAndGroom = () => {
    return <BackgroundContainer imageUrl="/photos/flores1.jpeg">
        <div className="w-full flex flex-col justify-around items-center"
             style={{minHeight: "100vh"}}
        >
            <div className="w-full lg:w-1/2 text-center">La boda de Ingrid y Victor</div>
            <div className="w-full lg:w-1/2 text-center">
                foto
            </div>
            <div className="w-full lg:w-1/2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ad adipisci aspernatur commodi dolore dolorum exercitationem facere fugiat,
                harum labore laudantium mollitia natus nisi quo quos, repellat suscipit ullam
                velit voluptatum!
            </div>
        </div>
    </BackgroundContainer>
}

export default BrideAndGroom;