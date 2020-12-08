import { readFileSync } from 'fs';

import { Day1p1, Day1p2 } from "./Day1/main.js";
import { Day2p1, Day2p2 } from "./Day2/main.js";

console.log("Day 1\n\tpart 1: " + Day1p1(readFileSync('Day1\\input.txt', 'utf8')) + "\n\tpart 2: " + Day1p2(readFileSync('Day1\\input.txt', 'utf8')));
console.log("Day 2\n\tpart 1: " + Day2p1(readFileSync('Day2\\input.txt', 'utf8')) + "\n\tpart 2: " + Day2p2(readFileSync('Day2\\input.txt', 'utf8')));