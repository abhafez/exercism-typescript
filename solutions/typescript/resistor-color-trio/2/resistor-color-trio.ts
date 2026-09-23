const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

const UNITS = ['ohms', 'kiloohms', 'megaohms', 'gigaohms'];

export function decodedResistorValue(colors: string[]): string {
  const [first, second, multiplier] = colors.map((color) =>
    COLORS.indexOf(color),
  );

  const resistance = (first * 10 + second) * 10 ** multiplier;

  const unitIndex = Math.max(0, Math.floor(Math.log10(resistance) / 3));

  const displayedValue = resistance / 1000 ** unitIndex;

  return `${displayedValue} ${UNITS[unitIndex]}`;
}
