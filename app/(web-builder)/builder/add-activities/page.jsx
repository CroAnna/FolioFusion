"use client";
import ActivityInputCard from "@/app/_components/ActivityInputCard";
import Join from "@/app/_components/Join";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import { activityBgData } from "@/app/_libs/utils";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  getAddActivitiesData,
  getAddActivitiesSectionData,
  upsertAddActivitiesData,
} from "./actions";
import { deleteUnusedImages } from "../actions";

const AddActivities = () => {
  const {
    portfolioStackActivityContextData,
    setPortfolioStackActivityContextData,
    portfolioStackContextData,
    setPortfolioStackContextData,
  } = useContext(PortfolioContext);
  const [imagesToRemove, setImagesToRemove] = useState([]);

  const addActivity = () => {
    setPortfolioStackActivityContextData([
      ...portfolioStackActivityContextData,
      {
        activity_order:
          portfolioStackActivityContextData.length > 0
            ? portfolioStackActivityContextData.slice(-1)[0].activity_order + 1
            : 1,
        activity_title: "",
        activity_description: "",
        activity_url: "",
        activity_type: null,
        activity_img: "",
      },
    ]);
  };

  const handleUpdate = (field, value) => {
    setPortfolioStackContextData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveData = async () => {
    await deleteUnusedImages(imagesToRemove);
    const response = await upsertAddActivitiesData(
      portfolioStackContextData.id,
      portfolioStackContextData.activity_bg_shape,
      portfolioStackActivityContextData
    );
    setPortfolioStackActivityContextData(response.activitiesWithImages); // sluzi da se ne dogodi da ako se doda activity i samo spremi page (bez prebacivanja dalje) i doda jos jedan activity, prethodno dodani ce se opet dodat (jer mu se id nije azuriral s onim iz baze)
  };

  const getPortfolio = useCallback(async () => {
    const { portfolio, error } = await getAddActivitiesSectionData();

    if (error) {
      console.log(error);
    } else {
      setPortfolioStackContextData({
        ...portfolioStackContextData,
        activity_bg_shape: portfolio.activity_bg_shape,
      });
    }
  }, []);

  const getActivities = useCallback(async () => {
    const { activities, error } = await getAddActivitiesData();

    if (error) {
      console.log(error);
    } else if (activities.length > 0) {
      setPortfolioStackActivityContextData(activities);
    }
  }, []);

  useEffect(() => {
    if (portfolioStackContextData.activity_bg_shape == "") {
      getPortfolio();
    }
    getActivities();
  }, []);

  return (
    <div className="p-6 flex flex-col gap-4">
      <div className="flex justify-between gap-2">
        <h2 className="text-2xl items-center flex md:text-4xl font-bold">
          4. Add achievements and activities
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
          4.1. Select activity background color
        </h3>
        <Join
          value={portfolioStackContextData.activity_bg_shape}
          items={activityBgData}
          onChange={(e) => {
            handleUpdate("activity_bg_shape", e.target.value);
          }}
          name={"activity_bg_shape"}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h3 className="text-xl md:text-2xl font-bold">
            4.2. Add your achievements and activities
          </h3>
        </div>
        {portfolioStackActivityContextData &&
          portfolioStackActivityContextData.length > 0 &&
          portfolioStackActivityContextData.map(
            (activity, index) =>
              activity.activity_order && (
                <ActivityInputCard
                  key={activity.activity_order}
                  index={index}
                  activityKey={activity.activity_order}
                  activityId={activity.id}
                  setImagesToRemove={setImagesToRemove}
                  imagesToRemove={imagesToRemove}
                />
              )
          )}
        <button
          className="btn btn-secondary"
          onClick={() => {
            addActivity();
          }}
        >
          Add achievement or activity
        </button>
      </div>
      <NextPreviousNavigation
        handleNextClick={saveData}
        nextUrl={"/builder/deploy-portfolio"}
        previousUrl={"/builder/add-education"}
      />
    </div>
  );
};

export default AddActivities;
