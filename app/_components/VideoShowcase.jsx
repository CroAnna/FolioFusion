const VideoShowcase = () => {
  return (
    <div className="md:w-full max-w-screen-xl mx-4 md:mx-auto py-20 md:py-48 gap-20 md:gap-48 flex flex-col">
      <div className="text-center flex flex-col gap-8 md:gap-4">
        <h3 className="text-xl font-medium text-center w-full">
          No UI design talent, but want to get a job?
        </h3>
        <h2 className="text-5xl md:text-7xl font-bold text-center w-full">
          How StackShow works?
        </h2>
        <h3 className="text-xl font-medium text-center w-full">
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
            hero{" "}
          </h3>
          <p className="text-xl">
            Choose between{" "}
            <span className="font-bold underline">7 color palettes</span>,{" "}
            <span className="font-bold underline">18 UI element designs</span>,
            image borders, text positioning on different devices. Add your
            social and connect all your platforms in one place.
          </p>
        </div>
        <video
          controls
          preload="none"
          className="aspect-video border-4 rounded-3xl border-neutral-600 shadow-2xl"
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src="/stackshow-video-1.mp4" type="video/mp4" />
          <source src="/stackshow-video-1.ogg" type="video/ogg" />
          {/* ogg because mp4 doesn't work on firefox */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <video
          controls
          preload="none"
          className="aspect-video border-4 rounded-3xl border-neutral-600 shadow-2xl"
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src="/stackshow-video-2.mp4" type="video/mp4" />
          <source src="/stackshow-video-2.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>{" "}
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-5xl">Highligth your projects</h3>
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
      </div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-5xl">
            Career & education overview 🎓
          </h3>
          <p className="text-xl">
            Present your career history and educational accomplishments with a
            <span className="font-bold underline">timeline</span> that captures
            your growth and achievements over the years.
          </p>
        </div>
        <video
          controls
          preload="none"
          className="aspect-video border-4 rounded-3xl border-neutral-600 shadow-2xl"
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src="/stackshow-video-3.mp4" type="video/mp4" />
          <source src="/stackshow-video-3.ogg" type="video/ogg" />
          {/* ogg because mp4 doesn't work on firefox */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <video
          controls
          preload="none"
          className="aspect-video border-4 rounded-3xl border-neutral-600 shadow-2xl"
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src="/stackshow-video-4.mp4" type="video/mp4" />
          <source src="/stackshow-video-4.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>{" "}
        <div className="flex flex-col gap-8">
          <h3 className="font-semibold text-5xl">Prove you&apos;re active</h3>
          <p className="text-xl">
            Feature your attendance and participation in{" "}
            <span className="font-bold underline">hackathons</span>,{" "}
            <span className="font-bold underline">IT conferences</span>,{" "}
            <span className="font-bold underline">workshops</span> and more to
            show your enthusiasm for the industry.
          </p>
        </div>
      </div>{" "}
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
        <video
          controls
          preload="none"
          className="aspect-video border-4 rounded-3xl border-neutral-600 shadow-2xl"
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src="/stackshow-video-5.mp4" type="video/mp4" />
          <source src="/stackshow-video-5.ogg" type="video/ogg" />
          {/* ogg because mp4 doesn't work on firefox */}
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoShowcase;
