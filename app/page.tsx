import Image from "next/image";
import { HeaderComponent } from "@/app/components/HeaderComponent";
import { FooterComponent } from "@/app/components/FooterComponent";
import HomePage from "./HomePage/page";

// import PricingPage from "./components/pricingComponent";
// import AQLComponent from "./components/AQLComponent";
// import ServicesComponent from "./components/servicesComponent";
// import AboutComponent from "./components/AboutComponent";
// import ContactUsComponent from "./components/ContactUsComponent";


export default function Home() {
  return (
    <>
    <HomePage/>
    </>
  );
}
