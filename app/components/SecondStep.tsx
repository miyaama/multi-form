"use client";

import { setLocalStorage, STORAGE_KEYS } from "../utils/storage";
import { useFormState } from "./FormContext";
import clsx from "clsx";
import { useState, ChangeEvent, FormEvent } from "react";
export const SecondStep = () => {
  const { onHandleNext, onHandleBack, setFormData, formData, step } =
    useFormState();
  const [film, setFilm] = useState(formData.film);
  const [taste, setTaste] = useState(formData.taste);
  const [disabled, setDisabled] = useState(false);

  const handleFilmChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilm(e.target.value);
  };

  const handleTasteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTaste(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDisabled(true);
    setFormData((prevFormData) => ({ ...prevFormData, film, taste }));
    setLocalStorage(STORAGE_KEYS.FILM, film);
    setLocalStorage(STORAGE_KEYS.TASTE, taste);

    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    

    onHandleNext();
  };

  return (
    <form className="flex flex-col h-full" onSubmit={handleSubmit}>
      <div className="flex flex-col mb-3">
        <label htmlFor="film" className="font-extralight mb-1">
          What is your favorite TV series?
        </label>
        <input
          id="film"
          type="text"
          placeholder="TV series"
          value={film}
          onChange={handleFilmChange}
          className="h-11 px-4 border rounded-md text-black"
          required
        />
      </div>
      <div className="flex flex-col mb-3">
        <label htmlFor="taste" className="font-extralight mb-1">
          Choose the taste of popcorn
        </label>
        <select
          className="h-11 px-4 border rounded-md text-black"
          name="taste"
          id="taste"
          value={taste}
          onChange={handleTasteChange}
          required
        >
          <option value="salty">Salty</option>
          <option value="sweet">Sweet</option>
          <option value="cheese">Cheese</option>
          <option value="caramel">Caramel</option>
        </select>
      </div>
      <div className="flex justify-between space-x-4 mt-auto">
        <button
          onClick={onHandleBack}
          className={clsx(
            "h-11 w-1/2",
            "px-6",
            "font-light",
            "bg-black text-white",
            "border rounded-md border-neutral-800 hover:border-neutral-500"
          )}
        >
          Back
        </button>
        <button
          className={clsx(
            "h-11 w-1/2",
            "px-6",
            "bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-600",
            "text-white font-light",
            "rounded-md",
            "disabled:text-gray-300 disabled:cursor-not-allowed"
          )}
          disabled={disabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
