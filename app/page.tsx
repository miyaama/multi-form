import clsx from "clsx";

import { FormProvider } from "./components/FormContext";
import { FormStep } from "./components/FormStep";
import { ProgressBar } from "./components/ProgressBar";

export default function Home() {
  return (
    <main
      className={clsx(
        "min-h-screen",
        "bg-gray",
        "flex flex-col items-center justify-center"
      )}
    >
      <FormProvider>
        <ProgressBar />
        <div
          className={clsx(
            "w-[365px] h-96",
            "bg-black",
            "p-6",
            "flex flex-col",
            "rounded-md border border-neutral-800"
          )}
        >
          <h1
            className={clsx(
              "text-2xl font-semi-bold text-center text-white",
              "mb-4"
            )}
          >
            Multi-step form
          </h1>
          <FormStep />
        </div>
      </FormProvider>
    </main>
  );
}
