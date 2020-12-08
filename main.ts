import { readFileSync } from 'fs';

import { d1p1, d1p2 } from "./Day1/main.js";
import { d2p1, d2p2 } from "./Day2/main.js";

let fileData: string = readFileSync('Day1\\input.txt', 'utf8');
console.log("Day 1\n\tpart 1: " + d1p1(fileData) + "\n\tpart 2: " + d1p2(fileData));
fileData = readFileSync('Day2\\input.txt', 'utf8');
console.log("Day 2\n\tpart 1: " + d2p1(fileData) + "\n\tpart 2: " + d2p2(fileData));