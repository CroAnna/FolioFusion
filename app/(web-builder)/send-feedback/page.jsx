import IdeasForm from "@/app/_components/IdeasForm";
import VoteButton from "@/app/_components/VoteButton";
import { getUserData, getIdeas } from "@/app/_components/actionsServer";

const SendFeedback = async () => {
  const { userData } = await getUserData();
  const { data: ideas } = await getIdeas();

  return (
    <div className="md:w-full flex flex-col gap-6 max-w-screen-xl mx-4 md:mx-auto md:p-10 xl:px-0 md:pt-20">
      <h2 className="text-2xl font-bold">Got an idea? Problem? Question?</h2>

      <div className="flex flex-col md:flex-row gap-4 md:gap-16">
        <IdeasForm userData={userData} />
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-lg">Future ideas are shown here</h2>
            <p className="text-sm">Vote if you find them interesting</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
            {ideas &&
              ideas.map((el, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 rounded-lg p-4 flex justify-between gap-2 items-center"
                >
                  <div className="h-full">
                    <h2 className="font-semibold text-cyan-500 text-lg">
                      {el.title}
                    </h2>
                    <p>{el.description}</p>
                  </div>
                  {userData && userData.id && (
                    <VoteButton votes={el.votes} id={el.id} />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendFeedback;
