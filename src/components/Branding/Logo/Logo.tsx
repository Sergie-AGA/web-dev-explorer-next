import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/Logo.svg"
      width={48}
      height={48}
      alt="Project Logo"
      className="w-12 h-12 mr-3"
    />
  );
}
