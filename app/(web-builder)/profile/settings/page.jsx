import Link from "next/link";

const Settings = () => {
  return (
    <div className="md:w-full flex flex-col gap-6 max-w-screen-xl mx-4 md:mx-auto md:p-10 xl:px-0 md:pt-20">
      <h2 className="text-2xl font-bold">Settings</h2>
      <Link
        href={"/privacy-policy"}
        className="bg-neutral-700 hover:bg-neutral-600 w-full rounded-xl h-8 md:h-16 flex items-center justify-center"
      >
        Privacy policy
      </Link>
      <Link
        href={"/send-feedback"}
        className="bg-neutral-700 hover:bg-neutral-600 w-full rounded-xl h-8 md:h-16 flex items-center justify-center"
      >
        Send feedback
      </Link>
      <Link
        href={"/profile/data"}
        className="bg-neutral-700 hover:bg-neutral-600 w-full rounded-xl h-8 md:h-16 flex items-center justify-center"
      >
        Delete account
      </Link>
    </div>
  );
};

export default Settings;
