"use client";
import React, { useContext, useEffect } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { PortfolioContext } from "./PortfolioProvider";
import Select from "./Select";
import { experienceLinkIcons } from "../_libs/utils";
import { Trash } from "@phosphor-icons/react/dist/ssr";

const ExperienceInputCard = ({ index, experienceKey }) => {
  const {
    portfolioStackTimelineContextData,
    setPortfolioStackTimelineContextData,
  } = useContext(PortfolioContext);

  const handleUpdateNested = (field, value) => {
    setPortfolioStackTimelineContextData((prevData) =>
      prevData.map((el) =>
        el.timeline_id === index + 1 ? { ...el, [field]: value } : el
      )
    );
  };

  const handleDelete = () => {
    setPortfolioStackTimelineContextData((prevData) =>
      prevData.filter((el) => el.timeline_id !== experienceKey)
    );
  };

  return (
    portfolioStackTimelineContextData[index] && (
      <div className="bg-blue-50 border-stone-300 border shadow-sm p-4 rounded-lg flex flex-col gap-2">
        <div className="flex gap-4">
          <Input
            label={"Title:"}
            name={`timeline_title`}
            value={portfolioStackTimelineContextData[index].timeline_title}
            onChange={(e) => {
              handleUpdateNested(`timeline_title`, e.target.value);
            }}
            placeholder={"Recommended 1 or 2 words"}
          />
          <div
            onClick={handleDelete}
            className="bg-red-100 cursor-pointer flex items-center rounded-lg px-2"
          >
            <Trash size={32} color="#b91c1c" weight="duotone" />
          </div>
        </div>
        <Textarea
          label={"Description:"}
          name={"timeline_description"}
          value={portfolioStackTimelineContextData[index].timeline_description}
          onChange={(e) => {
            handleUpdateNested("timeline_description", e.target.value);
          }}
          placeholder={"Describe your position"}
        />
        <Input
          label={"Period of time:"}
          name={`timeline_time`}
          value={portfolioStackTimelineContextData[index].timeline_time}
          onChange={(e) => {
            handleUpdateNested(`timeline_time`, e.target.value);
          }}
          placeholder={"March 2021 - August 2024"}
        />
        <Select
          placeholder="-"
          options={experienceLinkIcons}
          label={"Type:"}
          name={`timeline_type`}
          onChange={(e) => {
            console.log(e.target.value);
            console.log(JSON.parse(JSON.stringify(e.target.value)));
            handleUpdateNested(`timeline_type`, e.target.value);
          }}
          value={portfolioStackTimelineContextData[index].timeline_type}
        />
        <Input
          label={"Keywords:"}
          name={`timeline_keywords`}
          value={portfolioStackTimelineContextData[index].timeline_keywords}
          onChange={(e) => {
            handleUpdateNested(`timeline_keywords`, e.target.value);
          }}
          placeholder={"Frontend, React, Storybook"}
        />
      </div>
    )
  );
};

export default ExperienceInputCard;
