// "use client";
// import { useState } from "react";

import { HeaderComponent } from "@/app/components/HeaderComponent";
import { FooterComponent } from "@/app/components/FooterComponent";
import AQLComponent from "@/app/components/AQLComponent";

import Image from "next/image";
import Levi from "@/public/img/brand_ Levi.png";
import HM from "@/public/img/brand_H&M.png";
import JCPenny from "@/public/img/brand_JCPenney-Logo.png";
import LeeCooper from "@/public/img/brand_Lee-Cooper.png";
import TESCO from "@/public/img/brand_TESCO.png";

import inspection from "@/public/img/icon_card_inspection.png";
import audit from "@/public/img/icon_card_audit.png";
import labTest from "@/public/img/icon_card_lab-technician.png";
import certificate from "@/public/img/icon_card_certificate.png";

import { IoIosSettings } from "react-icons/io";
import InspectionCustomersComponent from "../components/InspectionCustComponent";


export default function AQLLevel() {
    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="font-sans">
            <HeaderComponent />

            {/* Hero Section */}
            <section className="bg-[url('/img/hero_aql.jpg')] h-screen bg-cover bg-center py-5 mt-10 md:mt-20">

                <div className="max-w-4xl mx-auto bg-white/70 rounded-2xl p-6 mt-15 md:mt-30 sm:p-10 shadow-lg items-center text-center">
                    <p className="text-blue-700 font-semibold">Acceptable Quality Level</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mt-3">
                        Quality Compliance Solutions <br />
                        <span className="text-black text-xl sm:text-2xl">
                            Trusted 3rd Party
                        </span>
                    </h1>
                    <p className="mt-4 text-gray-700 text-base sm:text-lg">
                        We provide comprehensive quality compliance solutions to ensure your products meet the highest standards. Our trusted 3rd party services include inspections, audits, lab tests, and certifications to help you maintain quality and build trust with your customers.
                        AQL level as per customer requirementd.
                    </p>
                </div>
            </section>

            <hr className="my-10 border-black w-3/4 mx-auto" />

            <InspectionCustomersComponent />

            <hr className="my-10 border-black w-3/4 mx-auto" />

            {/* AQL Level component used here */}
            <AQLComponent />

            <hr className="my-10 border-black w-3/4 mx-auto" />



            {/* Stats */}
            <section className="bg-blue-900 text-white py-15 md:py-30 relative">
                <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-5 text-center">

                    <div>
                        <div className="text-2xl md:text-5xl my-2 md:my-5">⚙️</div>
                        <h2 className="text-3xl md:text-4xl font-bold my-5">500+</h2>
                        <p className="text-lg md:text-md tracking-widest my-2">
                            QUALITY INSPECTIONS
                        </p>
                    </div>

                    <div>
                        <div className="text-3xl md:text-5xl my-2 md:my-5">🌍</div>
                        <h2 className="text-3xl md:text-4xl font-bold my-5">20+</h2>
                        <p className="text-xl md:text-xl tracking-widest my-2">
                            CITIES COVERED
                        </p>
                    </div>

                    <div>
                        <div className="text-3xl md:text-5xl my-2 md:my-5">👍</div>
                        <h2 className="text-3xl md:text-4xl font-bold my-5">400+</h2>
                        <p className="text-xl md:text-xl tracking-widest my-2">
                            HAPPY CLIENTS
                        </p>
                    </div>

                    <div>
                        <div className="text-3xl md:text-5xl my-2 md:my-5">👥</div>
                        <h2 className="text-3xl md:text-4xl font-bold my-5">12+</h2>
                        <p className="text-xl md:text-xl tracking-widest my-2">
                            INSPECTORS / AUDITORS
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-1 left-0 w-full overflow-hidden leading-none">
                    <svg
                        className="w-full h-20"
                        viewBox="0 0 500 80"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,10 C150,80 350,0 500,40 L500,80 L0,80 Z"
                            className="fill-gray-200"
                        ></path>
                    </svg>
                </div>
            </section>

            <section className="bg-violet-200 rounded-lg py-10 text-center mx-2">
                <h1 className="text-xl md:text-5xl font-bold mb-5 text-center">- OUR SERVICES -</h1>
                <p className="md:font-bold text-lg md:text-2xl text-center">We are committed to delivering exceptional quality and service to our customers.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5 max-w-7xl mx-auto px-4 rounded-lg p-10">

                    <div className="bg-white p-10 rounded-xl hover:shadow-xl shadow-blue-800 hover:-translate-y-5 transition duration-300 py-10">
                        <div className="text-4xl mb-3">⚙️</div>
                        <h2 className="text-2xl font-bold py-5">INSPECTION</h2>
                        <Image src={inspection} alt="inspection" width={80} height={80} className="mx-auto mb-5"></Image>
                        <p className="text-sm py-5 font-semibold">QUALITY INSPECTIONS</p>
                        <p> <strong>PPI</strong> - Pre Production Inspection <br></br>
                            <strong>DPI</strong> - During Production Inspection <br></br>
                            <strong>PSI</strong> - Pre Shipment Inspection <br></br>
                            <strong>CLI</strong> - Container Loading Supervision.</p>
                    </div>
                    <div className="bg-white p-10 rounded-xl hover:shadow-xl shadow-blue-800 hover:-translate-y-5 transition duration-300 py-10">
                        <div className="text-4xl mb-3">🌍</div>
                        <h2 className="text-2xl font-bold py-5">AUDIT</h2>
                        <Image src={audit} alt="audit" width={80} height={80} className="mx-auto mb-5"></Image>
                        <p className="text-sm py-5 font-semibold">AUDITS</p>
                        <p> <strong>PPI</strong> - Pre Production Inspection <br></br>
                            <strong>DPI</strong> - During Production Inspection <br></br>
                            <strong>PSI</strong> - Pre Shipment Inspection <br></br>
                            <strong>CLI</strong> - Container Loading Supervision.</p>
                    </div>
                    <div className="bg-white p-10 rounded-xl hover:shadow-xl shadow-blue-800 hover:-translate-y-5 transition duration-300 py-10">
                        <div className="text-4xl mb-3">👥</div>
                        <h2 className="text-2xl font-bold py-5">LAB TESTS</h2>
                        <Image src={labTest} alt="inspection" width={80} height={80} className="mx-auto mb-5"></Image>
                        <p className="text-sm py-5 font-semibold">Lab Tests</p>
                        <p> <strong>PPI</strong> - Pre Production Inspection <br></br>
                            <strong>DPI</strong> - During Production Inspection <br></br>
                            <strong>PSI</strong> - Pre Shipment Inspection <br></br>
                            <strong>CLI</strong> - Container Loading Supervision.</p>
                    </div>
                    <div className="bg-white p-10 rounded-xl hover:shadow-xl shadow-blue-800 hover:-translate-y-5 transition duration-300 py-10">
                        <div className="text-4xl mb-3">👍</div>
                        <h2 className="text-2xl font-bold py-5">Certification</h2>
                        <Image src={certificate} alt="inspection" width={80} height={80} className="mx-auto mb-5"></Image>
                        <p className="text-sm py-5 font-semibold">CERTIFICATION</p>
                        <p> <strong>PPI</strong> - Pre Production Inspection <br></br>
                            <strong>DPI</strong> - During Production Inspection <br></br>
                            <strong>PSI</strong> - Pre Shipment Inspection <br></br>
                            <strong>CLI</strong> - Container Loading Supervision.</p>
                    </div>
                </div>
                <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                    View All Services
                </button>
            </section>
            <hr className="my-10 border-black max-w-3/4 mx-auto "></hr>

            <FooterComponent />
        </main>
    );
}
