
import Link from "next/link";

export function HeaderComponent() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="flex justify-between items-center px-7 py-2 md:p-5 max-w-9xl mx-auto">
          <h1 className="text-xl font-bold hover:shadow-[0_0_20px_white] hover:text-white px-5 py-3 rounded-2xl duration-500 transition-all hover:scale-125 hover:translate-x-10">Quality Compliance Solutions</h1>
          <nav>
            <ul className="hidden md:flex gap-2">
              <Link href="/" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:text-white hover:shadow-[0_0_20px_white] hover:scale-80">
                Home
              </Link>
              {/* <Link href="/Pricing" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:text-white hover:shadow-[0_0_20px_white] hover:scale-80">
                Pricing
              </Link> */}
              <Link href="/sourcing" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:text-white hover:shadow-[0_0_20px_white] hover:scale-80">
                Sourcing
              </Link>
              <Link href="/Services" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:text-white hover:shadow-[0_0_20px_white] hover:scale-80">
                Services
              </Link>
              <Link href="/aqlLevel" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:text-white hover:shadow-[0_0_20px_white] hover:scale-80">
                AQL Level
              </Link>
              <Link href="/AboutUs" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:text-white hover:shadow-[0_0_20px_white] hover:scale-80">
                About Us
              </Link>
              <Link href="/ContactUs" className="text-white text-xl px-5 py-3 rounded-lg transition-all duration-300 hover:text-white hover:shadow-[0_0_20px_white] hover:scale-80">
                Contact Us
              </Link>
              <Link href="/#" className="bg-white text-black text-xl ml-10 px-5 py-3 rounded-lg transition-all duration-300 hover:text-blue-600 hover:shadow-[0_0_20px_white] hover:scale-110">
                Get in Touch
              </Link>
            </ul>
          </nav>

        </div>
      </header>
    </main>
  );
}

{/* <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav
            className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-7 absolute md:static bg-[#0b1320] w-fit md:w-fit left-10 top-20 p-4 md:p-0 rounded-lg md:rounded-none`}
          >
            {[
              "Home",
              // "Pricing",
              "AQL Sample Size",
              "Services",
              "About Us",
              "Contact Us",
            ].map((item) => (
              <a key={item} href="#" className="hover:text-yellow-400 rounded-md transition-colors duration-300">
                {item}
              </a>
            ))}
          </nav> */}
