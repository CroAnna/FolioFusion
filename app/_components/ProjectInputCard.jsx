"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import { PortfolioContext } from "./PortfolioProvider";
import FileInput from "./FileInput";
import Select from "./Select";
import { projectLinkIcons } from "../_libs/utils";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import Swal from "sweetalert2";
import { deleteProjectById } from "../(web-builder)/builder/add-projects/actions";

const ProjectInputCard = ({
  projectKey,
  index,
  projectId,
  setImagesToRemove,
  imagesToRemove,
  disabled = false,
  setIsPending,
  icons,
}) => {
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
        return el.project_order === projectKey ? { ...el, [field]: value } : el;
      })
    );
  };

  const removeSelectedImage = () => {
    if (portfolioStackProjectsContextData[index].project_img.publicUrl) {
      const imgUrl =
        portfolioStackProjectsContextData[index].project_img.publicUrl;
      setImagesToRemove([...imagesToRemove, imgUrl]);
    }
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setPortfolioStackProjectsContextData((prevData) =>
      prevData.map((el) =>
        el.project_order == projectKey ? { ...el, project_img: null } : el
      )
    );
  };

  useEffect(() => {
    if (portfolioStackProjectsContextData[index].project_img) {
      setFile(portfolioStackProjectsContextData[index].project_img);
    }
  }, []);

  useEffect(() => {
    if (file && !portfolioStackProjectsContextData[index].project_img) {
      setFirstLoad(true);
      setPortfolioStackProjectsContextData((prevData) =>
        prevData.map((el) =>
          el.project_order == projectKey ? { ...el, project_img: file } : el
        )
      );
    } else if (file && portfolioStackProjectsContextData[index].project_img) {
      if (!firstLoad) {
        setPortfolioStackProjectsContextData((prevData) =>
          prevData.map((el) =>
            el.project_order == projectKey ? { ...el, project_img: file } : el
          )
        );
        setFirstLoad(true);
      } else {
        setPortfolioStackProjectsContextData((prevData) =>
          prevData.map((el) =>
            el.project_order == projectKey ? { ...el, project_img: file } : el
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
        setIsPending(true);

        if (projectId) {
          // postoji u bazi
          setPortfolioStackProjectsContextData((prevData) =>
            prevData.filter((el) => el.id !== projectId)
          );
          await deleteProjectById(projectId);
        } else {
          // postoji samo u kontekstu zasad (jos nije savean)
          setPortfolioStackProjectsContextData((prevData) =>
            prevData.filter(
              (el) =>
                el.project_order !==
                portfolioStackProjectsContextData[index].project_order
            )
          );
        }
        setIsPending(false);
      }
    });
  };

  return (
    portfolioStackProjectsContextData[index] && (
      <>
        <div className="border-emerald-500 border shadow-sm p-4 rounded-lg flex flex-col gap-2">
          <div className="flex gap-4">
            <Input
              disabled={disabled}
              label={"Title:"}
              name={`project_title`}
              value={portfolioStackProjectsContextData[index].project_title}
              onChange={(e) => {
                handleUpdateNested(`project_title`, e.target.value);
              }}
              placeholder={"Recommended 1 or 2 words"}
            />
            <button
              disabled={disabled}
              onClick={handleDelete}
              className="bg-red-100 cursor-pointer flex items-center rounded-lg px-2 disabled:bg-neutral-700"
            >
              <Trash size={32} color="#b91c1c" weight="duotone" />
            </button>
          </div>
          <Textarea
            disabled={disabled}
            label={"Description:"}
            name={"project_description"}
            value={portfolioStackProjectsContextData[index].project_description}
            onChange={(e) => {
              handleUpdateNested("project_description", e.target.value);
            }}
            placeholder={"Describe your project in a few sentences."}
          />
          <div className="flex items-end w-full gap-3">
            {!portfolioStackProjectsContextData[index].project_img ? (
              <FileInput
                disabled={disabled}
                file={file}
                fileInputRef={fileInputRef}
                label={"Image: (max. 5 MB)"}
                setFile={setFile}
                name={"project_img"}
                placeholder={"Paste image URL"}
              />
            ) : (
              file && (
                <div className="flex flex-col">
                  <div className="label pb-0 pt-0">
                    <span className="label-text text-base w-full">
                      Image: (max. 5 MB)
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 pb-1">
                    * Vertical project images scroll on hover (sometimes, based
                    on selected UI design)
                  </p>
                  <button
                    disabled={disabled}
                    className="btn btn-outline w-fit btn-error btn-ghost disabled:bg-neutral-700"
                    onClick={removeSelectedImage}
                  >
                    Remove image
                  </button>
                </div>
              )
            )}
          </div>
          <div className="flex gap-3 w-full">
            <Input
              disabled={disabled}
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
              disabled={disabled}
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
              disabled={disabled}
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
              disabled={disabled}
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
              disabled={disabled}
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
              disabled={disabled}
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
              <span className="label-text text-base">
                Select up to 5 technologies:
              </span>
            </div>
            {icons &&
              icons.length > 0 &&
              portfolioStackProjectsContextData[index] &&
              portfolioStackProjectsContextData[index].project_icons && (
                <div className="flex justify-between items-end gap-3 flex-col md:flex-row">
                  {[0, 1, 2, 3, 4].map((iconIndex) => (
                    <Select
                      key={iconIndex}
                      disabled={disabled}
                      placeholder="-"
                      options={icons}
                      labelAttribute="name"
                      valueAttribute="name"
                      name={`project_icons[${iconIndex}]`}
                      onChange={(e) => {
                        const newIcons = [
                          ...(portfolioStackProjectsContextData[index]
                            .project_icons || []),
                        ];
                        newIcons[iconIndex] = { name: e.target.value };
                        handleUpdateNested("project_icons", newIcons);
                      }}
                      value={
                        portfolioStackProjectsContextData[index]
                          .project_icons?.[iconIndex]?.name || ""
                      }
                    />
                  ))}
                </div>
              )}
          </div>
        </div>
      </>
    )
  );
};

export default ProjectInputCard;
