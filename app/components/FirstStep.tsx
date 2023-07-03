"use client";

import clsx from "clsx";
import { useState, ChangeEvent, FormEvent } from "react";

import { setLocalStorage, STORAGE_KEYS } from "../utils/storage";
import { useFormState } from "./FormContext";

export const FirstStep = () => {
  const { onHandleNext, setFormData, formData, step } = useFormState();
  const [firstName, setFirstName] = useState(formData.firstName);
  const [email, setEmail] = useState(formData.email);

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData((prevFormData) => ({ ...prevFormData, firstName, email }));
    setLocalStorage(STORAGE_KEYS.FIRST_NAME, firstName);
    setLocalStorage(STORAGE_KEYS.EMAIL, email);
    
    onHandleNext();
  };

  return (
    <form className="flex flex-col h-full" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-3">
        <label htmlFor="firstName" className="font-extralight mb-1">
          Name
        </label>
        <input
          id="firstName"
          type="text"
          placeholder="name"
          value={firstName}
          onChange={handleFirstNameChange}
          className="h-11 px-4 border rounded-md text-black "
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-extralight mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          className="h-11 px-4 border rounded-md text-black"
          required
        />
      </div>
      <div className="flex justify-end mt-auto">
        <button
          className={clsx(
            "h-11 w-[150px]",
            "font-light",
            "px-6",
            "rounded-md",
            "text-white",
            "bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-600"
          )}
        >
          Next
        </button>
      </div>
    </form>
  );
};
