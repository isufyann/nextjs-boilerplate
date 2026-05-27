import Image from "next/image";

import InspectionCustomersComponent from "../components/InspectionCustComponent";
import poor_production from "@/public/img/poor-production.jpg";


export default function ServicesComponent() {

    return (
        <main className="font-sans">

            {/* Hero Section */}
            <section className="bg-[url('/img/hero_services.jpg')] h-screen bg-cover bg-center py-5 mt-10 md:mt-20">

                <div className="max-w-4xl mx-auto bg-black/70 rounded-2xl p-6 mt-15 md:mt-30 sm:p-10 shadow-lg items-center text-center">
                    <p className="text-white font-semibold slide-up">Services</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 slide-up">
                        Quality Compliance Solutions <br />
                        <span className="text-white text-xl sm:text-2xl slide-up">
                            Trusted 3rd Party
                        </span>
                    </h1>
                    <p className="mt-4 text-white text-base sm:text-lg slide-up">
                        Ensuring Quality at Every Stage: Manufacturing and Product Inspections.
                    </p>
                </div>
            </section>

            <hr className="my-10 border-black w-3/4 mx-auto" />

            {/* Brands */}

            <InspectionCustomersComponent />

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
                    <div>
                        <h1 className="text-xl font-bold mt-5 mb-3">Compliance Audits & Inspections Made Easy</h1>
                        <p className="ml-5 text-gray-800">For many organisations, compliance audits & inspections are perceived as a painful and thankless task.</p>
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

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-200 rounded-2xl px-6 md:px-10 lg:px-16 py-10 mx-4 md:mx-10 lg:mx-16 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center lg:text-left mb-6">
                        Manufacturing and Product Inspections
                    </h1>

                    <p className="text-base md:text-lg text-gray-800 mb-5 text-left">
                        <span className="font-bold">QCS</span> product and manufacturing inspections
                        help you ensure quality standards throughout your manufacturing process.
                        Leverage our inspections at every stage of your supply chain to protect
                        your business against product recalls, customer complaints, and
                        reputational damage.
                    </p>

                    <p className="text-base md:text-lg text-gray-800 mb-5 text-left">
                        Our inspectors verify that your product specifications, including
                        quality, functionality, and performance requirements, are fulfilled.
                        Ultimately, these inspections prevent defective products from reaching
                        the end consumer.
                    </p>

                    <p className="text-base md:text-lg text-gray-800 text-left">
                        We provide comprehensive inspection services throughout the entire
                        production process, including initial production check, during production
                        checks, container loading check, pre-shipment inspection and production
                        monitoring.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="group relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full min-h-[350px]">

                    <Image
                        src="/img/hero_bg_2.jpg"
                        alt="Primary"
                        fill
                        className="object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <Image
                        src="/img/hero_bg.jpg"
                        alt="Hover"
                        fill
                        className="object-cover rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>
            </section>

            <hr className="my-10 border-black w-3/4 mx-auto"></hr>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-gray-200 rounded-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 mx-4 sm:mx-8 lg:mx-16 items-center">
                {/* IMAGE */}
                <div className="order-1 lg:order-none">
                    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                        <Image
                            src="/img/hero_bg.jpg"
                            alt="Primary"
                            fill
                            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <Image
                            src="/img/hero_bg_2.jpg"
                            alt="Hover"
                            fill
                            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                    </div>
                </div>

                {/* CONTENT */}
                <div className="order-2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center lg:text-left mb-6">
                        Pre-Shipment Inspection (PSI)
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed text-left mb-6">
                        Ensure your products meet your requirements before the production run
                        is finished and your products are packed for shipment.

                        <span className="font-bold"> QCS’s </span>

                        pre-shipment inspection is an intensive on-location examination
                        conducted when 80% of your production order is complete.
                    </p>
                    <ul className="space-y-5 text-left text-sm sm:text-base lg:text-lg text-gray-800">
                        <li>
                            <strong>Product Quality:</strong> Verify quality,
                            functionality, durability, and safety standards.
                        </li>
                        <li>
                            <strong>Product Quantity:</strong> Confirm quantities match
                            order specifications.
                        </li>
                        <li>
                            <strong>Packaging & Labeling:</strong> Ensure packaging and
                            labeling comply with requirements.
                        </li>
                    </ul>
                    <button className="mt-8 rounded-lg border border-blue-600 bg-blue-600 px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-blue-600">
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

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-gray-200 rounded-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 mx-4 sm:mx-8 lg:mx-16 items-center">
                {/* CONTENT */}
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center lg:text-left mb-6">
                        During Production Check (DUPRO) & Inline Inspection (ILI)
                    </h1>
                    <div className="space-y-5 text-sm sm:text-base lg:text-lg text-gray-800 text-left leading-relaxed">
                        <p>
                            <span className="font-bold">QCS</span> During Production Check
                            is a comprehensive on-site inspection conducted once 20% of
                            your order has been produced. This service verifies quantities,
                            specifications, and product packaging before manufacturing is
                            finalized, helping prevent delays and resolve issues.
                        </p>
                        <p>
                            Our Inline Inspection (ILI) is conducted at different stages of
                            production. This service verifies quantities, specifications,
                            and packaging before production completion.
                        </p>
                        <p>
                            Our inspectors verify product specifications including quality,
                            functionality, and performance requirements, preventing
                            defective products from reaching consumers.
                        </p>
                        <p>
                            We provide inspection services throughout the production
                            process, including initial production checks, during-production
                            checks, container loading checks, pre-shipment inspection, and
                            production monitoring.
                        </p>
                    </div>
                </div>

                {/* IMAGE */}
                <div>
                    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                        <Image
                            src="/img/hero_bg_2.jpg"
                            alt="Primary"
                            fill
                            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <Image
                            src="/img/hero_bg.jpg"
                            alt="Hover"
                            fill
                            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                    </div>
                </div>
            </section>

            <hr className="my-10 border-black w-3/4 mx-auto"></hr>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-gray-200 rounded-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 mx-4 sm:mx-8 lg:mx-16 items-center">

                {/* IMAGE */}
                <div>

                    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl">

                        <Image
                            src="/img/hero_bg.jpg"
                            alt="Primary"
                            fill
                            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />

                        <Image
                            src="/img/hero_bg_2.jpg"
                            alt="Hover"
                            fill
                            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />

                    </div>

                </div>

                {/* CONTENT */}
                <div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center lg:text-left mb-6">
                        Container Loading Check (CLC) for Shipment Quality Control
                    </h1>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-800 text-left leading-relaxed mb-6">

                        Ensure accurate and secure delivery by addressing potential
                        product and shipment issues in advance.

                        <span className="font-bold"> QCS’s </span>

                        container loading check is an exhaustive on-location inspection
                        of product, packaging, and loading quality. This service helps
                        prevent damage, ensure compliance, and protect against delays,
                        tampering, theft, or unauthorized access during transit.

                    </p>

                    <ul className="space-y-4 text-left text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed">

                        <li>
                            <strong>Product Quality:</strong> Inspect functionality,
                            performance, durability, and safety compliance.
                        </li>

                        <li>
                            <strong>Product Quantity:</strong> Verify product quantities
                            against order specifications.
                        </li>

                        <li>
                            <strong>Packaging & Labeling:</strong> Confirm packaging and
                            labeling meet requirements and standards.
                        </li>

                        <li>
                            <strong>Container Loading:</strong> Ensure products are
                            loaded securely following best practices.
                        </li>

                        <li>
                            <strong>Documentation:</strong> Validate packing lists,
                            bills of lading, and required shipment documents.
                        </li>

                        <li>
                            <strong>Compliance:</strong> Confirm shipment compliance with
                            safety, security, and environmental regulations.
                        </li>
                    </ul>
                    <button className="mt-8 rounded-lg border border-blue-600 bg-blue-600 px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-blue-600">
                        What is CLI?
                    </button>
                </div>
            </section>

            {/* <div>
                    <h1>What is a Container Loading Check (CLC)?</h1>
                    <p>A container loading check ensures that your products are loaded securely and correctly in the container, following your specifications and industry best practices. Our inspectors verify that your products meet all required quality standards, are properly packaged and labeled, and that all necessary documentation is accurate and complete. This service helps you prevent damage, ensure compliance with your requirements, and protect against delays, tampering, theft, or unauthorized access during transit.</p>
                </div> */}

            <hr className="my-10 border-black max-w-3/4 mx-auto "></hr>

            <section className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-12">

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

                    <hr className="my-10 border-black w-3/4 mx-auto"></hr>

                    {/* Benefits */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
                        Benefits of Product Inspection Services
                    </h1>

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

                    <hr className="my-10 border-black w-3/4 mx-auto"></hr>


                    {/* Features */}
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6">
                        RIS Benefits
                    </h1>

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

            <hr className="my-10 border-gray-200 w-3/4 mx-auto"></hr>

                <ServicesComponent/>

            <hr className="my-10 border-gray-200 w-3/4 mx-auto"></hr>


            <section className="bg-[#1d1d1f] min-h-screen px-8 py-16">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* LEFT SIDE */}
                    <div>

                        {/* Heading */}
                        <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight">
                            Why You Can’t Skip
                            <br />
                            Quality Control –{" "}
                            <span className="text-[#f55a43]">
                                The Cost of a Bad Production
                            </span>
                        </h1>

                        {/* List Items */}
                        <div className="mt-16 space-y-10">

                            {[
                                {
                                    title: "Defective products",
                                    desc: "Angry customers & negative reviews",
                                    icon: "📦",
                                },
                                {
                                    title: "Shipping faulty goods",
                                    desc: "Expensive recalls & legal issues",
                                    icon: "🚚",
                                },
                                {
                                    title: "Factories cutting corners",
                                    desc: "Loss of product integrity",
                                    icon: "⚙️",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-6">

                                    {/* Icon Circle */}
                                    <div className="w-10 md:w-20 h-10 md:h-20 rounded-full bg-[#f55a43] flex items-center justify-center text-xl md:text-4xl shrink-0">
                                        {item.icon}
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h3 className="text-white text-lg md:text-2xl font-medium">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-300 text-sm md:text-lg mt-2">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <button className="mt-10 bg-pink-600 hover:bg-pink-700 transition-all duration-300 text-white text-md md:text-xl px-10 py-5 rounded-md">
                            Get a Quality Inspection Quote
                        </button>

                    </div>

                    {/* RIGHT SIDE */}
                    <div>

                        {/* Image */}

                        <div className="slide-right">
                            <Image src={poor_production} alt="poor production" width={500} height={300} className="rounded-[30px] w-full h-full object-cover"></Image>
                        </div>

                        {/* Quote */}
                        <p className="text-white italic text-lg md:text-4xl leading-relaxed mt-16">
                            “Over 5,000 products sourced – We’ve seen it all.
                            Let’s make sure your production is perfect.”
                        </p>
                    </div>
                </div>
            </section>


        </main>
    );
}