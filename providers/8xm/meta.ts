import { Info, ProviderContext } from "../types";

const STREAM_URL = "http://116.90.120.149:8000/play/a0tw/index.m3u8";

export async function getMeta({ link, providerContext }: {
  link: string; providerContext: ProviderContext;
}): Promise<Info> {
  return {
    title: "8XM",
    synopsis: "8XM live TV — Pakistani music channel, live 24 hours.",
    image: "",
    imdbId: "",
    type: "movie",
    tags: ["Live", "Music"],
    linkList: [
      {
        title: "Live TV",
        directLinks: [{ title: "Watch Live", link: STREAM_URL, type: "movie" }],
      },
    ],
  };
}
