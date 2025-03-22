import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import {
  experienceLinkIcons,
  getHexPrimaryTextColor,
  getHexSecondaryBgColor,
  getHexSecondaryColor,
  getIconBgColor,
  getPrimaryBgColors,
  getSecondaryTextColor,
} from "../_libs/utils";
import Image from "next/image";

const TimelineElement = ({ palette, data, fontPrimary }) => {
  const iconBg = getIconBgColor(palette);
  return (
    data && (
      <VerticalTimelineElement
        visible={true}
        date={data.experience_time}
        contentArrowStyle={{
          borderRight: `7px solid ${getHexSecondaryBgColor(palette)}`,
        }}
        contentStyle={{
          background: getHexSecondaryBgColor(palette),
          color: getHexPrimaryTextColor(palette),
        }}
        iconStyle={{
          background: getHexSecondaryBgColor(palette),
          color: getHexPrimaryTextColor(palette),
          border: `3px solid ${getHexSecondaryColor(palette)}`,
          boxShadow: "none",
        }}
        icon={
          data.experience_type
            ? experienceLinkIcons.find((el) => el.value == data.experience_type)
                ?.icon
            : null
        }
      >
        <h3
          className={`vertical-timeline-element-title font-bold text-lg font-${fontPrimary}`}
        >
          {data.experience_title}
        </h3>
        <h4
          className={`vertical-timeline-element-subtitle font-${fontPrimary}`}
        >
          {data.experience_description}
        </h4>
        <div className="vertical-timeline-element-subtitle flex gap-2 pt-3 flex-wrap">
          {data.experience_keywords &&
            data.experience_keywords.split(",").map((el, _index) => (
              <div
                className={`${getPrimaryBgColors(palette)} 
            ${getSecondaryTextColor(palette)} w-fit rounded-md px-2 `}
                key={_index}
              >
                {el}
              </div>
            ))}
        </div>
        <div className="w-full flex flex-wrap">
          {data &&
            data.experience_icons &&
            data.experience_icons.length > 0 && (
              <div className={`flex gap-2 pt-4 w-full flex-wrap`}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((iconIndex) => {
                  const icon = data.experience_icons[iconIndex];
                  if (!icon || icon.name === "-") {
                    return null;
                  }

                  return (
                    <Image
                      key={iconIndex}
                      quality={40}
                      width={24}
                      height={24}
                      src={`https://go-skill-icons.vercel.app/api/icons?i=${icon.name}&theme=${iconBg}`}
                      alt={icon.name || ""}
                      className="h-8 object-cover w-8 md:w-10 md:h-10"
                    />
                  );
                })}
              </div>
            )}
        </div>
      </VerticalTimelineElement>
    )
  );
};

export default TimelineElement;
