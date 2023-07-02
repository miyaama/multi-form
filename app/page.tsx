import { FormProvider } from "./components/FormContext";
import { FormStep } from "./components/FormStep";
import { ProgressBar } from "./components/ProgressBar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray">
      <FormProvider>
        <ProgressBar />
        <div className="w-[365px] h-96 bg-black p-6 rounded-md border border-neutral-800 ">
          <h1 className="text-2xl font-semi-bold text-center text-white mb-4">
            Multi-step form
          </h1>
          <FormStep />
        </div>
      </FormProvider>
    </main>
  );
}
