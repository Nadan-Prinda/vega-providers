import { Info, ProviderContext } from "../types";

const STREAM_URL =
  "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8";

export async function getMeta({ link, providerContext }: {
  link: string; providerContext: ProviderContext;
}): Promise<Info> {
  return {
    title: "NASA TV",
    synopsis: "NASA TV live — space missions, launches and coverage from NASA, live 24 hours.",
    image: "",
    imdbId: "",
    type: "movie",
    tags: ["Live", "Space"],
    linkList: [
      {
        title: "Live TV",
        directLinks: [{ title: "Watch Live", link: STREAM_URL, type: "movie" }],
      },
    ],
  };
}
