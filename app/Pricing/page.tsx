import { HeaderComponent } from "@/app/components/HeaderComponent";
import { FooterComponent } from "@/app/components/FooterComponent";


export default function PricingPage() {
  return (
    <main id="pricing"> 
    <HeaderComponent/> 
    <div>
      {/* Hero */}
      <section className="bg-[url('/img/hero_bg.jpg')] bg-cover bg-center text-center py-20 text-white">
        <p className="text-blue-300 font-bold">Pricing</p>
        <h1 className="text-4xl font-bold mt-4">
          Reliance Inspection Services
        </h1>
        <p className="mt-4">
          Cost audit helps in monitoring and controlling raw material costs.
        </p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-10 max-w-6xl mx-auto">
        {[
          ["📝", "600+", "Reports Generated"],
          ["💼", "5+", "Years Experience"],
          ["👍", "98%", "Customer Satisfaction"],
          ["🎧", "24/7", "Support Available"],
        ].map(([icon, num, label]) => (
          <div key={label} className="p-4 border rounded-lg shadow">
            <div className="text-2xl">{icon}</div>
            <h2 className="text-xl font-bold">{num}</h2>
            <p className="text-orange-500 font-semibold">{label}</p>
          </div>
        ))}
      </section>

      {/* Plans */}
      <section className="py-12 flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Basic */}
        <div className="border rounded-xl p-6 shadow w-80">
          <h3 className="text-xl font-bold">Basic Plan</h3>
          <p className="text-2xl font-bold mt-2">$49.99</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>✅ 1 Report</li>
            <li>✅ Vehicle Report</li>
            <li>✅ DMV Title History</li>
            <li>✅ Safety Recall</li>
          </ul>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
            Get Started
          </button>
        </div>

        {/* Premium */}
        <div className="border-2 border-yellow-400 rounded-xl p-6 shadow w-80 bg-yellow-50">
          <h3 className="text-xl font-bold">Premium Plan</h3>
          <p className="text-2xl font-bold mt-2">$79.99</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>✅ Body Frame</li>
            <li>✅ Odometer</li>
            <li>✅ Theft Record</li>
            <li>✅ Market Analysis</li>
          </ul>
          <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold">Why choose our Reports</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
          {[
            ["Comprehensive Data", "Complete vehicle history"],
            ["Fast Delivery", "Delivered in minutes"],
            ["Support", "24/7 expert help"],
          ].map(([title, desc]) => (
            <div key={title} className="p-6 border rounded-lg shadow">
              <strong>{title}</strong>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-400 text-center py-10">
        <h3 className="text-xl font-bold">Ready to Get Started?</h3>
        <p className="mb-4">Contact us today for a quote.</p>
        <button className="bg-blue-900 text-white px-6 py-2 rounded">
          Contact Us
        </button>
      </section>
    </div>
    <FooterComponent/>
    </main>
  );
}