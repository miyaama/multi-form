"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface IFormData {
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

interface IProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: IProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    email: "",
    film: "",
    taste: "",
  });

  useEffect(() => {
    localStorage.getItem("");
  }, []);

  const onHandleNext = () => {
    setStep((prevValue) => prevValue + 1);
  };

  const onHandleBack = () => {
    setStep((prevValue) => prevValue - 1);
  };

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
