export function main(input: string): Number {
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

export { main as Day1};