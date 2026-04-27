import { FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export function FooterComponent() {
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-900 text-white px-6 sm:px-10 lg:px-20 py-12">

        {/* About */}
        <div>
          <h2 className="text-yellow-400 text-lg font-semibold mb-3">
            Quality Compliance Solutions
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            A global quality audit support in garments, knits, petroleum inspections.
            <br/>We deliver with precision, speed, and trust. 
            <br/>Our commitment to excellence ensures your products meet the highest standards, giving you confidence in every shipment.

          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 font-semibold text-lg">Contact Us</h4>

          <a
            href="tel:+92-302-6775888"
            className="flex items-center gap-2 text-cyan-400 hover:text-blue-400 transition"
          >
            <FaWhatsapp /> +92-302-6775888
          </a>

          <a
            href="mailto:qualitycompliancesolution@gmail.com"
            className="flex items-center gap-2 text-cyan-400 hover:text-blue-400 mt-3 transition"
          >
            <IoMailOpenOutline />
            qualitycompliancesolution@gmail.com
          </a>

          <p className="flex items-start gap-2 text-cyan-400 mt-3 text-sm leading-relaxed">
            <FaLocationDot />
            Unit No. 824 Nargis Block, Allama Iqbal Town,
            Lahore, Punjab, Pakistan.
          </p>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-3 font-semibold text-lg">Follow Us</h4>

          <div className="flex flex-col gap-2">
            <a className="text-cyan-400 hover:text-blue-400 transition" href="#">
              Google
            </a>
            <a className="text-cyan-400 hover:text-blue-400 transition" href="#">
              Facebook
            </a>
            <a className="text-cyan-400 hover:text-blue-400 transition" href="#">
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <footer className="bg-black text-white text-center py-4 text-sm">
        © 2026 Quality Compliance Solutions. All rights reserved.
      </footer>
    </>
  );
}