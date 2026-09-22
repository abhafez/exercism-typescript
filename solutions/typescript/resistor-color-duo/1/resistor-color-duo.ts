const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export function decodedValue(colorsArray: typeof COLORS[number][]) {
    const [firstColor, secondColor] = [COLORS.indexOf(colorsArray[0]), COLORS.indexOf(colorsArray[1])]
    return firstColor * 10 + secondColor;
}
