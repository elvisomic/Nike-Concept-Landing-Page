

export const Hero = () => {
    return (
    <section>
    <div className="grid h-200 lg:grid-cols-2">
    <div className="2xl:left-20 md:p-10 md:top-10 md:left-15 lg:left-0 lg:top-50 relative top-15">
        <h1 className="2xl:text-9xl text-black lg:text-7xl text-6xl relative z-20 left-3 font-mont whitespace-nowrap"><i>AIR JORDAN</i></h1>
        <h2 className="opacity-60 2xl:text-5xl xl:left-0 text-black lg:text-4xl text-3xl relative z-20 left-2 font-bold">NIKE AIR JORDAN 1</h2>
        <p className="opacity-60 xl:left-0 relative top-2 left-2 text-[16px] lg:text-2xl md:left-2">Red. Bold. Unstoppable. Step up, stand out, and own every moment.<br className="hidden " />The legend lives on your feet.</p>
    </div>

    <div className="mt-5">
        <div className="h-180 relative">
            <div className="2xl:top-25 2xl:left-55 xl:top-20 xl:left-0 xl:h-150 xl:w-150 absolute top-30 lg:w-110 lg:h-110 md:top-5 lg:top-35 lg:left-15 md:left-45 left-4 h-100 w-100 rounded-[50%] bg-gray-300 shadow-2xl"></div>
            <img className="motion-preset-conefetti 2xl:left-10 relative xl:h-175 xl:left-[-150px] xl:top-5 z-30 h-120 right-15 top-20 lg:top-25 lg:left-[-50px] md:top-[-20px] md:left-20 rotate-340" src="/Nike-Concept-Landing-Page/assets/tike2.png" />

            <div className="2xl:top-120 2xl:left-75 xl:left-30 xl:top-125 xl:h-40 xl:w-40 absolute z-40 top-105 lg:top-105 lg:left-40 md:top-75 md:left-65 md:h-25 md:w-25 left-30 h-20 w-20 rounded-[50%] bg-radial from-red-500/20 to-white/10 backdrop-blur-[10px] shadow-xl"></div>
            <div className="2xl:top-60 2xl:left-150 xl:top-55 xl:left-95 xl:h-40 xl:w-40 absolute z-30 top-60 left-70 lg:top-60 lg:left-85 h-20 w-20 md:h-25 md:w-25 md:top-25 md:left-115 rounded-[50%] bg-radial from-red-500/20 to-white/10 backdrop-blur-[10px] shadow-xl"></div>
            <div className="2xl:top-32 2xl:left-80 xl:top-28 xl:left-25 xl:h-50 xl:w-50 absolute z-10 top-40 left-25 lg:top-40 lg:left-32 lg:h-40 lg:w-40 h-30 w-30 md:top-10 md:left-65 rounded-[50%] bg-radial from-red-500/20 to-white/10 backdrop-blur-[10px] shadow-xl"></div>
        </div>
    </div>
    </div>

    </section>
    )
};