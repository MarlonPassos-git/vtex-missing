/**
 * @example
 * {} => ""
 * { a: "b" } => "?a=b"
 * { a: "b", c: "d" } => "?a=b&c=d"
 * { a: undefined } => ""
 * { a: 0, b: undefined } => "?a=1"
 */
export function searchParams(search: Record<string, string | undefined | number | boolean> = {}): string {

  const normalize = Object.entries(search).reduce((acc, [key, value]) => {
    if (value !== undefined) {
      acc[key] = String(value);
    }
    return acc;
  }, {} as Record<string, string>);


  const searchParams = new URLSearchParams(normalize);

  return searchParams.toString() ? `?${searchParams.toString()}` : "";
}
