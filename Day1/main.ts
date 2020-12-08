export { part1 as d1p1};
export { part2 as d1p2};

export function part1(input: string): Number {
    for (const num of input.split("\n")) {
        for (const num2 of input.split("\n")) {
            if (Number(num) + Number(num2) === 2020) return Number(num) * Number(num2);
        }
    }
}

export function part2(input: string): Number {
    for (const num of input.split("\n")) {
        for (const num2 of input.split("\n")) {
            for (const num3 of input.split("\n")) {
                if (Number(num) + Number(num2) + Number(num3) === 2020) return Number(num) * Number(num2) * Number(num3);
            }
        }
    }
}
