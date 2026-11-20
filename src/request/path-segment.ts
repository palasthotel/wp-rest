/**
 * A value for one segment of the request path - post type, taxonomy, id.
 * Encoded, so that it stays one segment of /wp-json/wp/v2/…
 */
export const pathSegment = (value: string | number): string => {
    const segment = `${value}`;
    if (segment === "" || /^(\.|%2e){1,2}$/i.test(segment)) {
        throw new TypeError(`wp-rest: "${segment}" is not a valid path segment`);
    }
    return encodeURIComponent(segment);
}
