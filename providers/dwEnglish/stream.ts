import { ProviderContext, Stream } from "../types";

const STREAM_URL =
  "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8";

export async function getStream({ link, signal, providerContext, isDownload }: {
  link: string; type?: string; signal?: AbortSignal; providerContext: ProviderContext; isDownload?: boolean;
}): Promise<Stream[]> {
  const url = link && link.endsWith(".m3u8") ? link : STREAM_URL;
  return [{ server: "DW English HLS", link: url, type: "m3u8" }];
}
