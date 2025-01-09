import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row gap-y-4 px-8 lg:px-0 justify-between items-start lg:items-center w-full py-10 max-w-[1080px]">
        <div className="flex flex-col max-w-[400px] gap-y-2">
          <Image
            src={"/Logo.png"}
            alt="nutricare Logo"
            width={120}
            height={100}
          />
          <p>
            NutriCare helps you live healthier with easy access to nutrition
            tips and tools. Whether you&apos;re managing weight, improving your
            diet, or learning about food nutrition, we’ve got you covered.
          </p>
        </div>
        <Accordion type="single" collapsible className="lg:hidden w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              <h4 className="font-semibold text-nc-green text-xl hover:no">
                Quick <span className="text-nc-orange">Links</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <Link href={"#"}>Home</Link>
            </AccordionContent>
            <AccordionContent>
              <Link href={"#"}>Article</Link>
            </AccordionContent>
            <AccordionContent>
              <Link href={"#"}>About Us</Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="lg:hidden w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline">
              <h4 className="font-semibold text-nc-green text-xl hover:no">
                Services
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <Link href={"#"}>BMI Calculate</Link>
            </AccordionContent>
            <AccordionContent>
              <Link href={"#"}>Community</Link>
            </AccordionContent>
            <AccordionContent>
              <Link href={"#"}>Food Nutrient</Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex-col gap-y-2 hidden lg:flex">
          <h4 className="font-semibold text-nc-green text-xl">
            Quick <span className="text-nc-orange">Links</span>
          </h4>
          <Link href={"#"} className="hover:text-nc-green">
            Home
          </Link>
          <Link href={"#"} className="hover:text-nc-green">
            Article
          </Link>
          <Link href={"#"} className="hover:text-nc-green">
            About Us
          </Link>
        </div>
        <div className="hidden lg:flex flex-col gap-y-2">
          <h4 className="font-semibold text-nc-green text-xl">Services</h4>
          <Link href={"#"} className="hover:text-nc-green">
            BMI Calculate
          </Link>
          <Link href={"#"} className="hover:text-nc-green">
            Community
          </Link>
          <Link href={"#"} className="hover:text-nc-green">
            Food Nutrient
          </Link>
        </div>
      </div>
      <div className="flex-col lg:flex-row flex py-6 lg:py-4 justify-center items-center w-full border-t gap-x-1">
        <div className="flex items-center">
          <p className="font-medium me-1">&copy; 2024</p>
          <div className="mt-[-10px]">
            <Image
              src={"/logo-small.png"}
              alt="nutricare Logo"
              width={90}
              height={12}
            />
          </div>
          <p className="font-medium">. All Rights Reserved.</p>
        </div>
        <p className="text-center font-bold">
          <span className="hidden lg:inline"> | </span>Dicoding Capstone Project
          2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
