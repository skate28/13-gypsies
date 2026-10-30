/** Search indexing stays off until the owner approves the site. */
export function allowIndexing(): boolean {
  return process.env.ALLOW_INDEXING === "true";
}
