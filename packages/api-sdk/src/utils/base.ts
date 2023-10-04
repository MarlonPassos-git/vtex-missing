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

  protected searchParams(search: Record<string, string | undefined | number | boolean> = {}): string { 
    // {} => ""
    // { a: "b" } => "?a=b"
    // { a: "b", c: "d" } => "?a=b&c=d"
    // { a: undefined } => ""
    // { a: 0, b: undefined } => "?a=1"
    //

    // create a function to remove key than value is undefined
    const normalize = Object.entries(search).reduce((acc, [key, value]) => { 
      if (value !== undefined) {
        acc[key] = String(value)
      }
      return acc
    }, {} as Record<string, string>)
    

    const searchParams = new URLSearchParams(normalize)

    return searchParams.toString() ? `?${searchParams.toString()}` : ""
  }
}