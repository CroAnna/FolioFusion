import {
  Activity,
  Devices,
  DotsNine,
  GraduationCap,
  LightbulbFilament,
  Palette,
  Shapes,
  Link as LinkIcon,
  Tag,
  UserFocus,
} from "@phosphor-icons/react/dist/ssr";
import { constants } from "../../utils/stripe/constants";
import { getUserData } from "./actionsServer";
import StartForFree from "./StartForFree";

const Pricing = async () => {
  const { userData } = await getUserData();

  return (
    <div
      className="lg:w-full max-w-screen-xl mx-4 lg:mx-auto pb-12 lg:pb-56 relative"
      id="pricing"
    >
      <StartForFree additionalStyle="top-4 hidden" />
      <div className="w-full bg-grey-dark rounded-3xl px-4 py-8 lg:p-12 border-cyan-400 border-[1px] shadow-[0_0px_30px_-15px_rgba(34,211,238,1)] flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col gap-8 lg:my-8 items-center">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-4xl font-semibold">Show your work</h2>
            <p className="text-stone-400">
              Your creativity, unleashed: Build a portfolio that shines ✨
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col justify-center items-center h-20 p-1 lg:p-2 bg-neutral-800 shadow-lg rounded-lg gap-1">
              <LinkIcon size={28} color="#4dde80" weight="duotone" />
              <p>Custom domain</p>
            </div>
            <div className="flex flex-col justify-center items-center h-20 p-1 lg:p-2 bg-neutral-800 shadow-lg rounded-lg gap-1">
              <Palette size={28} color="#4dde80" weight="duotone" />
              <p>7 color palettes</p>
            </div>
            <div className="flex flex-col justify-center items-center h-20 p-1 lg:p-2 bg-neutral-800 shadow-lg rounded-lg gap-1">
              <UserFocus size={28} color="#4dde80" weight="duotone" />
              <p>Personalization</p>
            </div>
            <div className="flex flex-col justify-center items-center h-20 p-1 lg:p-2 bg-neutral-800 shadow-lg rounded-lg gap-1">
              <DotsNine size={28} color="#4dde80" weight="duotone" />
              <p>Special elements</p>
            </div>
            <div className="flex flex-col justify-center items-center h-20 p-1 lg:p-2 bg-neutral-800 shadow-lg rounded-lg gap-1">
              <Devices size={28} color="#4dde80" weight="duotone" />
              <p>Responsiveness</p>
            </div>
            <div className="flex flex-col justify-center items-center h-20 p-1 lg:p-2 bg-neutral-800 shadow-lg rounded-lg gap-1">
              <Shapes size={28} color="#4dde80" weight="duotone" />
              <p>Unique design</p>
            </div>
            <div className="flex flex-col justify-center items-center h-20 p-1 lg:p-2 bg-neutral-800 shadow-lg rounded-lg gap-1">
              <LightbulbFilament size={28} color="#4dde80" weight="duotone" />
              <p>Projects</p>
            </div>
            <div className="flex flex-col justify-center items-center h-20 p-1 lg:p-2 bg-neutral-800 shadow-lg rounded-lg gap-1">
              <GraduationCap size={28} color="#4dde80" weight="duotone" />
              <p>Education</p>
            </div>
            <div className="flex flex-col justify-center items-center h-20 p-1 lg:p-2 bg-neutral-800 shadow-lg rounded-lg gap-1">
              <Activity size={28} color="#4dde80" weight="duotone" />
              <p>Activities</p>
            </div>
            <div className="flex flex-col justify-center items-center h-20 p-1 lg:p-2 lg:hidden bg-neutral-800 shadow-lg rounded-lg gap-1">
              <Tag size={28} color="#4dde80" weight="duotone" />
              <p>Save</p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 flex-col lg:flex-row">
          <a
            className="bg-neutral-900 p-8 rounded-3xl flex items-center justify-center flex-col gap-4 cursor-pointer border-neutral-900 hover:border-emerald-500 border-2 hover:shadow-[0_0px_30px_-10px_rgba(34,211,238,1)] hover:transition hover:duration-300 hover:bg-neutral-950 hover:scale-105"
            target="_blank"
            href={
              userData && userData.email
                ? constants.paymentLinks.oneYearPass +
                  "?prefilled_email=" +
                  userData.email
                : constants.paymentLinks.oneYearPass
            }
          >
            <h3 className="font-semibold text-4xl text-green-400">
              1-Year Pass
            </h3>
            <p>One-time payment. No subscription.</p>
            <div className="flex gap-2 items-center">
              <h2 className="text-xl font-medium line-through text-neutral-500">
                15€
              </h2>
              <h2 className="text-5xl font-bold">5€</h2>
              <h2 className="text-lg text-neutral-500">EUR</h2>
            </div>
          </a>
          <a
            className="bg-neutral-900 flex items-center justify-center flex-col lg:my-[-80px] lg:mr-[-50px] lg:w-[400px] rounded-3xl p-8 border-emerald-500 border-2 shadow-[0_0px_30px_-15px_rgba(34,211,238,1)] gap-4 cursor-pointer hover:shadow-[0_0px_30px_-10px_rgba(34,211,238,1)] hover:transition hover:duration-300 hover:bg-neutral-950 hover:scale-105"
            target="_blank"
            href={
              userData && userData.email
                ? constants.paymentLinks.lifetimePass +
                  "?prefilled_email=" +
                  userData.email
                : constants.paymentLinks.lifetimePass
            }
          >
            <h3 className="font-semibold text-4xl text-green-400">
              Lifetime Deal
            </h3>
            <p>One-time payment. No subscription.</p>
            <div className="flex gap-2 items-center">
              <h2 className="text-xl font-medium line-through text-neutral-500">
                30€
              </h2>
              <h2 className="text-6xl font-bold">10€</h2>
              <h2 className="text-lg text-neutral-500">EUR</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
