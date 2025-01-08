import BMISection from "./components/bmi";
import HeroSection from "./components/hero";
import ServicesSection from "./components/services";

export default function Root() {
  return (
    <div className="w-full flex flex-col gap-x-4 bg-nc-bg">
      <HeroSection />
      <BMISection />
      <ServicesSection />
    </div>
  );
}
