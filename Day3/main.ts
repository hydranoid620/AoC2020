export { part1 as d3p1 }
export { part2 as d3p2 }

export function part1(input: string): number {
    let treeHits: number = 0;
    const width: number = input.indexOf("\n");
    let column: number = 0;

    input.split("\n").forEach((line) => {
        if (line.charAt(column) === "#") treeHits++;
        column += 3;
        if (column >= width) column = column - width;
    });

    return treeHits;
}

export function part2(input: string): number {

    return -1;
}
