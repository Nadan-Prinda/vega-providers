import { Post, ProviderContext } from "../types";

const CHANNEL: Post = {
  title: "8XM",
  link: "8xm-live",
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
  if ("8xm".includes(q) || "xm".includes(q)) return [CHANNEL];
  return [];
}
