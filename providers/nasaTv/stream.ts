import { ProviderContext, Stream } from "../types";

const STREAM_URL =
  "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8";

export async function getStream({ link, signal, providerContext, isDownload }: {
  link: string; type?: string; signal?: AbortSignal; providerContext: ProviderContext; isDownload?: boolean;
}): Promise<Stream[]> {
  const url = link && link.endsWith(".m3u8") ? link : STREAM_URL;
  return [{ server: "NASA TV HLS", link: url, type: "m3u8" }];
}
