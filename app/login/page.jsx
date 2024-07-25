import { login, signup } from "./actions";

const LoginPage = async () => {
  return (
    <div className="flex flex-col gap-8 w-full items-center mt-10">
      <h2 className="font-bold text-3xl"> Log in to continue.</h2>
      <form className="flex flex-col gap-8 w-[112] bg-neutral-900 p-8 rounded-xl">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              className="input input-bordered w-full"
              id="email"
              name="email"
              type="email"
              placeholder="example@mail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              className="input input-bordered w-full "
              id="password"
              name="password"
              type="password"
              placeholder="6+ characters"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <button className="btn btn-primary" formAction={login}>
            Log in
          </button>
          <div className="flex text-center flex-col">
            <p className="text-stone-400">
              Don&apos;t have an account yet? 😮{" "}
            </p>
            <p className="text-lg">
              <a href="/#pricing" className="text-emerald-500 underline">
                Select a plan
              </a>{" "}
              and get an account in a few seconds
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
