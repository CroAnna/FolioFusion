import { Medal } from "@phosphor-icons/react/dist/ssr";
import {
  activityIcons,
  getHexSecondaryBgColor,
  getPrimaryBgColors,
  getSecondaryBgColors,
  getSecondaryTextColor,
} from "../_libs/utils";

const ActivityCard = ({ palette, data }) => {
  return (
    <div className="card card-compact glass w-72 relative my-16">
      {data.activity_img && (
        <figure className="h-48">
          <img src={URL.createObjectURL(data.activity_img)} alt="activity" />
        </figure>
      )}
      {data.activity_type ? (
        <div
          className={`absolute top-[-16px] right-[-16px] rounded-full p-4 ${getPrimaryBgColors(
            palette
          )} ${getSecondaryTextColor(palette)} `}
        >
          {activityIcons.find((el) => el.value == data.activity_type)?.icon}
        </div>
      ) : null}
      <div className="card-body">
        <h2 className={`${getSecondaryTextColor(palette)} card-title`}>
          {data.activity_title}
        </h2>
        <p className={`${getSecondaryTextColor(palette)}`}>
          {data.activity_description}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
