import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  IAuthRepository,
  IAccountData,
  IUserData,
} from "../services/IAuthRepository";
import { indexedDBRepository } from "../services/repositories/indexedDb/indexedDbUserRepository";
import { loginOptionAtom, userDataAtom } from "../store/useAuthStore";

// Change default option when supabase is available
const defaultProvider = indexedDBRepository;

export function useAuth(): IAuthRepository {
  const [loginOption] = useAtom(loginOptionAtom);
  const [, setUserData] = useAtom(userDataAtom);

  const authProviders: Record<string, IAuthRepository> = {
    guest: indexedDBRepository,
    webdevexplorer: indexedDBRepository,
  };

  const selectedProvider = authProviders[loginOption] ?? defaultProvider;

  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  };

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
    return null;
  };

  const auth: IAuthRepository = {
    register: (data: IAccountData) => selectedProvider.register(data),
    login: async (data: IAccountData) => {
      const user = await selectedProvider.login(data);
      setUserData(user);
      setCookie("userData", JSON.stringify(user), 7);
      return user;
    },
    logout: async () => {
      await selectedProvider.logout();
      setUserData(null);
      document.cookie =
        "userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    ...(selectedProvider.listUsers && {
      listUsers: () => selectedProvider.listUsers!(),
    }),
  };

  useEffect(() => {
    const userData = getCookie("userData");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      setUserData(parsedUserData);
    }
  }, [setUserData]);

  return auth;
}
