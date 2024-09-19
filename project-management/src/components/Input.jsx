import { forwardRef } from "react";

const Input = forwardRef(function Input({ isTextArea = false, label, id, ...props }, ref) {
  const inputClasses = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      {label && (
        <label htmlFor={id} className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
      )}
      {isTextArea && <textarea ref={ref} id={id} className={inputClasses} {...props}></textarea>}
      {!isTextArea && <input ref={ref} id={id} className={inputClasses} {...props} />}
    </p>
  );
});
// const CustomInput = function () {};
export default Input;
