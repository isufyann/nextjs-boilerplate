import hero_bg_sourcing from "@/public/img/QCS_sourcing.png"
import Image from "next/image";

export default function YourBusiness() {
    return (
        <main>
            {/* //////////////////////////////////// */}
            <section className="bg-[#1c1c1f] min-h-screen flex items-center justify-center px-8 py-16">
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

                    {/* Left Image */}
                    <div className="slide-right">
                        <Image src={hero_bg_sourcing} alt="img" width={500} height={300} className="rounded-[30px] w-full h-full object-cover"></Image>
                    </div>

                    {/* Right Content */}
                    <div className="slide-left text-white">

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            What Means for
                            <span className="block text-[#ff5a3d] mt-2">
                                Your Business
                            </span>
                        </h1>

                        <p className="text-2xl text-gray-200 mt-5 mb-10">
                            Working with QCS typically results in:
                        </p>

                        <div className="space-y-2">

                            {[
                                "Lower purchasing costs across multiple product categories",
                                "Standardized products across all locations",
                                "Improved brand consistency",
                                "Reduced supplier complexity",
                                "More efficient procurement processes",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 text-xl"
                                >
                                    <span className="text-[#ff5a3d] text-3xl">✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                        <a href="ContactUs">
                            <button className="mt-8 bg-pink-600 hover:bg-pink-700 transition px-10 py-5 rounded-lg text-lg font-medium">
                                Tell Us What You Need
                            </button></a>
                    </div>
                </div>
            </section>

        </main>
    );
}