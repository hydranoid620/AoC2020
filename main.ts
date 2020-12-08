import {readFileSync} from 'fs';

import { Day1 } from "./Day1/main.js";
import { Day2 } from "./Day2/main.js";

console.log("Day 1: " + Day1(readFileSync('Day1\\input.txt', 'utf8')));
console.log("Day 2: " + Day2(readFileSync('Day2\\input.txt', 'utf8')));