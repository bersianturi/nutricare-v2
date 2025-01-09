import BMISection from "./components/bmi";
import HeroSection from "./components/hero";
import ServicesSection from "./components/services";

export default function Root() {
  return (
    <div className="w-full flex flex-col gap-y-4 bg-nc-bg pb-10">
      <HeroSection />
      <BMISection />
      <ServicesSection />
    </div>
  );
}
