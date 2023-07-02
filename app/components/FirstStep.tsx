"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useFormState } from "./FormContext";

export const FirstStep = () => {
  const { onHandleNext, setFormData, formData } = useFormState();
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
    localStorage.setItem("FIRST_NAME", firstName);
    localStorage.setItem("SECOND_NAME", email);
    onHandleNext();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="firstName" className="font-extralight">
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
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-extralight">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
          className="h-11 px-4 border rounded-md text-black"
          // required
        />
      </div>
      <div className="flex justify-end space-x-6">
        <button className="h-11 px-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-600 rounded-md text-white w-[150px]">
          Next
        </button>
      </div>
    </form>
  );
};
