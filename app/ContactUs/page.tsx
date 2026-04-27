import { HeaderComponent } from "@/app/components/HeaderComponent";
import { FooterComponent } from "@/app/components/FooterComponent";
import { FaPhone } from "react-icons/fa6";

export default function ContactUsComponent() {
    return (
        <>
            <HeaderComponent />

            {/* Hero Section */}
            <section className="bg-[url('/img/hero_contact-us.jpg')] h-screen bg-cover bg-center text-center py-16 px-4 sm:px-6 lg:px-8 mt-16">
                <div className="max-w-4xl mx-auto bg-white/70 rounded-2xl p-6 mt-5 md:mt-20 sm:p-10 shadow-lg">
                    <p className="text-blue-700 font-semibold">Contact Us</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mt-3">
                        Quality Compliance Solutions
                    </h1>
                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        Have questions about our marine vehicle reports?<br />
                        Need assistance with your order?<br />
                        We're here to help you every step of the way.
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


            {/* Contact Form Section */}
            <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Form */}
                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
                            Send us a Message
                        </h2>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                            />

                            <textarea
                                rows={4}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-400 outline-none"
                            ></textarea>

                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Info Section */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                                Reach Out to Us
                            </h2>
                            <p className="text-gray-600">
                                We're here to help with your questions and concerns.
                                Contact us today for reliable support.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-xl shadow flex gap-3">
                                <span>🔒</span>
                                <div>
                                    <h4 className="font-semibold">Secure Communication</h4>
                                    <p className="text-sm text-gray-500">
                                        End-to-end encrypted communication
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl shadow flex gap-3">
                                <span>🎧</span>
                                <div>
                                    <h4 className="font-semibold">24/7 Support</h4>
                                    <p className="text-sm text-gray-500">
                                        Always available for you
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl shadow flex gap-3">
                                <span>🌍</span>
                                <div>
                                    <h4 className="font-semibold">Global Reach</h4>
                                    <p className="text-sm text-gray-500">
                                        Serving customers worldwide
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterComponent />
        </>
    );
}