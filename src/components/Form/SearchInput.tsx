import { IconSearch, IconX } from "@tabler/icons-react";

interface ISearchProps {
  searchValue: string;
  handleSearch: (text: string) => void;
  placeholder?: string;
}

export default function SearchInput({
  handleSearch,
  searchValue,
  placeholder = "Search...",
}: ISearchProps) {
  return (
    <div className="relative w-[100%] max-w-[300px]">
      <input
        type="text"
        placeholder={placeholder}
        className="p-2 pr-8 rounded w-[100%] bg-input"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchValue ? (
        <IconX
          onClick={() => handleSearch("")}
          size="16"
          className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
        />
      ) : (
        <IconSearch className="absolute top-[50%] translate-y-[-50%] right-2" />
      )}
    </div>
  );
}
