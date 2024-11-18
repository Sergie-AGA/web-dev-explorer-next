import { IconSearch, IconX } from "@tabler/icons-react";

interface ISearchProps {
  searchValue: string;
  handleSearch: (text: string) => void;
  placeholder?: string;
}

/**
 * SearchInput Component
 *
 * A flexible search input component with integrated clear and search icons.
 * It supports live search functionality with dynamic updates.
 *
 * ```tsx
 * import SearchInput from "@/components/SearchInput";
 *
 * const [searchValue, setSearchValue] = useState("");
 *
 * const handleSearch = (text: string) => {
 *   setSearchValue(text);
 *   // Add custom search logic here
 * };
 *
 * <SearchInput
 *   searchValue={searchValue}
 *   handleSearch={handleSearch}
 *   placeholder="Search items..."
 * />
 * ```
 */
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
        data-testid="search-input"
      />
      {searchValue ? (
        <IconX
          onClick={() => handleSearch("")}
          size="16"
          className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer"
          data-testid="clear-icon"
        />
      ) : (
        <IconSearch
          className="absolute top-[50%] translate-y-[-50%] right-2"
          data-testid="search-icon"
        />
      )}
    </div>
  );
}
