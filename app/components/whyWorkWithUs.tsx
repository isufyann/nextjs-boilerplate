
export default function WhyWorkWithUs() {

    return (
        <main>
            <section className="bg-[#f3f3f3] min-h-screen py-20 px-6">

                {/* Heading */}
                <div className="text-center max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-7xl font-bold leading-tight">
                        Why Work with<br />
                        <span className="text-[#f05a43]">
                            QCS Global Product Sourcing
                        </span>
                    </h1>
                </div>

                {/* Content Box */}
                <div className="max-w-5xl mx-auto mt-8 md:mt-16 border border-black rounded-2xl p-5 md:p-8">

                    <div className="space-y-1">

                        {[
                            "40+ Sourcing Countries – Vietnam, India, Indonesia, Turkey, Poland, Mexico & more",
                            "60+ Experts in 20+ Languages – Local know-how, global coverage",
                            "No Commissions or Kickbacks – We work for you, not the factory",
                            "Custom Research Every Time – No recycled supplier lists",
                            "End-to-End Support – From sourcing to production, QC, and shipping",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-5 text-sm md:text-xl"
                            >
                                <span className="text-[#f05a43] text-3xl font-bold">
                                    ✓
                                </span>

                                <p className="leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}

                    </div>
                <a href="ContactUs">
                    <button className="mt-8 text-white hover:text-black bg-pink-600 hover:bg-red-400 transition px-10 py-5 rounded-lg text-lg font-medium">
                        Start Your Sourcing Journey – Get a free call with our sourcing team
                    </button></a>
                </div>
            </section>


        </main>
    );
}