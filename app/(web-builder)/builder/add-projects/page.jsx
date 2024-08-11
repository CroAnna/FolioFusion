"use client";
import Input from "@/app/_components/Input";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import ProjectInputCard from "@/app/_components/ProjectInputCard";
import React, { useContext, useEffect, useCallback, useState } from "react";
import {
  getAddProjectsSectionData,
  getAddProjectsData,
  upsertAddProjectsData,
} from "./actions";
import { deleteUnusedImages } from "../actions";

const AddWork = () => {
  const {
    portfolioStackContextData,
    setPortfolioStackContextData,
    portfolioStackProjectsContextData,
    setPortfolioStackProjectsContextData,
  } = useContext(PortfolioContext);
  const [imagesToRemove, setImagesToRemove] = useState([]);

  const handleUpdate = (field, value) => {
    setPortfolioStackContextData({
      ...portfolioStackContextData,
      [field]: value,
    });
  };

  const addProject = () => {
    setPortfolioStackProjectsContextData([
      ...portfolioStackProjectsContextData,
      {
        project_order:
          portfolioStackProjectsContextData.length > 0
            ? portfolioStackProjectsContextData.slice(-1)[0].project_order + 1
            : 1,
        project_title: "",
        project_descrtiption: "",
        project_technologies: "",
        project_urlDemo: "",
        project_urlGithub: "",
        project_img: "",
        project_demoType: "",
      },
    ]);
  };
  // TODO iz nekog razloga se dvaput dodal projekt na kraju
  const saveData = async () => {
    await deleteUnusedImages(imagesToRemove);
    const response = await upsertAddProjectsData(
      portfolioStackContextData.id,
      portfolioStackContextData.project_group_description,
      portfolioStackContextData.project_group_title,
      portfolioStackProjectsContextData
    );

    setPortfolioStackProjectsContextData(response.projectsWithImages); // sluzi da se ne dogodi da ako se doda projekt i samo spremi page (bez prebacivanja dalje) i doda jos jedan projekt, prethodno dodani ce se opet dodat (jer mu se id nije azuriral s onim iz baze)
  };

  const getPortfolio = useCallback(async () => {
    const { portfolio, error } = await getAddProjectsSectionData();

    if (error) {
      console.log(error);
    } else {
      setPortfolioStackContextData({
        ...portfolioStackContextData,
        project_group_description: portfolio.project_group_description,
        project_group_title: portfolio.project_group_title,
      });
    }
  }, []);

  const getProjects = useCallback(async () => {
    const { projects, error } = await getAddProjectsData();
    if (error) {
      console.log(error);
    } else if (projects.length > 0) {
      setPortfolioStackProjectsContextData(projects);
    }
  }, []);

  useEffect(() => {
    if (
      portfolioStackContextData.project_group_title == "" ||
      portfolioStackContextData.project_group_description == ""
    ) {
      getPortfolio();
    }
    getProjects();
  }, []);

  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="flex justify-between gap-2">
        <h2 className="text-2xl items-center flex md:text-4xl font-bold">
          2. Add your projects
        </h2>
        <button
          className="btn btn-secondary w-24 btn-outline"
          onClick={saveData}
        >
          Save
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          2.1. Add section title
        </h3>
        <Input
          name={"project_group_title"}
          value={portfolioStackContextData.project_group_title}
          onChange={(e) => {
            handleUpdate("project_group_title", e.target.value);
          }}
          placeholder={"My projects"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          2.2. Add section description
        </h3>
        <Input
          name={"project_group_description"}
          value={portfolioStackContextData.project_group_description}
          onChange={(e) => {
            handleUpdate("project_group_description", e.target.value);
          }}
          placeholder={"This is what I have done."}
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          2.3. Add your projects
        </h3>
        {portfolioStackProjectsContextData &&
          portfolioStackProjectsContextData.length > 0 &&
          portfolioStackProjectsContextData.map(
            (project, index) =>
              project.project_order && (
                <ProjectInputCard
                  key={project.project_order}
                  projectKey={project.project_order}
                  index={index}
                  projectId={project.id}
                  setImagesToRemove={setImagesToRemove}
                  imagesToRemove={imagesToRemove}
                />
              )
          )}
        <button
          className="btn btn-primary"
          onClick={() => {
            addProject();
          }}
        >
          Add project
        </button>
      </div>
      <NextPreviousNavigation
        handleNextClick={saveData}
        nextUrl={"/builder/add-education"}
        previousUrl={"/builder/create-hero"}
      />
    </div>
  );
};

export default AddWork;
