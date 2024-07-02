import { ToiletPaper } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import {
  getHexPrimaryTextColor,
  getHexSecondaryBgColor,
  getHexSecondaryColor,
} from "../_libs/utils";

const TimelineElement = ({ palette }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      date="April 2013"
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
      icon={<ToiletPaper />}
    >
      <h3 className="vertical-timeline-element-title">
        Content Marketing for Web, Mobile and Social Media{" "}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
      <p>Strategy, Social Media</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
