import { HeaderComponent } from "@/app/components/HeaderComponent";
import { FooterComponent } from "@/app/components/FooterComponent";
import { FaPhone } from "react-icons/fa6";

export default function AboutComponent() {
    return (
        <>
            <HeaderComponent />

            {/* Hero Section */}
            <section className="bg-[url('/img/hero_about-us.png')] h-screen bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8 mt-20 text-center">
                <div className="max-w-4xl mx-auto bg-black rounded-2xl p-6 mt-5 md:mt-20 sm:p-10 shadow-lg">
                    <p className="text-white font-semibold">About Us</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
                        Quality Compliance Solutions <br />
                        <span className="text-white text-xl sm:text-2xl">
                            Trusted 3rd Party
                        </span>
                    </h1>
                    <p className="mt-4 text-white text-base sm:text-lg">
                        For over 5 years, we’ve been providing reliable inspection services
                        and helping customers make informed decisions.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-9xl mx-auto py-10 my-10 text-center">
                <div className="bg-white rounded-2xl mx-5 py-15 p-5 inset-shadow-indigo-500 inset-shadow-sm drop-shadow-2xl hover:inset-shadow-none ease-in-out hover:drop-shadow-blue-950 duration-300">
                    <FaPhone className="text-3xl mx-auto text-blue-500" />
                    <p className="text-xl font-bold my-5">Phone</p>
                    <a href="tel:+15551234567" className="text-blue-500 hover:underline my-5">
                        +92-302-6775888
                    </a>
                    <p className="text-slate-600 my-5">Call us during business hours</p>
                    <hr className="my-2 border-black max-w-3/4 mx-auto "></hr>
                </div>

                <div className="bg-white rounded-2xl mx-5 py-15 p-5 inset-shadow-indigo-500 inset-shadow-sm drop-shadow-2xl hover:inset-shadow-none ease-in-out hover:drop-shadow-blue-950 duration-300">
                    <FaPhone className="text-3xl mx-auto text-blue-500" />
                    <p className="text-xl font-bold my-5">Phone</p>
                    <a href="tel:+15551234567" className="text-blue-500 hover:underline my-5">
                        +92-302-6775888
                    </a>
                    <p className="text-slate-600 my-5">Call us during business hours</p>
                    <hr className="my-2 border-black max-w-3/4 mx-auto "></hr>
                </div>

                <div className="bg-white rounded-2xl mx-5 py-15 p-5 inset-shadow-indigo-500 inset-shadow-sm drop-shadow-2xl hover:inset-shadow-none ease-in-out hover:drop-shadow-blue-950 duration-300">
                    <FaPhone className="text-3xl mx-auto text-blue-500" />
                    <p className="text-xl font-bold my-5">Phone</p>
                    <a href="tel:+15551234567" className="text-blue-500 hover:underline my-5">
                        +92-302-6775888
                    </a>
                    <p className="text-slate-600 my-5">Call us during business hours</p>
                    <hr className="my-2 border-black max-w-3/4 mx-auto "></hr>
                </div>

                <div className="bg-white rounded-2xl mx-5 py-15 p-5 inset-shadow-indigo-500 inset-shadow-sm drop-shadow-2xl hover:inset-shadow-none ease-in-out hover:drop-shadow-blue-950 duration-300">
                    <FaPhone className="text-3xl mx-auto text-blue-500" />
                    <p className="text-xl font-bold my-5">Phone</p>
                    <a href="tel:+15551234567" className="text-blue-500 hover:underline my-5">
                        +92-302-6775888
                    </a>
                    <p className="text-slate-600 my-5">Call us during business hours</p>
                    <hr className="my-2 border-black max-w-3/4 mx-auto "></hr>
                </div>
            </section>


            {/* About Section */}
            <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
                        About Us
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        RIS is a leading third-party inspection service provider in Pakistan.
                        We help businesses improve product quality and reduce risks in global supply chains.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Our services include inspection, supplier audits, lab testing,
                        certification, and consulting.
                    </p>

                    {/* Features */}
                    <div className="mt-8 space-y-4">

                        <div className="bg-gray-50 p-4 rounded-xl flex gap-3 shadow-sm">
                            <span>🔒</span>
                            <div>
                                <h4 className="font-semibold">Commitment</h4>
                                <p className="text-sm text-gray-500">
                                    Reliable and secure services
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl flex gap-3 shadow-sm">
                            <span>🎧</span>
                            <div>
                                <h4 className="font-semibold">24/7 Support</h4>
                                <p className="text-sm text-gray-500">
                                    Always available for customers
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl flex gap-3 shadow-sm">
                            <span>🌍</span>
                            <div>
                                <h4 className="font-semibold">Global Reach</h4>
                                <p className="text-sm text-gray-500">
                                    Serving worldwide clients
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            Our Story & Mission
                        </h2>

                        <p className="text-gray-700 mb-6">
                            Founded in 2009, we provide accurate inspection reports
                            for confident decision-making.
                        </p>

                        <p className="text-gray-700 mb-6">
                            We’ve grown into a trusted global service provider.
                        </p>

                        <div className="flex items-start gap-2">
                            <span className="text-purple-600">✔</span>
                            <p className="font-semibold">
                                Commitment to Excellence
                            </p>
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div className="bg-slate-800 rounded-xl p-5 text-white">
                            <div className="text-2xl mb-2">🛡️</div>
                            <h4 className="font-semibold">Secure & Reliable</h4>
                            <p className="text-sm text-gray-300 mt-1">
                                Data protection guaranteed
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-5 text-white">
                            <div className="text-2xl mb-2">🏅</div>
                            <h4 className="font-semibold">Industry Leading</h4>
                            <p className="text-sm text-gray-300 mt-1">
                                Trusted services
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-5 text-white">
                            <div className="text-2xl mb-2">👥</div>
                            <h4 className="font-semibold">Expert Team</h4>
                            <p className="text-sm text-gray-300 mt-1">
                                Skilled professionals
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-xl p-5 text-white">
                            <div className="text-2xl mb-2">📈</div>
                            <h4 className="font-semibold">Growth</h4>
                            <p className="text-sm text-gray-300 mt-1">
                                Continuous improvement
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <FooterComponent />
        </>
    );
}