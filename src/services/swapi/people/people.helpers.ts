/**
 * Extracts the person ID from a SWAPI URL.
 * @param url The SWAPI URL string that contains the person ID.
 * @returns The extracted ID as a string, or null if the ID cannot be found.
 */
export const getPersonIdFromUrl = (url: string): string | null => {
  const match = url.match(/\/people\/(\d+)\//)
  return match ? match[1] : null
}
