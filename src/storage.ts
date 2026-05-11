import { createMMKV } from "react-native-mmkv";

const storage = createMMKV();

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
