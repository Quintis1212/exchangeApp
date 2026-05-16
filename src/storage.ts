import { createMMKV } from "react-native-mmkv";
import { StateStorage } from "zustand/middleware";

export const storage = createMMKV();

export const getJSON = <T>(key: string): T | null => {
  const raw = storage.getString(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    console.warn(`Failed to parse JSON from storage for key "${key} : ${raw}"`);
    return null;
  }
};

export const setJSON = (key: string, value: unknown): void => {
  storage.set(key, JSON.stringify(value));
};

export const removeKey = (key: string): void => {
  storage.remove(key);
};

export const mmkvStorage: StateStorage = {
  getItem: (name) => storage.getString(name) ?? null,
  setItem: (name, value) => {
    storage.set(name, value);
  },
  removeItem: (name) => {
    storage.remove(name);
  },
};
