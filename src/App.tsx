import { AboutUs } from "./components/AboutUs";
import { BusinessAdvantages } from "./components/BusinessAdvantages";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { OurDifferentials } from "./components/OurDifferentials";
import { OurPartners } from "./components/OurPartners";
import { OurWork } from "./components/OurWork";
import { useMenu } from "./hooks/MenuContext";
import { MenuMobile } from "./components/MenuMobile";

export function App() {
  const { menuVisible } = useMenu();

  return (
    <div className="bg-emerald-900 w-full min-h-screen">
      {menuVisible && <MenuMobile />}
      {!menuVisible && (
        <div className="w-full space-y-4">
          <Hero />
          <AboutUs />
          <BusinessAdvantages />
          <OurDifferentials />
          <OurWork />
          <OurPartners />
          <Footer />
        </div>
      )}
    </div>
  );
}
