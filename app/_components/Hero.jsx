import { CheckFat, Star } from "@phosphor-icons/react/dist/ssr";
import StartForFree from "./StartForFree";

const { default: Image } = require("next/image");

const Hero = () => {
  return (
    <div className="relative">
      <Image
        width={0}
        height={0}
        style={{ height: "calc(100vh - 64px)" }}
        className={`w-full object-cover`}
        alt="hero-bg"
        src={"/hero-page-bg.svg"}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-xl pb-16 md:pb-0">
        <div className="flex gap-16 items-center flex-col-reverse md:flex-row pb-12">
          <div className="hidden md:flex relative md:w-[640px] md:h-[400px]">
            <Image
              layout="fill"
              alt="hero-illustration"
              src={"/hero-illustration2.svg"}
            />
          </div>
          <div className="flex flex-col gap-8 px-8 md:px-0">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 items-center">
                <div className="flex gap-0.5">
                  <Star size={18} weight="duotone" color="#fbbf24" />
                  <Star size={18} weight="duotone" color="#fbbf24" />
                  <Star size={18} weight="duotone" color="#fbbf24" />
                  <Star size={18} weight="duotone" color="#fbbf24" />
                  <Star size={18} weight="duotone" color="#fbbf24" />
                </div>
                <p className="font-medium text-[12px] md:text-sm">4.9 / 5</p>
              </div>
              <p className="font-semibold text-stone-300 text-sm md:text-base lg:text-lg">
                <span className="text-cyan-500 ">2000+ people</span> created
                their unique portfolios
              </p>
            </div>
            <h1 className="text-6xl lg:text-8xl 2xl:text-9xl font-bold leading-none text-stone-100">
              Create your portfolio{" "}
              <span className="text-secondary">fast.</span>
            </h1>
            <div className="flex flex-col gap-1">
              <h2 className="md:text-xl lg:text-2xl font-medium text-stone-300 flex gap-2 items-center">
                <CheckFat size={20} weight="fill" color="#10b981" /> Can be
                created in less than{" "}
                <span className="font-bold text-cyan-500 underline">
                  5 minutes
                </span>
              </h2>
              <h2 className="md:text-xl lg:text-2xl font-medium text-stone-300 flex gap-2 items-center">
                <CheckFat size={20} weight="fill" color="#10b981" />
                <span className="font-bold text-cyan-500 underline">
                  Endless
                </span>
                customization
              </h2>
              <h2 className="md:text-xl lg:text-2xl font-medium text-stone-300 flex gap-2 items-center">
                <CheckFat size={20} weight="fill" color="#10b981" /> No UI
                design knowledge needed
              </h2>
              <h2 className="md:text-xl lg:text-2xl font-medium text-stone-300 flex gap-2 items-center">
                <CheckFat size={20} weight="fill" color="#10b981" /> Secure and
                safe
              </h2>
            </div>
            <StartForFree
              additionalStyle={"md:bottom-[-180px] lg:bottom-[-80px]"}
              small
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
