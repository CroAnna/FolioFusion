import Image from "next/image";

const PortfolioHero = ({
  name,
  img,
  description,
  palette,
  image_rounded,
  welcome,
  short,
  image_border,
  border_style,
  extra_elements,
  extra_style_elements,
}) => {
  return (
    <div
      className={`hero min-h-screen w-full relative
        ${palette == "Palette 1" && "bg-zinc-100 text-gray-600"} 
      ${palette == "Palette 4" && "bg-slate-800 text-gray-50"} 
      ${palette == "Palette 3" && "bg-orange-50 text-amber-900"} 
      ${palette == "Palette 2" && "bg-sky-50 text-gray-800"} 
      ${palette == "Palette 5" && "bg-stone-900 text-gray-100"}
       ${palette == "Palette 6" && "bg-neutral-900 text-gray-100"}`}
    >
      {extra_elements && (
        <>
          <Image
            src={
              palette == "Palette 1"
                ? extra_style_elements == "abstract"
                  ? `/detail-1-blue.png`
                  : extra_style_elements == "dots" && `/dots-blue.png`
                : palette == "Palette 2"
                ? extra_style_elements == "abstract"
                  ? `/detail-1-blue.png`
                  : extra_style_elements == "dots" && `/dots-blue.png`
                : palette == "Palette 3"
                ? extra_style_elements == "abstract"
                  ? `/detail-1-green.png`
                  : extra_style_elements == "dots" && `/dots-green.png`
                : palette == "Palette 4"
                ? extra_style_elements == "abstract"
                  ? `/detail-1-yellow.png`
                  : extra_style_elements == "dots" && `/dots-yellow.png`
                : palette == "Palette 5"
                ? extra_style_elements == "abstract"
                  ? `/detail-1-emerald.png`
                  : extra_style_elements == "dots" && `/dots-emerald.png`
                : palette == "Palette 6" && extra_style_elements == "abstract"
                ? `/detail-1-orange.png`
                : extra_style_elements == "dots" && `/dots-yellow.png`
            }
            alt={""}
            width="320"
            height="320"
            className={`absolute left-0 ${
              extra_style_elements == "abstract" ? "bottom-0" : "bottom-8"
            }`}
          />
          <Image
            src={
              palette == "Palette 1"
                ? extra_style_elements == "abstract"
                  ? `/detail-2-orange.png`
                  : extra_style_elements == "dots" && `/dots-long-orange.png`
                : palette == "Palette 2"
                ? extra_style_elements == "abstract"
                  ? `/detail-2-blue.png`
                  : extra_style_elements == "dots" && `/dots-long-blue.png`
                : palette == "Palette 3"
                ? extra_style_elements == "abstract"
                  ? `/detail-2-brown.png`
                  : extra_style_elements == "dots" && `/dots-long-brown.png`
                : palette == "Palette 4"
                ? extra_style_elements == "abstract"
                  ? `/detail-2-yellow.png`
                  : extra_style_elements == "dots" && `/dots-long-yellow.png`
                : palette == "Palette 5"
                ? extra_style_elements == "abstract"
                  ? `/detail-2-lime.png`
                  : extra_style_elements == "dots" && `/dots-long-lime.png`
                : palette == "Palette 6" && extra_style_elements == "abstract"
                ? `/detail-2-yellow.png`
                : extra_style_elements == "dots" && `/dots-long-yellow.png`
            }
            alt={""}
            width="320"
            height="320"
            className="absolute right-0 top-0"
          />
        </>
      )}
      <div className={`hero-content rounded-full`}>
        <div
          className={`max-w-xs inline-block 
            ${image_rounded ? "rounded-full" : "rounded-lg"} 
          ${
            image_border &&
            `border-4 border-${border_style} p-4  
            ${palette == "Palette 1" && "border-cyan-900"} 
                ${palette == "Palette 2" && "border-cyan-900"}
              ${palette == "Palette 3" && "border-lime-800"} 
              ${palette == "Palette 4" && "border-amber-200 "} 
               ${palette == "Palette 5" && "border-emerald-500"}  `
          }
                ${palette == "Palette 6" && "border-orange-500"}`}
        >
          <img
            src={img}
            alt=""
            className={`${
              image_rounded ? "rounded-full" : "rounded-lg"
            } w-full h-full`}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="py-0 text-lg">{welcome}</p>
          <div>
            <h1
              className={`text-8xl font-bold max-w-[640px] 
                ${palette == "Palette 1" && "text-amber-600"} 
              ${palette == "Palette 2" && "text-blue-800"} 
              ${palette == "Palette 3" && "text-orange-800"} 
              ${palette == "Palette 4" && "text-yellow-400"} 
              ${palette == "Palette 5" && "text-lime-500"}
               ${palette == "Palette 6" && "text-yellow-400"}`}
            >
              {name}
            </h1>
            <h2
              className={`text-5xl font-bold 
                ${palette == "Palette 1" && "text-cyan-900"} 
                ${palette == "Palette 2" && "text-cyan-900"}
              ${palette == "Palette 3" && "text-lime-800"} 
              ${palette == "Palette 4" && "text-amber-200 "} 
               ${palette == "Palette 5" && "text-emerald-500"}  
                ${palette == "Palette 6" && "text-orange-500"} `}
            >
              {short}
            </h2>
          </div>
          <p className="py-4 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
