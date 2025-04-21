import { InputHTMLAttributes } from "react";

const Input = ({
  label,
  id,
  ...prop
}: InputHTMLAttributes<HTMLInputElement> & { label: string; id: string }) => {
  return (
    <div className="w-full space-y-2">
      <label className="block" htmlFor={id}>{label}</label>
      <input className="border dark:bg-neutral-900 dark:border-neutral-800 rounded-md px-5 py-3 w-full" id={id} type="text" {...prop} />
    </div>
  );
};

export default Input;
