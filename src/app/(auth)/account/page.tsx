"use client";

import { useAuth } from "@/features/auth/hooks/useAuth";
import { useAtom } from "jotai";
import { userDataAtom } from "@/features/auth/store/useAuthStore";
import Link from "next/link";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import { Button } from "@/components/ShadcnUi/Button";

export default function Login() {
  const { logout } = useAuth();
  const [userData, setUserData] = useAtom(userDataAtom);

  const handleLogout = async () => {
    await logout();
    setUserData(null);
  };

  return (
    <div className="max-width-container flex items-center justify-center h-[calc(100vh-40px)] pl-4 pr-4">
      <section className="flex gap-4 w-full justify-center max-w-screen-lg flex-col items-center">
        <GlobalHeader
          className="m-0 mt-4 p-0"
          title="Web Dev Explorer Account"
        ></GlobalHeader>
        {userData ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg">Logged in as: {userData.username}</p>
            <Button variant="secondary" onClick={handleLogout}>
              Logout
            </Button>
            <Button asChild variant="link">
              <Link href="/">Back to the homepage</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <p>Log in to use exclusive features</p>
            <Button asChild variant="secondary">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild variant="link">
              <Link href="/">Back to the homepage</Link>
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
