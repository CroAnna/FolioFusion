import { useContext, useEffect, useState } from "react";
import {
  activityIcons,
  getPrimaryBgColors,
  getPrimaryBorderColors,
  getSecondaryTextColor,
} from "../_libs/utils";
import { PortfolioContext } from "./PortfolioProvider";
import Image from "next/image";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

const ActivityCard = ({ palette, data, activityIndex }) => {
  const { portfolioStackActivityContextData } = useContext(PortfolioContext);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    let url;
    try {
      // TODO provjeri kak ovo dela kad se izbrise neki item
      console.log(
        portfolioStackActivityContextData[activityIndex].activity_img
      );
      if (
        portfolioStackActivityContextData[activityIndex].activity_img instanceof
        File
      ) {
        url = URL.createObjectURL(
          portfolioStackActivityContextData[activityIndex].activity_img
        );
        console.log(url);
      } else {
        console.log(portfolioStackActivityContextData[activityIndex]);
        console.log(
          portfolioStackActivityContextData[activityIndex].activity_img // OVO MORA BIT OBJEKT
        );
        url =
          portfolioStackActivityContextData[activityIndex].activity_img
            .publicUrl;
      }
    } catch (error) {
      console.log(url);

      console.log("No image found or null: ", error);
      url = "";
    }
    console.log("postavljanje image urla " + url);
    setImageUrl(url);
  }, [portfolioStackActivityContextData[activityIndex].activity_img]);

  return (
    <a
      className="card card-compact glass w-72 relative mx-auto"
      href={data.activity_url && data.activity_url}
      target="_blank"
    >
      {data.activity_img && (
        <figure className="h-48 relative w-full ">
          <Image
            layout="fill"
            objectFit="cover"
            src={imageUrl}
            alt="activity"
          />{" "}
          {data.activity_url && (
            <ArrowSquareOut size={32} className="absolute top-2 left-2" />
          )}
        </figure>
      )}
      {data.activity_type ? (
        <div
          className={`absolute top-[-16px] right-[-16px] rounded-full border-4 ${getPrimaryBorderColors(
            palette
          )} p-4  ${getPrimaryBgColors(palette)} ${getSecondaryTextColor(
            palette
          )} `}
        >
          {activityIcons.find((el) => el.value == data.activity_type)?.icon}
        </div>
      ) : null}
      <div className="card-body">
        <h2 className={`${getSecondaryTextColor(palette)} card-title`}>
          {data.activity_title}
        </h2>
        <p className={`${getSecondaryTextColor(palette)}`}>
          {data.activity_description}
        </p>
      </div>
    </a>
  );
};

export default ActivityCard;
