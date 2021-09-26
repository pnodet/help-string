import test from 'ava';
import * as helpString from './index.js';

test('startsWith()', t => {
	t.true(helpString.startsWith('abc', 'a'));
	t.false(helpString.startsWith('abc', 'b'));
	t.true(helpString.startsWith('abc', 'b', 1));
});
