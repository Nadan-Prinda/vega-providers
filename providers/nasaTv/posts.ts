import { Post, ProviderContext } from "../types";

const CHANNEL: Post = {
  title: "NASA TV",
  link: "nasa-tv-live",
  image: "",
};

export async function getPosts({ filter, page = 1 }: {
  filter: string; page: number; signal?: AbortSignal; providerContext: ProviderContext;
}): Promise<Post[]> {
  if (page > 1) return [];
  return [CHANNEL];
}

export async function getSearchPosts({ searchQuery, page = 1 }: {
  searchQuery: string; page: number; signal?: AbortSignal; providerContext: ProviderContext;
}): Promise<Post[]> {
  if (page > 1) return [];
  const q = searchQuery.trim().toLowerCase();
  if (!q) return [CHANNEL];
  if ("nasa tv".includes(q) || "nasa".includes(q)) return [CHANNEL];
  return [];
}
