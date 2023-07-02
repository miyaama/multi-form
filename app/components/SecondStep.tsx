"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useFormState } from "./FormContext";

export const SecondStep = () => {
  const { onHandleNext, onHandleBack, setFormData, formData } = useFormState();
  const [film, setFilm] = useState(formData.film);
  const [taste, setTaste] = useState(formData.taste);

  const handleFilmChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilm(e.target.value);
  };

  const handleTasteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTaste(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData((prevFormData) => ({ ...prevFormData, film, taste }));
    // localStorage.setItem("")
    onHandleNext();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1">
        <label htmlFor="film" className="font-extralight">
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
      <div className="flex flex-col gap-1">
        <label htmlFor="taste" className="font-extralight">
          Choose the taste of popcorn
        </label>
        <select
          className="h-11 px-4 border rounded-md text-black"
          name="taste"
          id="taste"
          defaultValue=""
          value={taste}
          onChange={handleTasteChange}
          required
        >
          <option value="" disabled className="text-gray-400">
            Please choose an option
          </option>
          <option value="salty">Salty</option>
          <option value="sweet">Sweet</option>
          <option value="cheese">Cheese</option>
          <option value="caramel">Caramel</option>
        </select>
      </div>
      <div className="flex justify-between space-x-4">
        <button
          onClick={onHandleBack}
          className="h-11 px-6 bg-black rounded-md text-white  border border-neutral-800 w-1/2 hover:border-neutral-500 font-light"
        >
          Back
        </button>
        <button className="h-11 px-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-600 rounded-md text-white w-1/2 font-light">
          Submit
        </button>
      </div>
    </form>
  );
};
