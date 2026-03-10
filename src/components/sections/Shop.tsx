const Slika = ({ src, prc, altText }: { src:string, prc:string, altText:string }) => {
    return <img src={src} className={`object-cover h-120 block w-screen ${prc} lg:h-130 xl:h-175`} alt={`${altText}`} />;
}

const Button = ({ href }: { href:string }) => {
    return <button className="bg-white h-8 w-20 rounded-2xl text-black shadow-2xl hover:bg-[#CACACB] absolute mt-105 ml-6 z-40 lg:mt-115 xl:mt-160" >
        <a className="p-5" href={href}>Shop</a>
        </button>
}

const Text = ({ children }: { children:string }) => {
    return <h2 className="mt-90 text-[32px] ml-6 absolute z-40 text-white/70 md:text-[40px] md:mt-88 lg:mt-100 xl:mt-145 2xl:text-[52px] 2xl:mt-140">{children}</h2>
}


export const Shop = () => {
    return (
        <section id="collections" className="mt-10 xl:mt-20 2xl:mt-30">
        <div className="relative grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2">
            <div className="lg:col-span-2">
                <Button href="https://www.nike.com/w/running-37v7j" />
                <div className="bg-gradient-to-t from-black/90 to-transparent to-70% h-120 lg:h-130 xl:h-175 w-screen absolute"></div>
                <Text children="Run the Streets" />
                <Slika src="/Nike-Concept-Landing-Page/assets/nike-just-do-it.avif" prc="object-[66%] 2xl:w-screen" altText="Image showing a person wearing Nike shoes with his leg on a bench" />
            </div>
            <div>
                <Button href="https://www.nike.com/jordan/air-jordan-3" />
                <div className="bg-gradient-to-t from-black/90 to-transparent to-70% h-120 lg:h-130 xl:h-175 w-screen absolute"></div>
                <Text children="Airborne Since '88" />
                <Slika prc="" src="/Nike-Concept-Landing-Page/assets/jordans3.jpg" altText="Image showing pair of Nike Jordans" />
            </div>
            <div className="">
                <Button href="https://www.nike.com/w/basketball-shoes-3glsmzy7ok"/>
                <div className="bg-gradient-to-t from-black/90 to-transparent to-70% h-120 lg:h-130 xl:h-175 w-screen absolute"></div>
                <Text children="Court-ready classics" />
                <Slika prc="" src="/Nike-Concept-Landing-Page/assets/shoeZ.jpg" altText="Image showing pair of Nike sneakers near fence" />
            </div>
        </div>
        </section>
    )
}