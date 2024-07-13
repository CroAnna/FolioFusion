"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { PortfolioContext } from "./PortfolioProvider";
import FileInput from "./FileInput";
import Select from "./Select";
import { icons, projectLinkIcons } from "../_libs/utils";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import Swal from "sweetalert2";

const ProjectInputCard = ({ projectKey, index }) => {
  const {
    portfolioStackProjectsContextData,
    setPortfolioStackProjectsContextData,
  } = useContext(PortfolioContext);

  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [firstLoad, setFirstLoad] = useState(false);

  const handleUpdateNested = (field, value) => {
    setPortfolioStackProjectsContextData((prevData) =>
      prevData.map((el) => {
        return el.project_id === projectKey ? { ...el, [field]: value } : el;
      })
    );
  };

  const removeSelectedImage = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setPortfolioStackProjectsContextData((prevData) =>
      prevData.map((el) =>
        el.project_id == projectKey ? { ...el, project_img: null } : el
      )
    );
  };

  useEffect(() => {
    console.log(portfolioStackProjectsContextData[index].project_img);
    if (portfolioStackProjectsContextData[index].project_img) {
      console.log(portfolioStackProjectsContextData[index].project_img);
      console.log(portfolioStackProjectsContextData[index].project_img);
      setFile(portfolioStackProjectsContextData[index].project_img);
    }
  }, []);

  useEffect(() => {
    console.log(file);
    if (file && !portfolioStackProjectsContextData[index].project_img) {
      setFirstLoad(true);
      setPortfolioStackProjectsContextData((prevData) =>
        prevData.map((el) =>
          el.project_id == projectKey ? { ...el, project_img: file } : el
        )
      );
    } else if (file && portfolioStackProjectsContextData[index].project_img) {
      if (!firstLoad) {
        setPortfolioStackProjectsContextData((prevData) =>
          prevData.map((el) =>
            el.project_id == projectKey ? { ...el, project_img: file } : el
          )
        );
        setFirstLoad(true);
      } else {
        setPortfolioStackProjectsContextData((prevData) =>
          prevData.map((el) =>
            el.project_id == projectKey ? { ...el, project_img: file } : el
          )
        );
      }
    }
  }, [file]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete this project.",
      icon: "warning",
      showCancelButton: true,
      iconColor: "#66cc8a",
      confirmButtonColor: "#66cc8a",
      cancelButtonColor: "#b91c1c",
      cancelButtonText: "Cancel",
      confirmButtonText: "Confirm",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setPortfolioStackProjectsContextData((prevData) =>
          prevData.filter((el) => el.project_id !== projectKey)
        );
      }
    });
  };

  return (
    portfolioStackProjectsContextData[index] && (
      <>
        <div className="border-emerald-500 border shadow-sm p-4 rounded-lg flex flex-col gap-2">
          <div className="flex gap-4">
            <Input
              label={"Title:"}
              name={`project_title`}
              value={portfolioStackProjectsContextData[index].project_title}
              onChange={(e) => {
                handleUpdateNested(`project_title`, e.target.value);
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
            name={"project_description"}
            value={portfolioStackProjectsContextData[index].project_description}
            onChange={(e) => {
              handleUpdateNested("project_description", e.target.value);
            }}
            placeholder={"Describe your project in a few sentences."}
          />
          <div className="flex items-end w-full gap-3">
            <FileInput
              file={file}
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
              value={
                portfolioStackProjectsContextData[index].project_link_1_text
              }
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
              value={
                portfolioStackProjectsContextData[index].project_link_2_text
              }
              onChange={(e) => {
                handleUpdateNested(`project_link_2_text`, e.target.value);
              }}
              placeholder={"Live demo/ Video"}
            />
          </div>
          <div className="flex gap-3 w-full">
            <Input
              label={"Link 1 URL:"}
              value={
                portfolioStackProjectsContextData[index].project_link_1_url
              }
              name={`project_link_1`}
              onChange={(e) => {
                handleUpdateNested(`project_link_1_url`, e.target.value);
              }}
              placeholder={"Paste URL"}
            />
            <Input
              label={"Link 2 URL:"}
              name={`project_link_2`}
              value={
                portfolioStackProjectsContextData[index].project_link_2_url
              }
              onChange={(e) => {
                handleUpdateNested(`project_link_2_url`, e.target.value);
              }}
              placeholder={"Paste URL"}
            />
          </div>
          <div className="flex gap-3 w-full">
            <Select
              value={
                portfolioStackProjectsContextData[index].project_link_1_icon
              }
              options={projectLinkIcons}
              label={"Link 1 icon:"}
              name={`project_link_1_icon`}
              onChange={(e) => {
                handleUpdateNested(`project_link_1_icon`, e.target.value);
              }}
            />
            <Select
              value={
                portfolioStackProjectsContextData[index].project_link_2_icon
              }
              options={projectLinkIcons}
              label={"Link 2 icon:"}
              name={`project_link_2_icon`}
              onChange={(e) => {
                handleUpdateNested(`project_link_2_icon`, e.target.value);
              }}
            />
          </div>
          <div>
            <div className="label pb-0 pt-0">
              <span className="label-text  text-base">
                Select up to 5 technologies:
              </span>
            </div>
            <div className="flex justify-between items-end gap-3">
              <Select
                placeholder="-"
                options={icons}
                labelAttribute="icon"
                valueAttribute="icon"
                name={`project_technology_1_icon`}
                onChange={(e) => {
                  handleUpdateNested(
                    `project_technology_1_icon`,
                    e.target.value
                  );
                }}
                value={
                  portfolioStackProjectsContextData[index]
                    .project_technology_1_icon
                }
              />
              <Select
                placeholder="-"
                options={icons}
                labelAttribute="icon"
                valueAttribute="icon"
                name={`project_technology_2_icon`}
                onChange={(e) => {
                  handleUpdateNested(
                    `project_technology_2_icon`,
                    e.target.value
                  );
                }}
                value={
                  portfolioStackProjectsContextData[index]
                    .project_technology_2_icon
                }
              />
              <Select
                placeholder="-"
                options={icons}
                labelAttribute="icon"
                valueAttribute="icon"
                label={""}
                name={`project_technology_3_icon`}
                onChange={(e) => {
                  handleUpdateNested(
                    `project_technology_3_icon`,
                    e.target.value
                  );
                }}
                value={
                  portfolioStackProjectsContextData[index]
                    .project_technology_3_icon
                }
              />
              <Select
                placeholder="-"
                options={icons}
                labelAttribute="icon"
                valueAttribute="icon"
                label={""}
                name={`project_technology_4_icon`}
                onChange={(e) => {
                  handleUpdateNested(
                    `project_technology_4_icon`,
                    e.target.value
                  );
                }}
                value={
                  portfolioStackProjectsContextData[index]
                    .project_technology_4_icon
                }
              />
              <Select
                placeholder="-"
                options={icons}
                labelAttribute="icon"
                valueAttribute="icon"
                label={""}
                name={`project_technology_5_icon`}
                onChange={(e) => {
                  handleUpdateNested(
                    `project_technology_5_icon`,
                    e.target.value
                  );
                }}
                value={
                  portfolioStackProjectsContextData[index]
                    .project_technology_5_icon
                }
              />
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ProjectInputCard;
