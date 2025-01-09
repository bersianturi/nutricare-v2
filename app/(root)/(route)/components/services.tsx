import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CookingPot,
  Grid2x2Check,
  MessagesSquare,
  Newspaper,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "BMI Calculate",
      description:
        "Calculate your Body Mass Index (BMI) effortlessly and receive insights into your weight and overall health status. Take the first step toward a healthier you by knowing your BMI.",
      icon: Grid2x2Check,
    },
    {
      title: "Article",
      description:
        "Our articles cover a wide range of topics to empower you with knowledge and tips for making positive choices in your daily life. Stay informed and inspired on your wellness journey.",
      icon: Newspaper,
    },
    {
      title: "Community",
      description:
        "Discuss your experiences, seek advice, and provide support to others. Together, we create a supportive space for achieving better health.",
      icon: MessagesSquare,
    },
    {
      title: "Food Nutrient",
      description:
        "Discover the nutrient content of various foods to make informed dietary choices. Whether you're tracking calories, macronutrients, or specific vitamins.",
      icon: CookingPot,
    },
  ];

  return (
    <section id="service">
      <div className="flex justify-center items-center lg:py-[50px] py-[25px] px-[25px] lg:px-[150px]">
        <div className="lg:max-w-[1080px] flex flex-col justify-center items-center gap-x-10 gap-y-12">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold lg:text-4xl text-center">
              <span className="text-nc-green">Our</span>{" "}
              <span className="text-nc-orange">Services</span>
            </h1>
            <p className="mt-4 font-medium  text-center">
              NutriCare provides several services. Below is the details.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <CardHeader className="gap-y-1">
                  <div className="flex justify-start items-center">
                    <div className="p-2 bg-nc-orange rounded-md shadow-sm">
                      <service.icon color="white" size={30} />
                    </div>
                  </div>
                  <CardTitle className="text-nc-green text-lg">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
