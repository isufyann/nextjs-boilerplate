import { FooterComponent } from "../components/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";

import Image from "next/image";
import hero_bg from "@/public/img/hero_bg.jpg"
import hero_bg_sourcing from "@/public/img/hero_bg.jpg"
import rice_img_1 from "@/public/img/rice_img-1.png";


export default function sourcing() {
    return (
        <main>
            <HeaderComponent />
            <section className="bg-[url('/img/hero_bg.jpg')] h-screen bg-cover bg-center py-5 mt-10 md:mt-20">
                <div className="max-w-4xl mx-auto bg-white/70 rounded-2xl p-6 mt-15 md:mt-30 sm:p-10 shadow-lg items-center text-center">
                    <p className="text-blue-700 font-semibold">Sourcing</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mt-3">
                        Quality Compliance Solutions <br />
                        <span className="text-red-700 text-xl sm:text-2xl">
                            Product Costs Too High? <br /> Stop Overpaying. Start with Us.
                        </span>
                    </h1>
                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        Your Competitive Edge in Sorucing: Whether you're a brand owner, industrial buyer, or supply chain manager, we help you secure top-quality products and raw materials--At unbeatable prices.
                    </p>
                </div>
            </section>




            <div className="flex flex-col md:flex-col my-10 text-center bg-blue-50 px-15 py-10 rounded-2xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-10 tracking-widest">What <span className="text-red-500">We Do & Who We</span> Help</h1>
                <p className="text-lg md:text-2xl px-5 md:px-50 tracking-wider leading-10">QCS Global Product sourcing helps business of all sizes source high-quality products and raw material at the best prices, solve supply chain challenges, and ensure reliable delivery</p>
            </div>


            <section className="flex flex-col md:flex-row bg-black/70 tracking-widest px-5 py-10 md:px-30 md:py-10 rounded-2xl">
                <div className="flex-1 text-5xl md:text-7xl font-bold text-white mx-10 md:mx-20 my-5 md:my-10">
                    Servies
                </div>
                <div className="flex-2 text-lg md:text-2xl text-white leading-10 mx-10 md:mx-20 my-5 md:my-10">
                    We source quality products from the best global suppliers for your business, saving you money and time while also reducing risks.
                </div>
            </section>
            <hr className="my-1 border-black w-3/4 mx-auto" />

            <div className="flex flex-col md:flex-row gap-7 bg-blue-200/70 px-10 md:px-60 py-5 md:py-10">
                <div className="flex-1 bg-white p-10 rounded-br-2xl rounded-tl-2xl">
                    <h1 className="text-2xl font-bold mb-5">Factory Tours</h1>
                    <p className="text-md leading-10 tracking-widest">QCS's factory tours go beyond standard visits – we give you direct access to top suppliers with expert negotiators by your side. Our custom guided tours in China, Indonesia, Vietnam, and Europe provide deep industry insights and exclusive sourcing opportunities.</p>
                    <button className="bg-black text-white rounded-2xl px-5 py-3 my-5 hover:bg-white hover:text-black transition duration-300">Discover Us</button>
                </div>
                <div className="flex-2 bg-white p-10 rounded-md">
                    <h1 className="text-2xl font-bold mb-5">Our Services</h1>
                    <p className="text-md leading-10 tracking-widest">QCS's Global Product Sourcing offers end-to-end sourcing solutions to streamline your supply chain. Our core services include:</p>
                    <ul className="text-md leading-10 tracking-widest list-inside list-disc">
                        <li>Global Supplier Sourcing: Finding reliable suppliers worldwide.</li>
                        <li>Price Negotiations: Securing the best deals for your business.</li>
                        <li>Product Customization: Ensuring products meet your exact specifications.</li>
                        <li>Quality Control & Inspections: Verifying product quality before shipment.</li>
                        <li>Logistics & Shipping: Managing efficient transport and delivery.</li>
                    </ul>
                    <p className="text-md leading-10 tracking-widest">We save you time, cut costs, and minimize supply chain risks — so you can focus on growing your business.</p>
                    <button className="bg-black text-white rounded-2xl px-5 py-3 my-5 hover:bg-white hover:text-black transition duration-300">Discover Us</button>
                </div>
            </div>
            <hr className="my-1 border border-black w-3/4 mx-auto" />

            <div className="flex flex-col md:flex-row gap-7 bg-blue-200/70 px-10 md:px-60 py-5 md:py-10">
                <div className="flex-2 bg-white p-10 rounded-br-2xl rounded-tl-2xl">
                    <h1 className="text-2xl font-bold mb-5">Trademark Registration</h1>
                    <p className="text-md leading-10 tracking-widest">Protect your brand from hijackers and supply chain disruptions by registering your trademark not only in your selling markets but also in your sourcing countries. QCS Global Product Sourcing offers comprehensive trademark services to secure your intellectual property worldwide.</p>
                    <button className="bg-black text-white rounded-2xl px-5 py-3 my-5 hover:bg-white hover:text-black transition duration-300">Discover Us</button>
                </div>
                <div className="flex-1 bg-white p-10 rounded-md">
                    <h1 className="text-2xl font-bold mb-5">Quality Control</h1>
                    <p className="text-md leading-10 tracking-widest">Don’t let defective products hurt your business. QCS's expert quality control inspections catch issues before they become costly mistakes—ensuring top-tier product standards and brand protection.</p>
                    <button className="bg-black text-white rounded-2xl px-5 py-3 my-5 hover:bg-white hover:text-black transition duration-300">Discover Us</button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row bg-orange-100/10">
                <div className="flex-1 p-10">
                    <Image src={hero_bg} alt="mission" width={500} height={300} className="rounded-xl"></Image>
                </div>
                <div className="flex-2 p-10">
                    <p className="text-lg mb-10">QCS is your one-stop solution for providing high-quality food grains such as rice, maize, wheat and himalayan pink salt, as well as fresh vegetables and fruits, Globally.</p>
                    <h1 className="text-2xl font-bold mb-5">Our Premium Offerings</h1>
                    <ol className="list-inside list-disc">
                        <li>Premium Quality Rice</li>
                        <li>Himalayan Pink Salt</li>
                        <li>Maize (Corn)</li>
                        <li>Green Millet</li>
                        <li>Fresh Fruits</li>
                        <li>Organic Vegetables</li>
                    </ol>
                </div>
            </div>

            {/* Salt data */}
            <div className="my-5 bg-green-200/10">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold text-center text-blue-500 py-5">Pakistan Premium Rice</h1>
                    <p className="text-xl text-center py-5">Aromatic, long-grain and premium rice for international markets.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center gap-5 p-5 mx-auto md:mx-10">
                    <div>
                        <Image src={rice_img_1} alt="mission" width={500} height={300} className=" hover:scale-90 translation duration-300" ></Image>
                        <p className="py-2 my-5 hover:scale-130 transition-all duration-300 hover:text-blue-500 hover:bg-green-100 rounded-2xl">1121 Sella Rice</p>
                    </div>
                    <div>
                        <Image src={rice_img_1} alt="mission" width={500} height={300} className=" hover:scale-90 translation duration-300" ></Image>
                        <p className="py-2 my-5 hover:scale-130 transition-all duration-300 hover:text-blue-500 hover:bg-green-100 rounded-2xl">1121 Sella Rice</p>
                    </div>
                    <div>
                        <Image src={rice_img_1} alt="mission" width={500} height={300} className=" hover:scale-90 translation duration-300" ></Image>
                        <p className="py-2 my-5 hover:scale-130 transition-all duration-300 hover:text-blue-500 hover:bg-green-100 rounded-2xl">1121 Sella Rice</p>
                    </div>
                    <div>
                        <Image src={rice_img_1} alt="mission" width={500} height={300} className=" hover:scale-90 translation duration-300" ></Image>
                        <p className="py-2 my-5 hover:scale-130 transition-all duration-300 hover:text-blue-500 hover:bg-green-100 rounded-2xl">1121 Sella Rice</p>
                    </div>
                </div>
            </div>

            <div className="my-5 bg-lime-100/20">
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold text-center text-blue-500 py-5">Himalayan Pink Salt</h1>
                    <p className="text-xl text-center py-5">Pure and natural Himalayan pink salt for culinary and wellness use.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 items-center text-center gap-5 p-5 mx-auto md:mx-10">
                    <div>
                        <Image src={rice_img_1} alt="mission" width={500} height={300} className="" ></Image>
                        <p>1121 Sella Rice</p>
                    </div>
                    <div>
                        <Image src={rice_img_1} alt="mission" width={500} height={300} className="" ></Image>
                        <p>1121 Sella Rice</p>
                    </div>
                    <div>
                        <Image src={rice_img_1} alt="mission" width={500} height={300} className="" ></Image>
                        <p>1121 Sella Rice</p>
                    </div>
                    <div>
                        <Image src={rice_img_1} alt="mission" width={500} height={300} className="" ></Image>
                        <p>1121 Sella Rice</p>
                    </div>
                </div>
            </div>



            <FooterComponent />
        </main >
    );
}