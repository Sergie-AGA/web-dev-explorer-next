import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userDataAtom } from "@/features/auth/store/useAuthStore";

export function useNavigationGuards() {
  const router = useRouter();
  const [userData] = useAtom(userDataAtom);

  const checkRequireLogin = () => {
    if (!userData) {
      router.push("/login");
    }
  };

  const checkRequireNoLogin = () => {
    if (userData) {
      router.push("/account");
    }
  };

  return {
    checkRequireLogin,
    checkRequireNoLogin,
  };
}
