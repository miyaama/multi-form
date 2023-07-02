"use client";

import { useFormState } from "./FormContext";
import clsx from "clsx";

export const ProgressBar = () => {
  const { step } = useFormState();

  return (
    <div className="w-[365px] h-6 mb-6 ">
      <div
        className={clsx(
          "h-6",
          step === 1 &&
            "w-1/3 bg-gradient-to-r from-yellow-400 to-orange-400 transition-width duration-500 ease-in-out",
          step === 2 &&
            "w-2/3 bg-gradient-to-r from-yellow-400 to-orange-400 transition-width duration-500 ease-in-out",
          step === 3 &&
            "w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-600 transition-width duration-500 ease-in-out"
        )}
      ></div>
    </div>
  );
};
