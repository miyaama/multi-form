"use client";

import { FirstStep } from "./FirstStep";
import { useFormState } from "./FormContext";
import { SecondStep } from "./SecondStep";
import { ThirdStep } from "./ThirdStep";

export const FormStep = () => {
  const { step } = useFormState();

  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
    case 3:
      return <ThirdStep />;
    default:
      return null;
  }
};
