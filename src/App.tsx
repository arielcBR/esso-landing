import { AboutUs } from "./components/AboutUs";
import { BusinessAdvantages } from "./components/BusinessAdvantages";
import { Hero } from "./components/Hero";
import { OurDifferentials } from "./components/OurDifferentials";
import { OurPartners } from "./components/OurPartners";
import { OurWork } from "./components/OurWork";

export function App() {
  return (
    <div className="bg-emerald-900 w-full space-y-4">
      <Hero />
      <AboutUs />
      <BusinessAdvantages />
      <OurDifferentials />
      <OurWork />
      <OurPartners />
    </div>
  );
}
