export class Matrix {
  matrix;

  constructor(matrix: string) {
    this.matrix = this.stringToMatrix(matrix);
  }

  private stringToMatrix(matrix: string): number[][] {
    const splitStr = matrix.split("\n").map(row => row.split(" "));

    return splitStr.map(row => row.map(str => Number(str)));
  }

  get rows(): number[][] {
    return this.matrix;
  }

  get columns(): number[][] {
    const rows = this.rows;
    const cols = [];

    for (let i = 0; i < rows.length; i++) {
      const col = [];
      for (let j = 0; j < rows.length; j++) {
        col.push(rows[j][i]);
      }
      cols.push(col);
    }


    return cols;
  }
}

