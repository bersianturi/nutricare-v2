import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="flex flex-col justify-center items-center lg:py-[150px] py-[150px] px-[25px] lg:px-[150px] bg-hero bg-no-repeat bg-cover bg-center rounded-lg m-2 lg:m-4 gap-y-4 lg:shadow-sm">
        <div className="lg:max-w-[800px]">
          <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl text-center">
            Empowering your <span className="text-nc-green">healthy</span>{" "}
            through <span className="text-nc-orange">nutrition</span>
          </h1>
          <p className="mt-4 text-sm text-center font-medium">
            NutriCare helps you live healthier with easy access to nutrition
            tips and tools. Whether you&apos;re managing weight, improving your
            diet, or learning about food nutrition, we’ve got you covered.
          </p>
        </div>
        <Link href={"#bmi"}>
          <Button variant={"green"} className="mt-4 rounded-full">
            Get started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
