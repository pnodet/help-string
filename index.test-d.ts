import {expectType} from 'tsd';
import * as helpString from './index.js';

expectType<boolean>(helpString.isEmpty(''));
