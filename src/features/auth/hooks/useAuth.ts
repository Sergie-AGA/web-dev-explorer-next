// src/hooks/useAuth.ts
import { useAtom } from "jotai";
import { IAuthRepository, IAccountData } from "../services/IAuthRepository";
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

  const auth: IAuthRepository = {
    register: async (data: IAccountData) => selectedProvider.register(data),
    login: async (data: IAccountData) => {
      const userData = await selectedProvider.login(data);
      setUserData(userData);
      return userData;
    },
    logout: async () => {
      await selectedProvider.logout();
      setUserData(null);
    },
    ...(selectedProvider.listUsers && {
      listUsers: () => selectedProvider.listUsers!(),
    }),
  };

  return auth;
}
