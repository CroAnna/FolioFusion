import SatisfiedClientCard from "../_components/SatisfiedClientCard";
import {
  satisfiedClients1,
  satisfiedClients2,
  satisfiedClients3,
} from "../_libs/utils";

const SatisfiedClients = () => {
  return (
    <div className="overflow-x-scroll flex flex-col gap-4 py-4 my-12">
      <div className="flex flex-row flex-nowrap w-full gap-4 ml-[16px]">
        {satisfiedClients1.map((el, index) => (
          <SatisfiedClientCard
            key={index}
            name={el.name}
            text={el.text}
            imgUrl={el.img_url}
            domain={el.domain}
          />
        ))}
      </div>
      <div className="flex flex-row flex-nowrap w-full gap-4 ml-[-200px]">
        {satisfiedClients2.map((el, index) => (
          <SatisfiedClientCard
            key={index}
            name={el.name}
            text={el.text}
            imgUrl={el.img_url}
            domain={el.domain}
          />
        ))}
      </div>
      <div className="flex flex-row flex-nowrap w-full gap-4 ml-[-80px]">
        {satisfiedClients3.map((el, index) => (
          <SatisfiedClientCard
            key={index}
            name={el.name}
            text={el.text}
            imgUrl={el.img_url}
            domain={el.domain}
          />
        ))}
      </div>
    </div>
  );
};

export default SatisfiedClients;
