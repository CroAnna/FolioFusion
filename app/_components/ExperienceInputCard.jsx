"use client";
import React, { useContext } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { PortfolioContext } from "./PortfolioProvider";
import Select from "./Select";
import { experienceLinkIcons } from "../_libs/utils";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import Swal from "sweetalert2";
import { deleteExperienceById } from "../(web-builder)/builder/add-education/actions";

const ExperienceInputCard = ({ index, experienceKey, experienceId }) => {
  const {
    portfolioStackExperienceContextData,
    setPortfolioStackExperienceContextData,
  } = useContext(PortfolioContext);

  const handleUpdateNested = (field, value) => {
    setPortfolioStackExperienceContextData((prevData) =>
      prevData.map((el) =>
        el.experience_order === experienceKey ? { ...el, [field]: value } : el
      )
    );
  };

  const handleDelete = () => {
    console.log(experienceId);
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete this experience.",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#66cc8a",
      confirmButtonColor: "#66cc8a",
      cancelButtonColor: "#b91c1c",
      cancelButtonText: "Cancel",
      confirmButtonText: "Confirm",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (experienceId) {
          // postoji u bazi
          setPortfolioStackExperienceContextData((prevData) =>
            prevData.filter((el) => el.id !== experienceId)
          );
          await deleteExperienceById(experienceId);
        } else {
          // postoji samo u kontekstu zasad (jos nije savean)
          setPortfolioStackExperienceContextData((prevData) =>
            prevData.filter(
              (el) =>
                el.experience_order !==
                portfolioStackExperienceContextData[index].experience_order
            )
          );
        }
      }
    });
  };

  return (
    portfolioStackExperienceContextData[index] && (
      <div className="border-emerald-500 border shadow-sm p-4 rounded-lg flex flex-col gap-2">
        <div className="flex gap-4">
          <Input
            label={"Title:"}
            name={`experience_title`}
            value={portfolioStackExperienceContextData[index].experience_title}
            onChange={(e) => {
              handleUpdateNested(`experience_title`, e.target.value);
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
          name={"experience_description"}
          value={
            portfolioStackExperienceContextData[index].experience_description
          }
          onChange={(e) => {
            handleUpdateNested("experience_description", e.target.value);
          }}
          placeholder={"Describe your position"}
        />
        <Input
          label={"Period of time:"}
          name={`experience_time`}
          value={portfolioStackExperienceContextData[index].experience_time}
          onChange={(e) => {
            handleUpdateNested(`experience_time`, e.target.value);
          }}
          placeholder={"March 2021 - August 2024"}
        />
        <Select
          placeholder="-"
          options={experienceLinkIcons}
          label={"Type:"}
          name={`experience_type`}
          onChange={(e) => {
            console.log(e.target.value);
            console.log(JSON.parse(JSON.stringify(e.target.value)));
            handleUpdateNested(`experience_type`, e.target.value);
          }}
          value={portfolioStackExperienceContextData[index].experience_type}
        />
        <Input
          label={"Keywords:"}
          name={`experience_keywords`}
          value={portfolioStackExperienceContextData[index].experience_keywords}
          onChange={(e) => {
            handleUpdateNested(`experience_keywords`, e.target.value);
          }}
          placeholder={"Frontend, React, Storybook"}
        />
      </div>
    )
  );
};

export default ExperienceInputCard;
