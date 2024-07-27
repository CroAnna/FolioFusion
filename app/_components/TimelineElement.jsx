import { Briefcase, ToiletPaper } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import {
  experienceLinkIcons,
  getHexPrimaryTextColor,
  getHexSecondaryBgColor,
  getHexSecondaryColor,
  getPrimaryBgColors,
  getSecondaryTextColor,
} from "../_libs/utils";

const TimelineElement = ({ palette, data }) => {
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
        <h3 className="vertical-timeline-element-title font-bold text-lg">
          {data.experience_title}
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
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
      </VerticalTimelineElement>
    )
  );
};

export default TimelineElement;
