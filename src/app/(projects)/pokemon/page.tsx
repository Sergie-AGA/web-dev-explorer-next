"use client";
import MainWrapper from "@/features/pokemon/components/MainWrapper";
import Onboarding from "@/features/pokemon/components/Onboarding/Onboarding";

export default function Page() {
  const onboarded = false;

  if (onboarded) {
    return <MainWrapper />;
  } else {
    return <Onboarding />;
  }
}
