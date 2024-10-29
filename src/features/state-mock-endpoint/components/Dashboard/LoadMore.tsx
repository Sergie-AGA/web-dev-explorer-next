interface ILoadMoreProps {
  onClick: () => void;
  loadingMore: boolean;
}
export default function loadMore({ onClick, loadingMore }: ILoadMoreProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:bg-neutral-100/80 bg-neutral-900 hover:bg-neutral-800 h-9 px-4 py-2 bg-neutral-900"
    >
      {loadingMore ? "Loading..." : "Load More"}
    </button>
  );
}
