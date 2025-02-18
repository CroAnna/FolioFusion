import React, { useContext, useEffect, useRef, useState } from "react";
import { PortfolioContext } from "./PortfolioProvider";
import Select from "./Select";
import Input from "./Input";
import Textarea from "./Textarea";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { activityIcons } from "../_libs/utils";
import FileInput from "./FileInput";
import Swal from "sweetalert2";
import { deleteActivityById } from "../(web-builder)/builder/add-activities/actions";
import { deleteUnusedImages } from "../(web-builder)/builder/actions";

const ActivityInputCard = ({
  index,
  activityKey,
  activityId,
  setImagesToRemove,
  imagesToRemove,
  setIsPending,
  disabled,
}) => {
  const {
    portfolioStackActivityContextData,
    setPortfolioStackActivityContextData,
  } = useContext(PortfolioContext);

  const activityInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [firstLoad, setFirstLoad] = useState(false);

  const handleUpdateNested = (field, value) => {
    setPortfolioStackActivityContextData((prevData) =>
      prevData.map((el) =>
        el.activity_order === activityKey ? { ...el, [field]: value } : el
      )
    );
  };

  const removeSelectedImage = () => {
    setIsPending(true);
    if (portfolioStackActivityContextData[index].activity_img.publicUrl) {
      const imgUrl =
        portfolioStackActivityContextData[index].activity_img.publicUrl;
      setImagesToRemove([...imagesToRemove, imgUrl]);
    }
    setFile(null);
    if (activityInputRef.current) {
      activityInputRef.current.value = "";
    }
    setPortfolioStackActivityContextData((prevData) =>
      prevData.map((el) =>
        el.activity_order == activityKey ? { ...el, activity_img: null } : el
      )
    );
    setIsPending(false);
  };

  useEffect(() => {
    if (portfolioStackActivityContextData[index].activity_img) {
      setFile(portfolioStackActivityContextData[index].activity_img);
    }
  }, []);

  useEffect(() => {
    setIsPending(true);
    console.log(file);
    if (file && !portfolioStackActivityContextData[index].activity_img) {
      setFirstLoad(true);
      setPortfolioStackActivityContextData((prevData) =>
        prevData.map((el) =>
          el.activity_order == activityKey ? { ...el, activity_img: file } : el
        )
      );
    } else if (file && portfolioStackActivityContextData[index].activity_img) {
      if (!firstLoad) {
        setPortfolioStackActivityContextData((prevData) =>
          prevData.map((el) =>
            el.activity_order == activityKey
              ? { ...el, activity_img: file }
              : el
          )
        );
        setFirstLoad(true);
      } else {
        setPortfolioStackActivityContextData((prevData) =>
          prevData.map((el) =>
            el.activity_order == activityKey
              ? { ...el, activity_img: file }
              : el
          )
        );
      }
    }
    setIsPending(false);
  }, [file]);

  const handleDelete = () => {
    console.log(activityId);
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete this activity.",
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
        if (activityId) {
          // postoji u bazi
          setPortfolioStackActivityContextData((prevData) =>
            prevData.filter((el) => el.id !== activityId)
          );
          await deleteActivityById(activityId);
        } else {
          // postoji samo u kontekstu zasad (jos nije savean)
          setPortfolioStackActivityContextData((prevData) =>
            prevData.filter(
              (el) =>
                el.activity_order !==
                portfolioStackActivityContextData[index].activity_order
            )
          );
        }
        if (
          portfolioStackActivityContextData[index].activity_img &&
          portfolioStackActivityContextData[index].activity_img.publicUrl
        ) {
          await deleteUnusedImages([
            portfolioStackActivityContextData[index].activity_img.publicUrl,
          ]);
        }
        setIsPending(false);
      }
    });
  };

  return (
    portfolioStackActivityContextData[index] && (
      <div className="border-emerald-500 border shadow-sm p-4 rounded-lg flex flex-col gap-2">
        <div className="flex gap-4">
          <Input
            label={"Title:"}
            name={`activity_title`}
            value={portfolioStackActivityContextData[index].activity_title}
            onChange={(e) => {
              handleUpdateNested(`activity_title`, e.target.value);
            }}
            placeholder={"What, where?"}
            disabled={disabled}
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
          name={"activity_description"}
          value={portfolioStackActivityContextData[index].activity_description}
          onChange={(e) => {
            handleUpdateNested("activity_description", e.target.value);
          }}
          placeholder={"Describe your activity"}
        />
        <div className="flex items-end w-full gap-3">
          {!portfolioStackActivityContextData[index].activity_img ? (
            <FileInput
              disabled={disabled}
              file={file}
              fileInputRef={activityInputRef}
              label={"Image: (max. 5 MB)"}
              setFile={setFile}
              name={"activity_img"}
            />
          ) : (
            <div className="flex flex-col">
              <div className="label pb-0 pt-0">
                <span className="label-text text-base w-full">
                  Image: (max. 5 MB)
                </span>
              </div>
              <button
                disabled={disabled}
                className="btn btn-outline w-fit btn-error btn-ghost disabled:bg-neutral-700"
                onClick={removeSelectedImage}
              >
                Remove image
              </button>
            </div>
          )}
        </div>
        <Select
          disabled={disabled}
          placeholder="-"
          options={activityIcons}
          label={"Type:"}
          name={`activity_type`}
          onChange={(e) => {
            console.log(e.target.value);
            console.log(JSON.parse(JSON.stringify(e.target.value)));
            handleUpdateNested(`activity_type`, e.target.value);
          }}
          value={portfolioStackActivityContextData[index].activity_type}
        />
        <Input
          disabled={disabled}
          label={"URL:"}
          name={`activity_url`}
          value={portfolioStackActivityContextData[index].activity_url}
          onChange={(e) => {
            handleUpdateNested(`activity_url`, e.target.value);
          }}
          placeholder={"More info, article, video link..."}
        />
      </div>
    )
  );
};

export default ActivityInputCard;
