import { atom } from "jotai";
import { IUserData } from "../services/IAuthRepository";

export const loginOptionAtom = atom<"guest" | "webdevexplorer">(
  "webdevexplorer"
);

export const userDataAtom = atom<IUserData | null>(null);
