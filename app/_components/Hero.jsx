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
        <div className="flex gap-16 items-center flex-col-reverse md:flex-row">
          <div className="hidden md:flex relative md:w-[640px] md:h-[400px]">
            <Image
              layout="fill"
              objectFit="cover"
              alt="hero-illustration"
              src={"/hero-illustration.svg"}
            />
          </div>
          <div className="flex flex-col gap-8 px-8 md:px-0">
            <h1 className="text-7xl md:text-8xl font-bold leading-none text-stone-100">
              Create your portfolio{" "}
              <span className="text-secondary">fast.</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-stone-400">
              Endless customization.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
