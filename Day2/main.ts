//  Input format:
//      <min occurrences>-<max occurrences> <char>: <password>

export function main(input: string): number {
    let lineData: LineData[] = [];
    input.split("\n").forEach((element) => lineData.push(parseLine(element)));

    let validPasswords: number = 0;
    lineData.forEach((element) => {
        let count: number = element.password.split(element.character).length - 1;
        if (count >= element.min && count <= element.max) validPasswords += 1;
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

export { main as Day2 };