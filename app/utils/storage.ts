"use client";

export enum STORAGE_KEYS {
  FIRST_NAME = "FIRST_NAME",
  EMAIL = "EMAIL",
  FILM = "FILM",
  TASTE = "TASTE",
}

export const getStorage = () => {
  return typeof window !== "undefined" && window?.localStorage
    ? window.localStorage
    : null;
};

export const getLocalStorage = (key: STORAGE_KEYS) => {
  // it's better to return null if value doesn't exist, but in this small app empty string will be default value in state
  const data = getStorage()?.getItem(key) || "";

  return data;
};

export const setLocalStorage = (key: STORAGE_KEYS, value: unknown) => {
  // if value is string JSON.parse returns value with quotes
  const data = typeof value === "string" ? value : JSON.stringify(value);

  return getStorage()?.setItem(key, data);
};
