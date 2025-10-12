const Slika = ({ src, prc }: { src:string, prc:string }) => {
    return <img src={src} className={`object-cover w-50 h-50 mr-6 2xl:w-70 2xl:h-100 ${prc}`} />;
}
const Text = ({ children }: { children:string }) => {
    return <h2 className="text-[20px] text-black/70">{children}</h2>
}

export const Classics = () => {
    return (
        <section id="classics" className="my-30">
            <div>
            <h1 className="text-[28px] opacity-70 mb-4 ml-2 mt-20">Shop The Classics</h1>
                <div className="whitespace-nowrap overflow-x-scroll px-2">
                    <div className="inline-block flex-col items-center">
                        <a href="https://www.nike.com/w/air-force-1-shoes-5sj3yzy7ok"><Slika src="src/assets/AirForce.avif" prc="" /></a>
                        <Text children="Air Force 1" />
                    </div>

                    <div className="inline-block flex-col items-center">
                        <a href="https://www.nike.com/w/air-max-shoes-a6d8hzy7ok"><Slika src="src/assets/AirMax.avif" prc="" /></a>
                        <Text children="Air Max" />
                    </div>

                    <div className="inline-block flex-col items-center">
                        <a href="https://www.nike.com/w/nike-c1ty-shoes-3pd26zy7ok"><Slika src="src/assets/C1TY.avif" prc="" /></a>
                        <Text children="C1TY" />
                    </div>

                    <div className="inline-block flex-col items-center">
                        <a href="https://www.nike.com/w/cortez-shoes-byfxzy7ok"><Slika src="src/assets/Cortez.avif" prc="" /></a>
                        <Text children="Cortez" />
                    </div>

                    <div className="inline-block flex-col items-center">
                        <a href="https://www.nike.com/w/nike-field-general-shoes-3blg9zy7ok"><Slika src="src/assets/Field.avif" prc="" /></a>
                        <Text children="Field General" />
                    </div>

                    <div className="inline-block flex-col items-center">
                        <a href="https://www.nike.com/w/dunk-shoes-90aohzy7ok"><Slika src="src/assets/Dunk.avif" prc="" /></a>
                        <Text children="Dunk" />
                    </div>

                    <div className="inline-block flex-col items-center">
                        <a href="https://www.nike.com/w/jordan-1-shoes-4fokyzy7ok"><Slika src="src/assets/AirJordan1.avif" prc="" /></a>
                        <Text children="Air Jordan 1" />
                    </div>

                    <div className="inline-block flex-col items-center">
                        <a href="https://www.nike.com/w/zoom-vomero-lifestyle-shoes-13jrmz7gee1zy7ok"><Slika src="src/assets/Vomero.avif" prc="" /></a>
                        <Text children="Vomero" />
                    </div>
                </div>
            </div>
        </section>
    )
}