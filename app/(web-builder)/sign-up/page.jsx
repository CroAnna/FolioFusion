import SignUpForm from "@/app/_components/SignUpForm";

const SignUpPage = async () => {
  return (
    <div
      className="flex-col gap-8 items-center mx-4 flex justify-center"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <h2 className="font-bold text-3xl flex items-center">
        Sign up for&nbsp; <span className="text-emerald-400 ">free</span>.
      </h2>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
