import Image from "next/image";
import InspectionCustomersComponent from "../components/InspectionCustComponent";
import ServicesComponent from "../Services/page";
import YourBusiness from "../components/yourBusiness";
import WhyWorkWithUs from "../components/whyWorkWithUs";



export default function HomeComponent() {

  return (
    <main className="font-sans">

      {/* Hero Section */}
      <section className="bg-[url('/img/hero_bg.jpg')] h-screen bg-cover bg-center py-5 mt-10 md:mt-20">

        <div className="max-w-4xl mx-auto bg-white/70 rounded-2xl p-6 mt-15 md:mt-30 sm:p-10 shadow-lg items-center text-center">
          <p className="text-blue-700 font-semibold slide-up">Q C S</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mt-3 slide-up">
            Quality Compliance Solutions <br />
            <span className="text-black text-xl sm:text-2xl slide-up">
              Trusted 3rd Party
            </span>
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg slide-up">
            Our mission is to provide best quality services and best support to our customer to solve they’re on ground critical
            quality issues and give accurate results. We are trying to become a best services provider to our valued customer.
          </p>
        </div>
      </section>
      <hr className="my-10 border-black w-3/4 mx-auto" />
      <InspectionCustomersComponent />
      <hr className="my-10 border-black w-3/4 mx-auto" />

      {/* Mission */}
      <section className="flex flex-col md:flex-row bg-gray-200 py-10 items-center justify-center gap-5 rounded-3xl mx-2">
        <div className="slide-right w-3/4 md:w-1/2 md:px-20 justify-center items-center gap-5">
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

        <div className="slide-left w-auto md:w-1/2 p-10">
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
        <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto px-2 gap-1 md:gap-5 text-center">

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



      {/* Services */}
      <section className="py-12 text-center">
        <h1 className="text-2xl md:text-5xl font-bold mb-2">We Offer</h1>
        <p className="text-sm md:text-2xl">We offer top-notch inspection and audit services to strengthen your operations.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-8 max-w-7xl mx-2 md:mx-auto rounded-lg p-5">
          <div className="border-2 rounded-2xl border-blue-500 md:border-orange-200 py-5 duration-300 ease-in-out hover:-translate-y-5 hover:shadow-lg hover:border-blue-500">
            <h2 className="text-2xl font-bold">Final Inspection</h2>
            <p>At Inspection, we are offering Fabric Inspection services through our third-party inspection solutions.</p>
          </div>
          <div className="border-2 rounded-2xl border-blue-500 md:border-orange-200 py-5 duration-300 ease-in-out hover:-translate-y-5 hover:shadow-lg hover:border-blue-500">
            <h2 className="text-2xl font-bold">Quality Compliance</h2>
            <p>Ensure your products meet all safety standards.</p>
          </div>
          <div className="border-2 rounded-2xl border-blue-500 md:border-orange-200 py-5 duration-300 ease-in-out hover:-translate-y-5 hover:shadow-lg hover:border-blue-500">
            <h2 className="text-2xl font-bold">Digital Records</h2>
            <p>All inspection data stored securely and accessible online.</p>
          </div>
          <div className="border-2 rounded-2xl border-blue-500 md:border-orange-200 py-5 duration-300 ease-in-out hover:-translate-y-5 hover:shadow-lg hover:border-blue-500">
            <h2 className="text-2xl font-bold">Inspection Reports</h2>
            <p>Comprehensive vessel condition reporting services.</p>
          </div>
          <div className="border-2 rounded-2xl border-blue-500 md:border-orange-200 py-5 duration-300 ease-in-out hover:-translate-y-5 hover:shadow-lg hover:border-blue-500">
            <h2 className="text-2xl font-bold">Consumer Products</h2>
            <p>Get your product safely, efficiently and effectively to market.</p>
          </div>
          <div className="border-2 rounded-2xl border-blue-500 md:border-orange-200 py-5 duration-300 ease-in-out hover:-translate-y-5 hover:shadow-lg hover:border-blue-500">
            <h2 className="text-2xl font-bold px-5">Government Certification</h2>
            <p>Quality services according to international regulations and standards.</p>
          </div>
        </div>
        <hr className="my-10 border-black w-3/4 mx-auto" />
      </section>

      <ServicesComponent/>

      <hr className="my-10 border-black max-w-3/4 mx-auto "></hr>
      <YourBusiness />
      <WhyWorkWithUs/>
    </main>
  );
}
