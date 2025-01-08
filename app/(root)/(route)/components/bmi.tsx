import Image from "next/image";

const BMISection = () => {
  return (
    <section id="bmi">
      <div className="flex justify-center items-center lg:py-[50px] py-[25px] px-[25px] lg:px-[150px]">
        <div className="lg:max-w-[1080px] flex flex-col justify-center lg:flex-row items-start lg:items-center gap-x-10">
          <Image
            src="/illustration/bmi.svg"
            alt="bmi"
            width={300}
            height={300}
            className="w-[200px] lg:w-[300px] h-[133px] lg:h-[200px]"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold lg:text-4xl">
              What is <span className="text-nc-green">Body-Mass Index</span>{" "}
              <span className="text-nc-orange">(BMI)</span>?
            </h1>
            <p className="mt-4 font-medium">
              NutriCare helps you live healthier with easy access to nutrition
              tips and tools. Whether you&apos;re managing weight, improving
              your diet, or learning about food nutrition, we’ve got you
              covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMISection;
