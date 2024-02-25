import React from "react";

interface IIconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function iconButton({ children, onClick }: IIconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-[50%] flex items-center justify-center cursor-pointer bg-cyan-600 hover:bg-cyan-700 outline-none w-11 h-11"
    >
      {children}
    </button>
  );
}
