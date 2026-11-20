import { Info, ProviderContext } from "../types";

const STREAM_URL =
  "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8";

export async function getMeta({ link, providerContext }: {
  link: string; providerContext: ProviderContext;
}): Promise<Info> {
  return {
    title: "DW English",
    synopsis: "DW English live TV — news and documentaries from Deutsche Welle, live 24 hours.",
    image: "",
    imdbId: "",
    type: "movie",
    tags: ["Live", "News"],
    linkList: [
      {
        title: "Live TV",
        directLinks: [{ title: "Watch Live", link: STREAM_URL, type: "movie" }],
      },
    ],
  };
}
