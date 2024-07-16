import { atom } from "jotai";

export const loginOptionAtom = atom<"guest" | "webdevexplorer">(
  "webdevexplorer"
);
