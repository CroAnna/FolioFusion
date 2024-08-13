import { getUserData } from "@/app/_components/actionsServer";
import DeleteAccountButton from "@/app/_components/DeleteAccountButton";
import { deleteUserAccount } from "@/app/_components/actionsServer";

const Data = async () => {
  const { userData } = await getUserData();

  return (
    <div className="md:w-full flex flex-col gap-4 max-w-screen-xl mx-4 md:mx-auto pt-20">
      <h2 className="text-2xl">My account</h2>

      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <td>Email:</td>
              <td>{userData.email}</td>
            </tr>
            <tr>
              <td>Domain URL:</td>
              <td>{userData.domain_url || "-"}</td>
            </tr>
            <tr>
              <td>Active:</td>
              <td
                className={`uppercase ${
                  userData.access_granted ? "text-green-500" : "text-red-500"
                }`}
              >
                {userData.access_granted ? "yes" : "no"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <DeleteAccountButton deleteUserAccount={deleteUserAccount} />
      </div>
    </div>
  );
};

export default Data;
