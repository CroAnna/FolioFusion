"use client";
import ActivityInputCard from "@/app/_components/ActivityInputCard";
import Join from "@/app/_components/Join";
import NextPreviousNavigation from "@/app/_components/NextPreviousNavigation";
import { PortfolioContext } from "@/app/_components/PortfolioProvider";
import { activityBgData } from "@/app/_libs/utils";
import { useContext } from "react";

const AddActivities = () => {
  const {
    portfolioStackActivityContextData,
    setPortfolioStackActivityContextData,
    portfolioStackContextData,
    setPortfolioStackContextData,
  } = useContext(PortfolioContext);

  const addActivity = () => {
    setPortfolioStackActivityContextData([
      ...portfolioStackActivityContextData,
      {
        activity_id:
          portfolioStackActivityContextData.length > 0
            ? portfolioStackActivityContextData.slice(-1)[0].activity_id + 1
            : 1,
        activity_description: "",
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

  // const { data, error } = await supabase.from("portfolios").select();

  return (
    <div className="p-6 flex flex-col gap-4">
      <h2 className="text-4xl font-bold">4. Add achievements and activities</h2>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">
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
          <h3 className="text-2xl font-bold">
            4.2. Add your achievements and activities
          </h3>
        </div>
        {portfolioStackActivityContextData.map(
          (activity, index) =>
            activity.activity_id && (
              <ActivityInputCard
                key={activity.activity_id}
                index={index}
                activityKey={activity.activity_id}
              />
            )
        )}
        <button
          className="btn btn-secondary "
          onClick={() => {
            addActivity();
          }}
        >
          Add achievement or activity
        </button>
      </div>
      <NextPreviousNavigation
        nextUrl={"/builder/add-education"}
        previousUrl={"/builder/add-education"}
      />
    </div>
  );
};

export default AddActivities;
