import { create } from "zustand";

export const useStore = create((set) => ({
  mode: "light",
  setMode: (colorScheme) =>
    set({ mode: colorScheme === "light" ? "dark" : "light" }),
}));
