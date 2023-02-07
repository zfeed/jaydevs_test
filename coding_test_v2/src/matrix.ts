export class Matrix {
    private matrix: number[][] = [];

    set(i: number, j: number, value: number) {
        if (this.matrix[i] === undefined) {
            this.matrix[i] = [];
        }

        const secondDimention = this.matrix[i] as number[];

        secondDimention[j] = value;
    }

    get(i: number, j: number) {
        const secondDimention = this.matrix[i];

        if (secondDimention === undefined) {
            throw new Error("Second dimention is not initialized");
        }

        const result = secondDimention[j];

        if (result === undefined) {
            throw new Error(
                "Result that is not initialized can not be accessed"
            );
        }

        return result;
    }
}
