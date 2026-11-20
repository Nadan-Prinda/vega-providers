import { ProviderContext, Stream } from "../types";

const STREAM_URL = "http://116.90.120.149:8000/play/a0tw/index.m3u8";

export async function getStream({ link, signal, providerContext, isDownload }: {
  link: string; type?: string; signal?: AbortSignal; providerContext: ProviderContext; isDownload?: boolean;
}): Promise<Stream[]> {
  const url = link && link.endsWith(".m3u8") ? link : STREAM_URL;
  return [{ server: "8XM HLS", link: url, type: "m3u8" }];
}
