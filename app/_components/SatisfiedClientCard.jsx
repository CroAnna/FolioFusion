import Image from "next/image";
import Link from "next/link";

const SatisfiedClientCard = ({ name, text, imgUrl, domain }) => {
  return (
    <Link
      href={`/${domain}`}
      target="_blank"
      className="card bg-neutral-900 text-primary-content min-w-[420px] w-[420px] hover:underline group "
    >
      <div className="card-body flex-row gap-4 items-center ">
        <div className="avatar">
          <div className="w-14 rounded-full  transition-all group-hover:rotate-6">
            <Image src={imgUrl} alt={`${name} image`} />
          </div>
        </div>
        <div className="flex-col flex gap-2">
          <div className="flex items-center justify-between gap-2">
            <h2 className="card-title text-base lg:text-xl text-white">
              {name}
            </h2>
            <div className="badge badge-primary text-[12px] h-fit">
              /{domain}
            </div>
          </div>
          <p className="italic text-sm lg:text-base text-white">
            &quot;{text}&quot;
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SatisfiedClientCard;
