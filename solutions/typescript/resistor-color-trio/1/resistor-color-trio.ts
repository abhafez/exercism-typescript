const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const units = ['ohms', 'kiloohms', 'megaohms', 'gigaohms'];

export function decodedResistorValue(colorsArray: typeof COLORS[number][]) {
  const [firstColor, secondColor, thirdColor] = colorsArray.map(color => COLORS.indexOf(color));

  const resistorValue = (firstColor * 10 + secondColor) * Math.pow(10, thirdColor);

  const unitIndex = Math.floor(Math.log10(resistorValue) / 3);

  const indexCorrection = unitIndex >= 0 ? unitIndex : 0;

  return `${resistorValue / Math.pow(1000, indexCorrection)} ${units[indexCorrection]}`;
}
