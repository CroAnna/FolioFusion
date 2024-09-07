import Image from "next/image";
import examples from "@/public/examples.jpg";
import example2 from "@/public/ui-one-page.jpg";
import example3 from "@/public/ui-example.jpg";

const Examples = () => {
  return (
    <div className="w-full relative pb-12 lg:pb-56" id="examples">
      <Image
        quality={100}
        src={examples}
        objectFit="cover"
        className="hidden md:block"
        alt="portfolio-examples"
      />
      <Image
        quality={100}
        src={example2}
        className="md:hidden"
        objectFit="cover"
        alt="portfolio-examples"
      />
      <Image
        quality={100}
        src={example3}
        className="md:hidden"
        objectFit="cover"
        alt="portfolio-examples"
      />
    </div>
  );
};

export default Examples;
