import { IconPlus } from "@tabler/icons-react";

interface INewItemButtonProps {
  onClick: () => void;
}
export default function newItemButton({ onClick }: INewItemButtonProps) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 flex gap-4 items-center  rounded overflow-hidden justify-center cursor-pointer w-[100%] min-h-[56px] border-dashed border-neutral-900 border-2 hover:border-solid hover:bg-neutral-900 group active:scale-[0.98] duration-300"
    >
      <div className="flex gap-4 items-center relative">
        <IconPlus className="text-neutral-900 group-hover:text-white absolute group-hover:translate-x-[-14px] duration-300" />
        <span className="text-sm opacity-0 group-hover:opacity-100 duration-300 absolute whitespace-nowrap group-hover:translate-x-[14px]">
          New Item
        </span>
      </div>
    </button>
  );
}
