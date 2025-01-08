import Image from "next/image";

const ServicesSection = () => {
  return (
    <section id="service">
      <div className="flex justify-center items-center lg:py-[50px] py-[25px] px-[25px] lg:px-[150px]">
        <div className="lg:max-w-[1080px] flex flex-col justify-center items-center gap-x-10">
          <div className="flex flex-col mb-8">
            <h1 className="text-3xl font-bold lg:text-4xl text-center">
              <span className="text-nc-green">Our</span>{" "}
              <span className="text-nc-orange">Services</span>
            </h1>
            <p className="mt-4 font-medium  text-center">
              NutriCare provides several services. Below is the details.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-24">
            <div className="flex flex-col gap-y-2">
              <Image
                src="/icon/calculator.svg"
                alt="service"
                width={30}
                height={30}
              />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold text-nc-green">
                  BMI Calculate
                </h4>
                <p className="font-medium">
                  Calculate your Body Mass Index (BMI) effortlessly and receive
                  insights into your weight and overall health status. Take the
                  first step toward a healthier you by knowing your BMI.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Image
                src="/icon/article.svg"
                alt="service"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold text-nc-green">Article</h4>
                <p className="font-medium">
                  Calculate your Body Mass Index (BMI) effortlessly and receive
                  insights into your weight and overall health status. Take the
                  first step toward a healthier you by knowing your BMI.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Image
                src="/icon/community.svg"
                alt="service"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold text-nc-green">
                  Community
                </h4>
                <p className="font-medium">
                  Calculate your Body Mass Index (BMI) effortlessly and receive
                  insights into your weight and overall health status. Take the
                  first step toward a healthier you by knowing your BMI.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Image
                src="/icon/food.svg"
                alt="service"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold text-nc-green">
                  Food Nutrient
                </h4>
                <p className="font-medium">
                  Calculate your Body Mass Index (BMI) effortlessly and receive
                  insights into your weight and overall health status. Take the
                  first step toward a healthier you by knowing your BMI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
