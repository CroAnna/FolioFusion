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
import Image from "next/image";
import loadingGif from "@/public/loading.gif";
import { getIcons } from "@/app/_components/actions";

const AddWork = () => {
  const {
    portfolioStackHeroContextData,
    setPortfolioStackHeroContextData,
    portfolioStackProjectsContextData,
    setPortfolioStackProjectsContextData,
  } = useContext(PortfolioContext);
  const [imagesToRemove, setImagesToRemove] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [icons, setIcons] = useState([]);

  const handleUpdate = (field, value) => {
    setPortfolioStackHeroContextData({
      ...portfolioStackHeroContextData,
      [field]: value,
    });
  };

  const fetchIcons = async () => {
    const res = await getIcons();
    console.log(res.icons);

    setIcons(res.icons);
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
        project_icons: [
          { id: null, name: "-" },
          { id: null, name: "-" },
          { id: null, name: "-" },
          { id: null, name: "-" },
          { id: null, name: "-" },
        ],
      },
    ]);
  };

  const saveData = async () => {
    setIsPending(true);
    await deleteUnusedImages(imagesToRemove);
    const response = await upsertAddProjectsData(
      portfolioStackHeroContextData.id,
      portfolioStackHeroContextData.project_group_description,
      portfolioStackHeroContextData.project_group_title,
      portfolioStackProjectsContextData.map((project) => ({
        ...project,
        project_icons: project.project_icons.map((icon) => ({
          name: icon.name || "-",
          id: icon.id || null,
        })),
      }))
    );

    setPortfolioStackProjectsContextData((prev) =>
      response.projectsWithImages.map((newProject) => ({
        ...newProject,
        project_icons: Array(5)
          .fill()
          .map(
            (_, i) => newProject.project_icons?.[i] || { id: null, name: "-" }
          ),
      }))
    );

    // sluzi da se ne dogodi da ako se doda projekt i samo spremi page (bez prebacivanja dalje) i doda jos jedan projekt, prethodno dodani ce se opet dodat (jer mu se id nije azuriral s onim iz baze)
    setIsPending(false);
  };

  const getHero = useCallback(async () => {
    setIsPending(true);
    const { portfolio, error } = await getAddProjectsSectionData();

    if (error) {
      console.log(error);
    } else {
      setPortfolioStackHeroContextData({
        ...portfolioStackHeroContextData,
        project_group_description: portfolio.project_group_description,
        project_group_title: portfolio.project_group_title,
      });
    }
    setIsPending(false);
  }, []);

  const getProjects = useCallback(async () => {
    setIsPending(true);
    const { projects, error } = await getAddProjectsData();
    if (error) {
      console.log(error);
    } else if (projects.length > 0) {
      setPortfolioStackProjectsContextData(projects);
      console.log("dohvaceni projekti", projects);
    }
    setIsPending(false);
  }, []);

  useEffect(() => {
    if (
      portfolioStackHeroContextData.project_group_title == "" ||
      portfolioStackHeroContextData.project_group_description == ""
    ) {
      getHero();
    }
    fetchIcons();
    getProjects();
  }, []);

  return (
    <div className="p-6 flex flex-col gap-8">
      <div className="flex justify-between gap-2">
        <h2 className="text-2xl items-center flex md:text-4xl font-bold">
          2. Add your projects
        </h2>
        <button
          className="btn btn-secondary w-fit btn-outline"
          onClick={saveData}
          disabled={isPending}
        >
          {isPending ? (
            <div className="flex gap-1 items-center justify-center">
              <Image
                quality={40}
                src={loadingGif}
                width={24}
                height={24}
                alt="spinner"
              />
              <p>Saving...</p>
            </div>
          ) : (
            <p> Save</p>
          )}
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-xl md:text-2xl font-bold">
          2.1. Add section title
        </h3>
        <Input
          disabled={isPending}
          name={"project_group_title"}
          value={portfolioStackHeroContextData.project_group_title}
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
          disabled={isPending}
          name={"project_group_description"}
          value={portfolioStackHeroContextData.project_group_description}
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
                  setIsPending={setIsPending}
                  disabled={isPending}
                  key={project.project_order}
                  projectKey={project.project_order}
                  index={index}
                  projectId={project.id}
                  setImagesToRemove={setImagesToRemove}
                  imagesToRemove={imagesToRemove}
                  icons={icons}
                />
              )
          )}
        <button
          disabled={isPending}
          className="btn btn-primary"
          onClick={() => {
            addProject();
          }}
        >
          Add project
        </button>
      </div>
      <NextPreviousNavigation
        setIsPending={setIsPending}
        disabled={isPending}
        handleNextClick={saveData}
        nextUrl={"/builder/add-education"}
        previousUrl={"/builder/create-hero"}
      />
    </div>
  );
};

export default AddWork;
