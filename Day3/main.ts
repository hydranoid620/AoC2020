export { part1 as d3p1 }
export { part2 as d3p2 }

export function part1(input: string): number {
    let treeHits: number = 0;
    const width: number = input.indexOf("\n");
    let column: number = 0;

    input.split("\n").forEach((line) => {
        if (line.charAt(column % width) === "#") treeHits++;
        column += 3;
    });

    return treeHits;
}

//Yucky
export function part2(input: string): number {
    const width: number = input.indexOf("\n");
    const lineData: string[] = input.split("\n");
    
    let treeHits: number = 0;
    let currentColumn: number = 0;
    let currentTreeHits: number = 0;

    lineData.forEach(line => {
        if (line.charAt(currentColumn % width) === '#') currentTreeHits++;
        currentColumn += 1;
    });
    treeHits += currentTreeHits;
    currentColumn = 0;
    currentTreeHits = 0;

    treeHits *= part1(input); //This one is the same

    lineData.forEach(line => {
        if (line.charAt(currentColumn % width) === '#') currentTreeHits++;
        currentColumn += 5;
    });
    treeHits *= currentTreeHits;
    currentColumn = 0;
    currentTreeHits = 0;

    lineData.forEach(line => {
        if (line.charAt(currentColumn % width) === '#') currentTreeHits++;
        currentColumn += 7;
    });
    treeHits *= currentTreeHits;
    currentColumn = 0;
    currentTreeHits = 0;

    for (let i = 0; i < lineData.length; i += 2) {
        if (lineData[i].charAt(currentColumn % width) === '#') currentTreeHits++;
        currentColumn += 1;
    }
    treeHits *= currentTreeHits;

    return treeHits;
}
