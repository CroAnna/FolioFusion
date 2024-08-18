import dynamic from "next/dynamic";

const DynamicVideo = dynamic(() => import("./Video"), {
  // import the component when it appears the first time
  loading: () => <p>Loading...</p>,
});

const VideoShowcase = () => {
  return (
    <div className="md:w-full max-w-screen-xl mx-4 md:mx-auto py-20 md:py-48 gap-20 md:gap-48 flex flex-col">
      <div className="text-center flex flex-col gap-8 md:gap-4">
        <h3 className="hidden md:block text-xl font-medium text-center w-full">
          No UI design talent, but want to get a job?
        </h3>
        <h2 className="text-2xl md:text-7xl font-bold text-center w-full">
          How FolioFusion works?
        </h2>
        <h3 className="hidden md:block text-xl font-medium text-center w-full">
          Have a problem with bad looking portfolio?
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-5xl text-center md:text-left">
            Create{" "}
            <span className="underline text-emerald-400 font-extrabold text-6xl">
              eye catching
            </span>{" "}
            hero
          </h3>
          <p className="text-xl">
            Choose between{" "}
            <span className="font-bold underline">7 color palettes</span>,{" "}
            <span className="font-bold underline">18 UI element designs</span>,
            image borders, text positioning on different devices. Add your
            social and connect all your platforms in one place.
          </p>
        </div>
        <DynamicVideo
          pathMp4={"/FolioFusion-video-1.mp4"}
          pathOgg={"/FolioFusion-video-1.ogg"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <DynamicVideo
          pathMp4={"/FolioFusion-video-2.mp4"}
          pathOgg={"/FolioFusion-video-2.ogg"}
        />
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-5xl">Highligth your projects ✨</h3>
          <p className="text-xl">
            Showcase your top projects by uploading images, detailing the{" "}
            <span className="font-bold underline">tech stack</span>, and adding{" "}
            <span className="font-bold underline">links</span> to the{" "}
            <span className="font-bold underline">live app</span>,{" "}
            <span className="font-bold underline">code</span> or{" "}
            <span className="font-bold underline">video demos</span>. Highlight
            your work with photos or{" "}
            <span className="font-bold underline">UI designs</span> and share
            what you&apos;ve created.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-5xl">
            Career & education overview 🎓
          </h3>
          <p className="text-xl">
            Present your career history and educational accomplishments with a{" "}
            <span className="font-bold underline">timeline</span> that captures
            your growth and achievements over the years.
          </p>
        </div>
        <DynamicVideo
          pathMp4={"/FolioFusion-video-3.mp4"}
          pathOgg={"/FolioFusion-video-3.ogg"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <DynamicVideo
          pathMp4={"/FolioFusion-video-4.mp4"}
          pathOgg={"/FolioFusion-video-4.ogg"}
        />
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-5xl">Customization 🤩</h3>
          <p className="text-xl">
            Feature your attendance and participation in{" "}
            <span className="font-bold underline">hackathons</span>,{" "}
            <span className="font-bold underline">IT conferences</span>,{" "}
            <span className="font-bold underline">workshops</span> and more to
            show your enthusiasm for the industry.
          </p>
          <p className="text-xl">Customize it how you want!</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-5xl">
            Go <span className="text-cyan-400">live</span> 🚀
          </h3>
          <p className="text-xl">
            Deploy your portfolio on a{" "}
            <span className="underline text-2xl text-emerald-400 font-bold">
              domain of your choice
            </span>{" "}
            to ensure it is live and accessible to everyone, everytime, 24/7.
          </p>
        </div>
        <DynamicVideo
          pathMp4={"/FolioFusion-video-5.mp4"}
          pathOgg={"/FolioFusion-video-5.ogg"}
        />
      </div>
    </div>
  );
};

export default VideoShowcase;
