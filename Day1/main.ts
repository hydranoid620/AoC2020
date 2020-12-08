export function main(input: string): Number {
    for (const num of input.split("\n")) {
        for (const num2 of input.split("\n")) {
            if (Number(num) + Number(num2) === 2020) {
                return Number(num) * Number(num2);
            }
        }
    }
}

export function main2(input: string): Number {
    for (const num of input.split("\n")) {
        for (const num2 of input.split("\n")) {
            for (const num3 of input.split("\n")) {
                if (Number(num) + Number(num2) + Number(num3) === 2020) {
                    return Number(num) * Number(num2) * Number(num3);
                }
            }
        }
    }
}

export { main as Day1p1};
export { main2 as Day1p2};