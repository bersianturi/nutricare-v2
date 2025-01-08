import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-full py-10 max-w-[1080px]">
        <div className="flex flex-col max-w-[400px]">
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
        <div className="flex flex-col gap-y-2">
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
        <div className="flex flex-col gap-y-2">
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
      <div className="flex py-4 justify-center items-center w-full border-t gap-1">
        <p className="font-medium">&copy; 2024</p>
        <div className="flex items-center">
          <div className="mt-[-10px]">
            <Image
              src={"/logo-small.png"}
              alt="nutricare Logo"
              width={90}
              height={12}
            />
          </div>
          <p className="font-medium">.</p>
        </div>
        <p>
          All Rights Reserverd. |{" "}
          <span className="font-bold">Dicoding Capstone Project 2023</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
