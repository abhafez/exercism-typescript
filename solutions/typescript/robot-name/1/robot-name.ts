const FIRST_LETTER = 'A'.charCodeAt(0);
const LAST_LETTER = 'Z'.charCodeAt(0);
const SERIAL_DIGITS = 3;
const SERIAL_LIMIT = 10 ** SERIAL_DIGITS;

export class Robot {
  private static availableNames: string[] = Robot.buildNamePool();

  private robotName: string;

  constructor() {
    this.robotName = Robot.takeName();
  }

  public get name(): string {
    return this.robotName;
  }

  public resetName(): void {
    this.robotName = Robot.takeName();
  }

  public static releaseNames(): void {
    Robot.availableNames = Robot.buildNamePool();
  }

  private static takeName(): string {
    const name = Robot.availableNames.pop();

    if (name === undefined) {
      throw new Error('All robot names are in use');
    }

    return name;
  }

  private static buildNamePool(): string[] {
    const pool: string[] = [];

    for (let first = FIRST_LETTER; first <= LAST_LETTER; first += 1) {
      for (let second = FIRST_LETTER; second <= LAST_LETTER; second += 1) {
        const letters = String.fromCharCode(first, second);

        for (let serial = 0; serial < SERIAL_LIMIT; serial += 1) {
          pool.push(`${letters}${String(serial).padStart(SERIAL_DIGITS, '0')}`);
        }
      }
    }

    return Robot.shuffle(pool);
  }

  private static shuffle(names: string[]): string[] {
    for (let i = names.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [names[i], names[j]] = [names[j], names[i]];
    }

    return names;
  }
}
