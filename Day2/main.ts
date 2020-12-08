export { part1 as d2p1 };
export { part2 as d2p2 };

export function part1(input: string): number {
    let lineData: LineData[] = [];
    input.split("\n").forEach((element) => lineData.push(parseLine(element)));

    let validPasswords: number = 0;
    lineData.forEach((element) => {
        let count: number = element.password.split(element.character).length - 1;
        if (count >= element.min && count <= element.max) validPasswords++;
    });

    return validPasswords;
}

export function part2(input: string): number {
    let lineData: LineData[] = [];
    input.split("\n").forEach((element) => lineData.push(parseLine(element)));

    let validPasswords: number = 0;
    lineData.forEach((element) => {
        let firstChar = element.password.charAt(element.min - 1);
        let secondChar = element.password.charAt(element.max - 1);
        //if ((firstChar === character) XOR (secondChar === character))
        if ((firstChar === element.character) ? !((secondChar === element.character)) : ((secondChar === element.character))) {
            validPasswords++;
        }
    });

    return validPasswords;
}

interface LineData {
    min: number,
    max: number,
    character: string,
    password: string
}

function parseLine(input: string): LineData {
    return {
        min: getMinNumber(input),
        max: getMaxNumber(input),
        character: getCharacter(input),
        password: getPassword(input)
    }
}

function getMinNumber(line: string): number {
    return Number(line.split("-", 1)[0]);
}

function getMaxNumber(line: string): number {
    return Number(line.substring(line.indexOf("-") + 1, line.indexOf(" ")));
}

function getCharacter(line: string): string {
    return line.substring(line.indexOf(" ") + 1, line.indexOf(":"));
}

function getPassword(line: string): string {
    return line.split(" ")[2].replace("\r", "");
}
