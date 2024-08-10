import { useFormStatus } from "react-dom";

const SubmitButton = ({ text }) => {
  const { pending } = useFormStatus(); // this must be called in child component to work!

  return (
    <button
      className="btn btn-primary"
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Checking..." : text}
    </button>
  );
};

export default SubmitButton;
