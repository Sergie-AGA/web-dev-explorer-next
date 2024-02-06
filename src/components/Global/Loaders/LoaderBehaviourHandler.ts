// A loader can be independent (a spinner that renders by itself) or integrated (a card that appears as many times as its parent component needs)

export function loaderBehaviourHandler(type: string): string | undefined {
  const behaviours: Record<string, string> = {
    SimpleCardLoader: "integrated",
  };

  return behaviours[type];
}
