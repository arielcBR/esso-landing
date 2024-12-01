import { AboutUs } from "./components/AboutUs";
import { BusinessAdvantages } from "./components/BusinessAdvantages";
import { Hero } from "./components/Hero";

export function App() {
  return (
    <div className="bg-emerald-900 w-full space-y-4">
      <Hero />
      <AboutUs />
      <BusinessAdvantages />
    </div>
  );
}
