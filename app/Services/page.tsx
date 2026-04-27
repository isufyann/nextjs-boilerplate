// "use client";
// import { useState } from "react";

import { HeaderComponent } from "@/app/components/HeaderComponent";
import { FooterComponent } from "@/app/components/FooterComponent";

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
import InspectionCustomersComponent from "../components/InspectionCustComponent";


export default function ServicesComponent() {
    // const [menuOpen, setMenuOpen] = useState(false);

    return (
        <main className="font-sans">
            <HeaderComponent />

            {/* Hero Section */}
            <section className="bg-[url('/img/hero_services.jpg')] h-screen bg-cover bg-center py-5 mt-10 md:mt-20">

                <div className="max-w-4xl mx-auto bg-black/70 rounded-2xl p-6 mt-15 md:mt-30 sm:p-10 shadow-lg items-center text-center">
                    <p className="text-white font-semibold">Services</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
                        Quality Compliance Solutions <br />
                        <span className="text-white text-xl sm:text-2xl">
                            Trusted 3rd Party
                        </span>
                    </h1>
                    <p className="mt-4 text-white text-base sm:text-lg">
                        Ensuring Quality at Every Stage: Manufacturing and Product Inspections.
                    </p>
                </div>
            </section>

            <hr className="my-10 border-black w-3/4 mx-auto" />

            {/* Brands */}
            
            <InspectionCustomersComponent/>

            <hr className="my-10 border-black w-3/4 mx-auto" />

            {/* Mission */}
            <section className="flex flex-col md:flex-row bg-gray-200 py-10 items-center justify-center gap-5 rounded-3xl mx-2">
                <div className="w-3/4 md:w-1/2 md:px-20 justify-center items-center gap-5">
                    <h1 className="text-5xl align-center font-bold items-center align-center justify-center mb-10 text-center">Our Mission</h1>
                    <p>
                        Our mission to provide best quality services and best support to our customer to solve they’re on ground critical quality issues and give accurate results.
                        We are trying to become a best services provider to our valued customer.
                    </p>
                    <div>
                        <h1 className="text-xl font-bold mt-10 mb-3">Extensive Employment</h1>
                        <p className="ml-5 text-gray-800">Each one invests the wealth of his soul as an offense that causes hatred and grief, in the Portetator.</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold mt-5 mb-3">Dedicated Staff</h1>
                        <p className="ml-5 text-gray-800">Each one invests the wealth of his soul as an offense that causes hatred and grief, in the Portetator.</p>
                    </div>
                </div>

                <div className="w-auto md:w-1/2 p-10">
                    <div className="block md:hidden">
                        <Image src="/img/hero_bg.jpg" alt="mission" width={500} height={300} className="rounded-xl transition duration-500 hover:scale-130 hover:-translate-x-20 opacity-100 hover:opacity-0 hover:bg-[url('/img/hero_bg.jpg')]"></Image>
                    </div>

                    <div className="hidden md:block group relative h-100 w-1/2 md:w-auto">
                        <Image src="/img/hero_bg.jpg" alt="primary" width={500} height={300} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-2xl">
                        </Image>
                        <Image src="/img/hero_bg_2.jpg" alt="Hover" width={500} height={300} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl">
                        </Image>
                    </div>
                </div>

            </section>

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
            {/* Stats */}
            {/* <section className="py-10 bg-white text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            ["500+", "QUALITY INSPECTIONS"],
            ["20+", "CITIES COVERED"],
            ["400+", "HAPPY CLIENTS"],
            ["12+", "INSPECTORS"],
          ].map(([num, label]) => (
            <div key={label}>
              <h2 className="text-2xl font-bold">{num}</h2>
              <p className="text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </section> */}

            <hr className="my-10 border-black w-3/4 mx-auto" />

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-200 rounded-lg px-10 py-10 text-center mx-5 md:mx-15">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-black text-center my-5">Manufacturing and Product Inspections</h1>
                    <p className="text-lg text-left my-5 text-gray-800">
                        <span className="font-bold">QCS</span> product and manufacturing inspections help you ensure quality standards throughout your manufacturing process.
                        Leverage our inspections at every stage of your supply chain to protect your business against product recalls,
                        customer complaints, and reputational damage.
                    </p>
                    <p className="text-lg text-left my-5 text-gray-800">
                        Our inspectors verify that your product specifications, including quality, functionality, and
                        performance requirements, are fulfilled. Ultimately, these inspections prevent defective
                        products from reaching the end consumer.</p>
                    <p className="text-lg text-left my-5 text-gray-800">
                        We provide comprehensive inspection services throughout the entire production process, including initial
                        production check, during production checks, container loading check, pre-shipment inspection and
                        production monitoring.</p>
                </div>

                <div className="hidden md:block group relative h-100 w-1/2 md:w-auto">
                    <Image src="/img/hero_bg_2.jpg" alt="primary" width={500} height={300} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-2xl">
                    </Image>
                    <Image src="/img/hero_bg.jpg" alt="Hover" width={500} height={300} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl">
                    </Image>
                </div>
            </section>

            <hr className="my-10 border-black w-3/4 mx-auto"></hr>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-200 rounded-lg px-10 py-10 text-center mx-5 md:mx-15">
                <div className="hidden md:block group relative h-100 w-1/2 md:w-auto">
                    <Image src="/img/hero_bg.jpg" alt="primary" width={500} height={300} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-2xl">
                    </Image>
                    <Image src="/img/hero_bg_2.jpg" alt="Hover" width={500} height={300} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl">
                    </Image>
                </div>

                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-black text-center my-5">Pre-Shipment Inspection (PSI)</h1>
                    <p className="text-lg text-left my-5 text-gray-800">
                        Ensure your products meet your requirements before the production run is finished and your products are packed for shipment.
                        <span className="font-bold">QCS’s</span> pre-shipment inspection is an intensive on-location examination conducted when 80%
                        of your production order is complete. Our service helps you check if your products meet all required specifications,
                        allowing you to take corrective actions before your production order is finalized.</p>
                    <ul>
                        <li className="text-lg text-left my-5 text-gray-800"><strong>Product Quality:</strong> Our inspectors check the quality of your products, including their functionality, performance, and durability. We also verify that your products meet all required safety standards.</li>
                        <li className="text-lg text-left my-5 text-gray-800"><strong>Product Quantity:</strong> We verify that the quantity of your products matches your order specifications.</li>
                        <li className="text-lg text-left my-5 text-gray-800"><strong>Packaging and Labeling:</strong> Our inspectors check that your products are properly packaged and labeled according to your requirements and industry standards.</li>
                    </ul>
                    <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                        What is PSI?
                    </button>
                </div>
            </section>

            {/* Reference Div for PSI Information */}
            {/* <div>
                    <h1>What is a Pre-Shipment Inspection (PSI)?</h1>
                    <p>A pre-shipment inspection ensures your products meet your quality specifications before they are shipped. When at least 80% of your order is complete, an inspector visits the factory and uses industry-standard processes to comprehensively review and test your product. You’re provided with a full report, accessible through our online platform.</p>
                    <ul className="text-lg text-left my-5 text-gray-800 list-disc list-inside">
                            <h1>Learn more about:</h1>
                            <li>What is a Pre-Shipment Inspection (PSI)?</li>
                            <li>Why Do You Need a Pre-Shipment Inspection?</li>
                            <li>What Checks are Carried Out?</li>
                            <li>QCS Pre-Shipment Inspection (PSI)</li>
                            <li>What Happens after a PSI is Completed?</li>
                            <li>QCS Expertise and Experience</li>
                            <li>QCS Benefits</li>
                            <li>Contact QCS for a quote</li>
                    </ul>
                </div> */}



            <hr className="my-10 border-black w-3/4 mx-auto" />

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-200 rounded-lg px-10 py-10 text-center mx-5 md:mx-15">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-black text-center my-5">During Production Check (DUPRO) & Inline Inspection (ILI)</h1>
                    <p className="text-lg text-left my-5 text-gray-800">
                        <span className="font-bold">QCS</span> During Production Check is a comprehensive on-site inspection conducted once 20% of your order has been produced. This service verifies quantities, specifications, and product packaging before the manufacturing process is finalized, helping you prevent delays and resolve ongoing issues.
                        <p>Our Inline Inspection (ILI) is a comprehensive on-site inspection conducted at various stages of the production process. This service verifies quantities, specifications, and product packaging before the manufacturing process is finalized, helping you prevent delays and resolve ongoing issues.</p>
                    </p>
                    <p className="text-lg text-left my-5 text-gray-800">
                        Our inspectors verify that your product specifications, including quality, functionality, and
                        performance requirements, are fulfilled. Ultimately, these inspections prevent defective
                        products from reaching the end consumer.</p>
                    <p className="text-lg text-left my-5 text-gray-800">
                        We provide comprehensive inspection services throughout the entire production process, including initial
                        production check, during production checks, container loading check, pre-shipment inspection and
                        production monitoring.</p>
                </div>

                <div className="hidden md:block group relative h-100 w-1/2 md:w-auto">
                    <Image src="/img/hero_bg_2.jpg" alt="primary" width={500} height={300} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-2xl">
                    </Image>
                    <Image src="/img/hero_bg.jpg" alt="Hover" width={500} height={300} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl">
                    </Image>
                </div>
            </section>
            {/* <div>
            What Is a During Production Inspection - DUPRO?
            A DUPRO inspection ensures that your factory follows quality specifications and completes each stage of production on time. When at least 20% of your order is complete, our inspector visits the factory to thoroughly review and test your product using industry-standard procedures. We can also conduct in-line inspections to identify potential issues early in the production process.
            A full inspection report will be provided on our platform.
            A pre-shipment inspection ensures your products meet your quality specifications before they are shipped. When at least 80% of your order is complete, an inspector visits the factory and uses industry-standard processes to comprehensively review and test your product. You’re provided with a full report, accessible through our online platform.
            </div> */}


            <hr className="my-10 border-black w-3/4 mx-auto"></hr>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-200 rounded-lg px-10 py-10 text-center mx-5 md:mx-15">
                <div className="hidden md:block group relative h-100 w-1/2 md:w-auto">
                    <Image src="/img/hero_bg.jpg" alt="primary" width={500} height={300} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-2xl">
                    </Image>
                    <Image src="/img/hero_bg_2.jpg" alt="Hover" width={500} height={300} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl">
                    </Image>
                </div>

                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-black text-center my-5">Container Loading Check (CLC) for Shipment Quality Control</h1>
                    <p className="text-lg text-left my-5 text-gray-800">
                        Ensure accurate and secure delivery by addressing potential product and shipment issues in advance.
                        <span className="font-bold">QCS’s</span>  container loading check is an exhaustive on-location inspection of product, packaging, and container loading quality. This service helps you prevent damage, ensure compliance with your requirements, and protect against delays, tampering, theft, or unauthorized access during transit.</p>
                    <ul>
                        <li>
                            <strong>Product Quality:</strong> Our inspectors check the quality of your products, including their functionality, performance, and durability. We also verify that your products meet all required safety standards.</li>
                        <li><strong>Product Quantity:</strong> We verify that the quantity of your products matches your order specifications.</li>
                        <li><strong>Packaging and Labeling:</strong> Our inspectors check that your products are properly packaged and labeled according to your requirements and industry standards.</li>
                        <li><strong>Container Loading:</strong> We verify that your products are loaded securely and correctly in the container, following your specifications and industry best practices.</li>
                        <li><strong>Documentation:</strong> Our inspectors check that all necessary documentation, such as packing lists and bills of lading, is accurate and complete.</li>
                        <li><strong>Compliance:</strong> We ensure that your shipment complies with all relevant regulations and standards, including those related to safety, security, and environmental protection.</li>
                        </ul>
                    <button className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                        What is CLI?
                    </button>
                </div>
            </section>
            {/* <div>
                    <h1>What is a Container Loading Check (CLC)?</h1>
                    <p>A container loading check ensures that your products are loaded securely and correctly in the container, following your specifications and industry best practices. Our inspectors verify that your products meet all required quality standards, are properly packaged and labeled, and that all necessary documentation is accurate and complete. This service helps you prevent damage, ensure compliance with your requirements, and protect against delays, tampering, theft, or unauthorized access during transit.</p>
                </div> */}
            <hr className="my-10 border-black max-w-3/4 mx-auto "></hr>
            
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          What Happens in a Product Inspection?
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10 text-sm sm:text-base">
          During an inspection, our RIS inspector evaluates products at specific
          production stages using a tailored checklist based on your requirements.
        </p>

        {/* Inspection Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">Specifications</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">Dimensions</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">Function</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">Appearance</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">Performance</h3>
          </div>

          <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg">Workmanship</h3>
          </div>

        </div>

        {/* Sampling Section */}
        <div className="bg-white rounded-2xl shadow p-6 sm:p-10 mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Sampling Procedures
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We use ANSI / ASQ Z1.4 (ISO 2859-1) statistical sampling to ensure unbiased inspection.
            This helps determine acceptable quality limits (AQL) and ensures fair evaluation of products.
          </p>
        </div>

        {/* Benefits */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Benefits of Product Inspection Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

          <div className="bg-blue-50 p-5 rounded-xl shadow-sm">
            <p>✔ Ensures product quality at every stage</p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl shadow-sm">
            <p>✔ Verifies supplier compliance</p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl shadow-sm">
            <p>✔ Improves production efficiency</p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl shadow-sm">
            <p>✔ Avoids recalls and damage</p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl shadow-sm">
            <p>✔ Prevents shipment delays</p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl shadow-sm">
            <p>✔ Optimizes QC budget</p>
          </div>

        </div>

        {/* Reporting */}
        <div className="bg-white rounded-2xl shadow p-6 sm:p-10 mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Inspection Results
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            You receive a same-day detailed inspection report with images, defect analysis,
            and pass/fail results via your online account dashboard.
          </p>
        </div>

        {/* Online Platform */}
        <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-6 sm:p-10 mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Take Your Quality Management Online
          </h2>

          <p className="text-sm sm:text-base leading-relaxed">
            Book inspections, track reports, manage payments, and analyze quality trends
            using our smart dashboard system.
          </p>
        </div>

        {/* Features */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          RIS Benefits
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-5 rounded-xl shadow">
            ✔ Independent quality control experts
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            ✔ Coverage in 100+ countries
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            ✔ 48-hour inspector availability
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            ✔ Same-day reports
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            ✔ Online booking system
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            ✔ #1 customer satisfaction rating
          </div>

        </div>

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
            
                <hr className="my-10 border-black w-3/4 mx-auto"></hr>



            <FooterComponent />
        </main>
    );
}
