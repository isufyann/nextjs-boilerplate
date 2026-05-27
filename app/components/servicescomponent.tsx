import Image from "next/image";

import inspection from "@/public/img/icon_card_inspection.png";
import audit from "@/public/img/icon_card_audit.png";
import labTest from "@/public/img/icon_card_lab-technician.png";
import certificate from "@/public/img/icon_card_certificate.png";

export default function ServicesComponent() {
    return (


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
    );
}