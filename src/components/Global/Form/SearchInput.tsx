import { IconSearch, IconX } from "@tabler/icons-react";

interface ISearchProps {
  searchValue: string;
  handleSearch: (text: string) => void;
}

export default function SearchInput({
  handleSearch,
  searchValue,
}: ISearchProps) {
  function handleClearSearch() {
    handleSearch("");
  }

  return (
    <div className="relative w-[100%] max-w-[300px]">
      <input
        type="text"
        placeholder="Search by title or description..."
        className="p-2 pr-6 rounded w-[100%]"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchValue ? (
        <IconX
          onClick={handleClearSearch}
          className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
        />
      ) : (
        <IconSearch className="absolute top-[50%] translate-y-[-50%] right-2" />
      )}
    </div>
  );
}
