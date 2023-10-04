import { searchParams } from "../../src/utils/searchParams"

  describe("searchParams", () => {
    it("should return an empty string if no search params are provided", () => {
      expect(searchParams({})).toBe("")
    })

    it("should return a query string with a single key-value pair", () => {
      expect(searchParams({ a: "b" })).toBe("?a=b")
    })

    it("should return a query string with multiple key-value pairs", () => {
      expect(searchParams({ a: "b", c: "d" })).toBe("?a=b&c=d")
    })

    it("should ignore keys with undefined values", () => {
      expect(searchParams({ a: undefined })).toBe("")
    })

    it("should convert number values to strings", () => {
      expect(searchParams({ a: 0 })).toBe("?a=0")
    })
  })