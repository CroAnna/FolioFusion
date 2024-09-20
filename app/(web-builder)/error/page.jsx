import Image from "next/image";
import Link from "next/link";
import errorImage from "@/public/error.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-full mt-12">
      <Image src={errorImage} alt="error icon" width={256} height={256} />
      <p className="text-xl"> Sorry, something went wrong. Please try again.</p>
      <p>
        If it still doesn&apos;t work, please{" "}
        <Link href={"/send-feedback"} className="underline">
          contact us
        </Link>
        .
      </p>
    </div>
  );
};

export default ErrorPage;
