import { useAtom } from "jotai";
import { IAuthRepository, IAccountData } from "../services/IAuthRepository";
import { indexedDBRepository } from "../services/repositories/indexedDb/indexedDbUserRepository";
import { loginOptionAtom } from "../store/useAuthStore";

// Change default option when supabase is available
const defaultProvider = indexedDBRepository;

export function useAuth(): IAuthRepository {
  const [loginOption] = useAtom(loginOptionAtom);

  const authProviders: Record<string, IAuthRepository> = {
    guest: indexedDBRepository,
    webdevexplorer: indexedDBRepository,
  };

  const selectedProvider = authProviders[loginOption] ?? defaultProvider;

  const auth: IAuthRepository = {
    register: (data: IAccountData) => selectedProvider.register(data),
    login: (data: IAccountData) => selectedProvider.login(data),
    ...(selectedProvider.listUsers && {
      listUsers: () => selectedProvider.listUsers!(),
    }),
  };

  return auth;
}
