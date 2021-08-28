export function startsWith(string, target, position) {
	const {length} = string;
	position = position === null ? 0 : position;
	if (position < 0) {
		position = 0;
	} else if (position > length) {
		position = length;
	}

	target = `${target}`;
	return string.slice(position, position + target.length) === target;
}

export function endsWith(string, target, position) {
	const {length} = string;
	position = position === undefined ? length : Number(position);
	if (position < 0) {
		position = 0;
	} else if (position > length) {
		position = length;
	}

	const end = position;
	position -= target.length;
	return position >= 0 && string.slice(position, end) === target;
}

export const indexOf = (st, search, fromIndex = 0, ignoreCase = false) => {
	if (!st) return -1;
	if (ignoreCase) {
		return st.toLowerCase().indexOf(search.toLowerCase(), fromIndex);
	}

	return st.indexOf(search, fromIndex);
};

export const isEmpty = (s) => s === undefined || s === null || s === '';

export const isImageUrl = (url) => {
	if (isUrl(url)) {
		return url.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) !== null;
	}

	return false;
};

export const isMail = (value) => {
	const expression =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[(?:\d{1,3}\.){3}\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/;
	return expression.test(String(value).toLowerCase());
};

export const isPhone = (value) => {
	const expression = /^(\(?\+\d+\)?[\s.-]?)?\(?\d+\)?(?:[\s.-]?\d+){2}$/;
	return expression.test(String(value).toLowerCase());
};

export const isUrl = (value) => {
	const expression =
		/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%@\-/]))?$/;
	return expression.test(String(value).toLowerCase());
};

export const random = (length = 10) => {
	let text = '';
	const possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}

	return text;
};

export function repeat(string, n) {
	let result = '';
	if (!string || n < 1 || n > Number.MAX_SAFE_INTEGER) {
		return result;
	}

	// Leverage the exponentiation by squaring algorithm for a faster repeat.
	// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	do {
		if (n % 2) {
			result += string;
		}

		n = Math.floor(n / 2);
		if (n) {
			string += string;
		}
	} while (n);

	return result;
}

export function replace(...args) {
	const string = `${args[0]}`;
	return args.length < 3 ? string : string.replace(args[1], args[2]);
}

export const sliceText = (text, count) =>
	text.slice(0, count) + (text.length > count ? '...' : '');
