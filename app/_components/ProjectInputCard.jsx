"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { PortfolioContext } from "./PortfolioProvider";
import FileInput from "./FileInput";
import Select from "./Select";
import { projectLinkIcons } from "../_libs/utils";

const ProjectInputCard = ({ projectKey }) => {
  const {
    portfolioStackProjectsContextData,
    setPortfolioStackProjectsContextData,
  } = useContext(PortfolioContext);
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleUpdateNested = (field, value) => {
    setPortfolioStackProjectsContextData((prevData) =>
      prevData.map((el) =>
        el.project_id === projectKey + 1 ? { ...el, [field]: value } : el
      )
    );
  };

  const removeSelectedImage = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    console.log(file);
    if (file) {
      setPortfolioStackProjectsContextData((prevData) =>
        prevData.map((el) =>
          el.project_id === projectKey + 1
            ? { ...el, project_img: URL.createObjectURL(file) }
            : el
        )
      );
    } else {
      setPortfolioStackProjectsContextData((prevData) =>
        prevData.map((el) =>
          el.project_id === projectKey + 1 ? { ...el, project_img: "" } : el
        )
      );
    }
  }, [file]);

  return (
    <div className="bg-blue-50 border-stone-300 border shadow-sm p-4 rounded-lg flex flex-col gap-2">
      <Input
        label={"Title:"}
        name={`project_title`}
        onChange={(e) => {
          handleUpdateNested(`project_title`, e.target.value);
        }}
        placeholder={"Recommended 1 or 2 words"}
      />
      <Textarea
        label={"Description:"}
        name={"project_description"}
        onChange={(e) => {
          handleUpdateNested("project_description", e.target.value);
        }}
        placeholder={"Describe your project in a few sentences."}
      />
      <div className="flex items-end w-full gap-3">
        <FileInput
          fileInputRef={fileInputRef}
          label={"Image:"}
          setFile={setFile}
          name={"project_img"}
          placeholder={"Paste image URL"}
        />
        {file && (
          <button
            className="btn btn-outline w-fit btn-error btn-ghost"
            onClick={removeSelectedImage}
          >
            Remove image
          </button>
        )}
      </div>
      <div className="flex gap-3 w-full">
        <Input
          label={"Link 1 text:"}
          name={`project_link_1_text`}
          onChange={(e) => {
            handleUpdateNested(`project_link_1_text`, e.target.value);
          }}
          placeholder={"Code"}
        />
        <Input
          label={"Link 2 text:"}
          name={`project_link_2_text`}
          onChange={(e) => {
            handleUpdateNested(`project_link_2_text`, e.target.value);
          }}
          placeholder={"Live demo/ Video"}
        />
      </div>
      <div className="flex gap-3 w-full">
        <Input
          label={"Link 1 URL:"}
          name={`project_link_1`}
          onChange={(e) => {
            handleUpdateNested(`project_link_1_url`, e.target.value);
          }}
          placeholder={"Paste URL"}
        />
        <Input
          label={"Link 2 URL:"}
          name={`project_link_2`}
          onChange={(e) => {
            handleUpdateNested(`project_link_2_url`, e.target.value);
          }}
          placeholder={"Paste URL"}
        />
      </div>
      <div className="flex gap-3 w-full">
        <Select
          options={projectLinkIcons}
          label={"Link 1 icon:"}
          name={`project_link_1_icon`}
          onChange={(e) => {
            handleUpdateNested(`project_link_1_icon`, e.target.value);
          }}
        />
        <Select
          options={projectLinkIcons}
          label={"Link 2 icon:"}
          name={`project_link_2_icon`}
          onChange={(e) => {
            handleUpdateNested(`project_link_2_icon`, e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default ProjectInputCard;
