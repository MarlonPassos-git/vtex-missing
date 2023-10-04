import xfetch from "xfetch-js"

export type SdkBaseOptions = {
  fetcher?: typeof xfetch;
  baseUrl?: string;
  defaultHeaders?: Record<string, string>;
}

const initialOptions: Required<SdkBaseOptions> = {
  fetcher: xfetch,
  baseUrl: "",
  defaultHeaders: {}
}

export abstract class SdkBase {
  protected fetch: typeof xfetch
  protected baseUrl: string
  protected defaultHeaders: Record<string, string> = {}

  constructor(options?: SdkBaseOptions ) {
    const { fetcher, baseUrl, defaultHeaders } = { ...initialOptions, ...options }
    this.fetch = fetcher
    this.baseUrl = baseUrl
    this.defaultHeaders = defaultHeaders
  }
}