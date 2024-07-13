import { login, signup } from "./actions";

const LoginPage = async () => {
  return (
    <div className="flex flex-col gap-4 w-full items-center mt-10">
      <h2> Log in (or sign up) to continue.</h2>
      <form className="flex flex-col gap-8 w-96 bg-neutral-900 p-8 rounded-xl">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email:</label>
            <input
              className="input input-bordered w-full "
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
        <div className="flex flex-col gap-2">
          <button className="btn btn-primary" formAction={login}>
            Log in
          </button>
          <button className="btn btn-secondary" formAction={signup}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
