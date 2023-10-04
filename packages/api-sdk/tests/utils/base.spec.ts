import { SdkBase, SdkBaseOptions } from "../../src/utils/base"
// import xfetch from "xfetch-js"

class SdkBaseMock extends SdkBase {
  constructor(options?: SdkBaseOptions) {
    super(options)
  }

  searchParamsProxy(search: Record<string, string | undefined | number>): string {
    return this.searchParams(search)
  }
}

describe("SdkBase", () => {
  describe("searchParams", () => {
    it("should return an empty string if no search params are provided", () => {
      const sdk = new SdkBaseMock()
      expect(sdk.searchParamsProxy({})).toBe("")
    })

    it("should return a query string with a single key-value pair", () => {
      const sdk = new SdkBaseMock()
      expect(sdk.searchParamsProxy({ a: "b" })).toBe("?a=b")
    })

    it("should return a query string with multiple key-value pairs", () => {
      const sdk = new SdkBaseMock()
      expect(sdk.searchParamsProxy({ a: "b", c: "d" })).toBe("?a=b&c=d")
    })

    it("should ignore keys with undefined values", () => {
      const sdk = new SdkBaseMock()
      expect(sdk.searchParamsProxy({ a: undefined })).toBe("")
    })

    it("should convert number values to strings", () => {
      const sdk = new SdkBaseMock()
      expect(sdk.searchParamsProxy({ a: 0 })).toBe("?a=0")
    })
  })
})