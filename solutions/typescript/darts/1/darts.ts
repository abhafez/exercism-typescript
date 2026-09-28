export function score(x: number, y: number): number {
  const position = x ** 2 + y ** 2;

  if (position > 100) {
    return 0;
  } else if (position > 25) {
    return 1;
  } else if (position > 1) {
    return 5;
  }

  return 10;
}
