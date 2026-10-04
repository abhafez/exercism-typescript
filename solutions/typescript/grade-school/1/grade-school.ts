export class GradeSchool {
  private board: Record<number, string[]>;
  constructor() {
    this.board = {};
  }

  roster(): Record<number, string[]> {
    const copy: Record<number, string[]> = {};
    for (const grade in this.board) {
      copy[grade] = [...this.board[grade]];
    }
    return copy;
  }

  add(student: string, grade: number) {
    // a student can only be in one grade: drop them from wherever they are now
    for (const g in this.board) {
      this.board[g] = this.board[g].filter((name) => name !== student);
      if (this.board[g].length === 0) delete this.board[g];
    }

    this.board[grade] = [...(this.board[grade] ?? []), student].sort();
  }

  grade(num: number): string[] {
    return [...(this.board[num] ?? [])];
  }
}
