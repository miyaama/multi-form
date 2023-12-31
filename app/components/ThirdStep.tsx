"use client";

import { useEffect } from "react";
import { clearStorage } from "../utils/storage";

export const ThirdStep = () => {
  useEffect(() => {
    clearStorage();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="font-extralight">Your answer is recorded!</h2>
    </div>
  );
};
