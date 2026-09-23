function suffix(number: number): string {
    const bases: Record<number, string> = {
        1: 'st',
        2: 'nd',
        3: 'rd',
    }

    if (number in bases) {
        return `${bases[number]}`;
    }

    const tens = Number(`${number}`.slice(-2))
    const ones = Number(`${number}`.slice(-1))

    if (![11, 12, 13].includes(Number(tens)) && ones in bases) {
        return bases[Number(ones)];
    }

    return `th`;
}

export function format(name: string, number: number): unknown {

    return `${name}, you are the ${number}${suffix(number)} customer we serve today. Thank you!`
}
