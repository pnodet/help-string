/**
 * Checks if `string` starts with the given target string.
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 * @example
 *
 * helpString.startsWith('abc', 'a')
 * // => true
 *
 * helpString.startsWith('abc', 'b')
 * // => false
 *
 * helpString.startsWith('abc', 'b', 1)
 * // => true
 */
export function startsWith(
	string?: string,
	target?: string,
	position?: number,
): boolean;

/**
 * Checks if `string` ends with the given target string.
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @example
 *
 * helpString.endsWith('abc', 'c')
 * // => true
 *
 * helpString.endsWith('abc', 'b')
 * // => false
 *
 * helpString.endsWith('abc', 'b', 2)
 * // => true
 */
export function endsWith(
	string?: string,
	target?: string,
	position?: number,
): boolean;

/**
 * Find the index of a given string inside another.
 * @param {string} st The string to search
 * @param {string} search The string to look for
 * @param {Integer default 0} fromIndex Starting index in st
 * @param {Boolean defaule false} ignoreCase is the search case sensitive or not
 * @returns the index of search if found. -1 if not found.
 */
export function indexOf(
	st: string,
	search: string,
	fromIndex?: number,
	ignoreCase?: boolean,
): number;

/**
 * Check if given string is undefined, null, or zero length.
 * @param {string} s
 */
export function isEmpty(s: string): boolean;

/**
 * Checks if value is a valid image url.
 * @param {string} url
 * @return {boolean}
 */
export function isImageUrl(url: string): boolean;

/**
 * Checks if value is a valid mail.
 * @param {string} value
 * @return {boolean}
 */
export function isMail(value: string): boolean;

/**
 * Checks if value is a valid phone number.
 * @param {string} value
 * @return {boolean}
 */
export function isPhone(value: string): boolean;

/**
 * Checks if value is a valid url.
 * @param {string} value
 * @return {boolean}
 */
export function isUrl(value: string): boolean;

/**
 * Generates a random string.
 * @param {Number} [length]
 * @returns {string}
 */
export function random(length?: number): string;

/**
 * Repeats the given string `n` times.
 * @param {string} [string=''] The string to repeat.
 * @param {number} [n=1] The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 * @example
 *
 * helpString.repeat('*', 3)
 * // => '***'
 *
 * helpString.repeat('abc', 2)
 * // => 'abcabc'
 *
 * helpString.repeat('abc', 0)
 * // => ''
 */
export function repeat(string?: string, n?: number): string;
/**
 * Replaces matches for `pattern` in `string` with `replacement`.
 * **Note:** This method is based on
 * [`string#replace`](https://mdn.io/string/replace).
 * @param {string} [string=''] The string to modify.
 * @param {RegExp|string} pattern The pattern to replace.
 * @param {Function|string} replacement The match replacement.
 * @returns {string} Returns the modified string.
 * @example
 *
 * helpString.replace('Hi Fred', 'Fred', 'Barney')
 * // => 'Hi Barney'
 */
export function replace(...args: any[]): string;

/**
 * Split text and keep `n` many characters.
 * @param {string} text the text to slice
 * @param {Number} count how many characters to keep
 */
export function sliceText(text: string, count: number): string;
