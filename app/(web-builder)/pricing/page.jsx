import Pricing from "@/app/_components/Pricing";

const PricingPage = () => {
  return (
    <div className="md:w-full flex flex-col gap-6 max-w-screen-xl mx-4 md:mx-auto md:p-10 xl:px-0 md:pt-20">
      <h2 className="text-2xl items-center flex md:text-4xl font-bold justify-center">
        Select a plan
      </h2>
      <h3 className="text-xl items-center flex md:text-2xl font-semibold justify-center">
        And make you portfolio available to everyone
      </h3>
      <Pricing />
    </div>
  );
};

export default PricingPage;
