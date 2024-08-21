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

const ActivityCard = ({
  palette,
  data,
  activityIndex,
  fontPrimary,
  activitiesDesign,
}) => {
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
      className={`card card-compact glass w-full relative mx-auto ${
        activitiesDesign == "Design 1"
          ? ""
          : activitiesDesign == "Design 2"
          ? ""
          : activitiesDesign == "Design 3"
          ? "lg:flex-row"
          : activitiesDesign == "Design 4" &&
            "lg:flex-row lg:min-h-40 lg:h-48 p-4 "
      }`}
      href={(data.activity_url && data.activity_url) || null}
      target="_blank"
    >
      {data.activity_img && (
        <figure
          className={`relative w-full ${
            activitiesDesign == "Design 1"
              ? "h-48 "
              : activitiesDesign == "Design 2"
              ? "h-56 "
              : activitiesDesign == "Design 3"
              ? "h-48 lg:h-auto lg:min-w-64 lg:w-64 rounded-2xl"
              : activitiesDesign == "Design 4" &&
                "h-48 lg:h-auto lg:min-w-64 lg:w-64 rounded-xl"
          }`}
        >
          <Image
            quality={40}
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
          className={`absolute top-[-36px] lg:top-[-16px] right-[12px] lg:right-[-16px] rounded-full border-4 ${getPrimaryBorderColors(
            palette
          )} p-4  ${getPrimaryBgColors(palette)} ${getSecondaryTextColor(
            palette
          )} `}
        >
          {activityIcons.find((el) => el.value == data.activity_type)?.icon}
        </div>
      ) : null}
      <div className="card-body">
        <h2
          className={`${getSecondaryTextColor(
            palette
          )} card-title font-${fontPrimary}`}
        >
          {data.activity_title}
        </h2>
        <p className={`${getSecondaryTextColor(palette)} font-${fontPrimary}`}>
          {data.activity_description}
        </p>
      </div>
    </a>
  );
};

export default ActivityCard;
