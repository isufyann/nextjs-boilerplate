import Image from "next/image";
import Levi from "@/public/img/brand_ Levi.png";
import HM from "@/public/img/brand_H&M.png";
import JCPenny from "@/public/img/brand_JCPenney-Logo.png";
import LeeCooper from "@/public/img/brand_Lee-Cooper.png";
import TESCO from "@/public/img/brand_TESCO.png";

export default function InspectionCustomersComponent() {
    return (
        <main>

            {/* Brands */}
            <section className="pb-20 pt-10 text-center bg-blue-900 border-2 rounded-lg mx-2">
                <h2 className="text-2xl md:text-5xl text-white font-bold mb-6">
                    Local Inspection Of Customers
                </h2>
                <div>
                    <p className="text-gray-300 mb-4">
                        We have been providing quality inspection services to various
                        customers across different industries. Here are some of the brands
                        we have worked with
                    </p>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-5 ml-15 mr-15 items-center">
                    <div><Image src={HM} alt="Levi's" className="rounded-xl tranisition-all duration-300 ease-in-out hover:scale-150"></Image></div>
                    <div><Image src={JCPenny} alt="Levi's" className="rounded-xl tranisition-all duration-300 ease-in-out hover:scale-150"></Image></div>
                    <div><Image src={LeeCooper} alt="Levi's" className="rounded-xl tranisition-all duration-300 ease-in-out hover:scale-150"></Image></div>
                    <div><Image src={JCPenny} alt="Levi's" className="rounded-xl tranisition-all duration-300 ease-in-out hover:scale-150"></Image></div>
                    <div><Image src={TESCO} alt="Levi's" className="rounded-xl tranisition-all duration-300 ease-in-out hover:scale-150"></Image></div>
                    <div><Image src={Levi} alt="Levi's" className="rounded-xl tranisition-all duration-300 ease-in-out hover:scale-150"></Image></div>
                    <div><Image src={LeeCooper} alt="Levi's" className="rounded-xl tranisition-all duration-300 ease-in-out hover:scale-150"></Image></div>
                    <div><Image src={JCPenny} alt="Levi's" className="rounded-xl tranisition-all duration-300 ease-in-out hover:scale-150"></Image></div>
                </div>
            </section>
        </main>
    );
}


{/* <div className="flex flex-wrap justify-center gap-6">
          {[
            "brand_ Levi.png",
            "brand_H&M.png",
            "brand_JCPenney-Logo.png",
            "brand_Lee-Cooper.png",
            "brand_TESCO.png",
            "brand_H&M.png",
            "brand_JCPenney-Logo.png",
            "brand_Lee-Cooper.png",
          ].map((src, i) => (
            <Image
              key={i}
              src={`/img/${src}`}
              alt="brand"
              width={120}
              height={60}
            />
          ))}
        </div> */}