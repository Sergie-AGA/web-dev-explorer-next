export function generateImageUrl(imageUrl: string) {
  return imageUrl?.startsWith("http") ? imageUrl : `/images/${imageUrl}`;
}
