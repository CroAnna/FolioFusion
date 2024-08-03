import Link from "next/link";
import { signup } from "./actions";

const SignUpPage = async () => {
  return (
    <div
      className="flex-col gap-8 items-center mx-4 flex justify-center"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <h2 className="font-bold text-3xl flex items-center">
        Sign up for&nbsp; <span className="text-emerald-400 ">free</span>.
      </h2>
      <form className="flex flex-col gap-8 mx-4 md:mx-0 p-8 w-full bg-neutral-900 rounded-xl mb-10 max-w-96">
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
          <button className="btn btn-primary" formAction={signup}>
            Sign up
          </button>
          <div className="flex text-center flex-col">
            <p className="text-stone-400">Already have an account?</p>
            <div>
              <Link
                href="/login"
                className="text-emerald-400 underline text-lg"
              >
                Log in
              </Link>
              <p>and start building your portfolio</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
