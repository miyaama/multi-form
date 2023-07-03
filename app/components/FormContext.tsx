"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  getLocalStorage,
  setLocalStorage,
  STORAGE_KEYS,
} from "../utils/storage";
import { Loader } from "./Loader";

export interface IFormData {
  firstName: string;
  email: string;
  film: string;
  taste: string;
}

interface IFormContext {
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
}

const FormContext = createContext<IFormContext>({
  onHandleBack: () => {},
  onHandleNext: () => {},
  step: 1,
  formData: {
    firstName: "",
    email: "",
    film: "",
    taste: "",
  },
  setFormData: () => {},
});

const restoreData = (): IFormData => {
  // getLocalStorage returns empty string if localStorage didn't find the value
  // without values we get default state
  const firstName = getLocalStorage(STORAGE_KEYS.FIRST_NAME);
  const email = getLocalStorage(STORAGE_KEYS.EMAIL);
  const film = getLocalStorage(STORAGE_KEYS.FILM);
  const taste = getLocalStorage(STORAGE_KEYS.TASTE);

  return { firstName, email, film, taste };
};

const setStepToLocalStorage = (step: number) => {
  setLocalStorage(STORAGE_KEYS.STEP, step);
};

interface IProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: IProps) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  // restoring data from localStorage
  const [formData, setFormData] = useState<IFormData>(restoreData());

  const onHandleNext = () => {
    setStep((prevValue) => {
      const nextStep = prevValue + 1;
      setStepToLocalStorage(nextStep);
      return nextStep;
    });
  };

  const onHandleBack = () => {
    setStep((prevValue) => {
      const prevStep = prevValue - 1;
      setStepToLocalStorage(prevStep);
      return prevStep;
    });
  };

  useEffect(() => {
    const restoredStep = +getLocalStorage(STORAGE_KEYS.STEP) || 1;
    setStep(restoredStep);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FormContext.Provider
      value={{ onHandleBack, onHandleNext, step, formData, setFormData }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormState = () => {
  return useContext(FormContext);
};
