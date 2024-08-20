import Image from "next/image";
import errorImage from "@/public/404-error.png";
import Link from "next/link";

const ErrorPage = ({errorData}) => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-full">
      <Image src={errorImage} alt="404-not-found" width={256} height={256} />
      <p className=" text-3xl px-4 text-center">{errorData.message}</p>
      <Link href="/" className="underline">
        Back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
