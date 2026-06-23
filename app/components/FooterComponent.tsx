import { FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export function FooterComponent() {
  
  const message="Hello! I need some help. I want to know more about you."
  const whatsappUrlPK = `https://wa.me/${+923026775888}?text=${encodeURIComponent(message)}`;
  const whatsappUrlUK = `https://wa.me/${+447492282531}?text=${encodeURIComponent(message)}`;
  const whatsappUrlTurkey = `https://wa.me/${+923026775888}?text=${encodeURIComponent(message)}`;


  return (
    <>
      {/* CTA Section */}
      <section className="py-10 bg-blue-600 text-center text-white rounded-2xl mx-3 sm:mx-5 my-6 px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
          Ready to Get Started?
        </h1>

        <p className="text-sm sm:text-lg md:text-xl">
          Contact us today to learn more about our services and how we can help your business.
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="/#"
            className="bg-white text-blue-600 px-6 sm:px-10 py-3 rounded-2xl font-semibold hover:bg-orange-500 hover:text-black transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>


      {/* Footer Main */}

      <section className="bg-gray-900 text-white px-6 sm:px-10 lg:px-20 py-12">


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About */}
          <div className="col-span-1">
            <h2 className="text-yellow-400 text-lg font-semibold mb-3">
              Quality Compliance Solutions
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              A global quality audit support in garments, knits, petroleum
              inspections.
              <br />
              We deliver with precision, speed, and trust.
              <br />
              Our commitment to excellence ensures your products meet the
              highest standards, giving you confidence in every shipment.
            </p>
          </div>

          {/* Contact Offices */}
          <div className="col-span-2">
            <h2 className="text-yellow-400  text-center text-lg font-semibold mb-5">
              Our Offices
            </h2>

            <div className="space-y-8 grid grid-cols-1 md:grid-cols-3">

              {/* Pakistan */}
              <div>
                <h3 className="font-semibold mb-2">Pakistan Office</h3>

                <a
                  href={whatsappUrlPK}
                  target="blank"
                  className="flex items-center gap-2 text-cyan-400 hover:text-blue-400"
                >
                  <FaWhatsapp />
                  +92 302 6775888
                </a>
                <p className="flex gap-2 text-cyan-400 mt-2 text-sm">
                  <FaLocationDot className="mt-1 shrink-0" />
                  Unit No. 824 Nargis Block, Allama Iqbal Town, Lahore, Punjab,
                  Pakistan.
                </p>

                <a
                  href="mailto:qualitycompliancesolution@gmail.com"
                  className="flex items-center gap-2 text-cyan-400 hover:text-blue-400 mt-2"
                >
                  <IoMailOpenOutline />
                  qualitycompliancesolution@gmail.com
                </a>

              </div>

              {/* UK */}
              <div className="pl-15">
                <h3 className="font-semibold mb-2">UK Office</h3>

                <a
                  href={whatsappUrlUK}
                  target="blank"
                  className="flex items-center gap-2 text-cyan-400 hover:text-blue-400"
                >
                  <FaWhatsapp />
                  +44 7492 282531
                </a>
                <p className="flex gap-2 text-cyan-400 mt-2 text-sm">
                  <FaLocationDot className="mt-1 shrink-0" />
                  London, United Kingdom
                </p>

                <a
                  href="mailto:uk@qualitycompliancesolution.com"
                  className="flex items-center gap-2 text-cyan-400 hover:text-blue-400 mt-2"
                >
                  <IoMailOpenOutline />
                  mahin.18@yahoo.com
                </a>

              </div>

              {/* Turkey */}
              <div>
                <h3 className="font-semibold mb-2">Turkey Office</h3>

                <a
                  href={whatsappUrlTurkey}
                  target="blank"
                  className="flex items-center gap-2 text-cyan-400 hover:text-blue-400"
                >
                  <FaWhatsapp />
                  +92 302 677 5888
                </a>
                <p className="flex gap-2 text-cyan-400 mt-2 text-sm">
                  <FaLocationDot className="mt-1 shrink-0" />
                  Izmir, Turkey
                </p>

                {/* <a
                  href="mailto:turkey@qualitycompliancesolution.com"
                  className="flex items-center gap-2 text-cyan-400 hover:text-blue-400 mt-2"
                >
                  <IoMailOpenOutline />
                  turkey@qualitycompliancesolution.com
                </a> */}

              </div>

            </div>
          </div>

          {/* Social */}
          <div className="block md:hidden text-center">
            <h2 className="text-yellow-400 text-lg font-semibold mb-5">
              Follow Us
            </h2>

            <div className="flex flex-col gap-3">
              <a href="#" className="text-cyan-400 hover:text-blue-400">
                Google
              </a>
              <a href="#" className="text-cyan-400 hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="text-cyan-400 hover:text-blue-400">
                LinkedIn
              </a>
              <a href="#" className="text-cyan-400 hover:text-blue-400">
                Twitter
              </a>
              <a href="#" className="text-cyan-400 hover:text-blue-400">
                Instagram
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Bar */}
      <footer className="bg-black text-white text-center py-4 text-sm">
        © 2026 Quality Compliance Solutions. All rights reserved.
      </footer>
    </>
  );
}