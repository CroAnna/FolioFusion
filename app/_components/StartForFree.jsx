import Image from "next/image";
import startForFree from "@/public/start-for-free.png";
import Link from "next/link";

const StartForFree = ({ additionalStyle = "", small = false }) => {
  return (
    <Link href="/sign-up">
      <Image
        src={startForFree}
        width={small ? 160 : 200}
        alt="startForFree"
        className={`absolute right-0 md:right-40 2xl:right-[-80px] hidden lg:block z-10 rotate-6 hover:scale-110 transition-all hover:rotate-12 ${additionalStyle}`}
      />
    </Link>
  );
};

export default StartForFree;
