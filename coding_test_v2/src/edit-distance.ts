import { Matrix } from "./matrix";
import { Printer } from "./printer";

export class EditDistance {
    private matrix: Matrix = new Matrix();
    public readonly word1: string;
    public readonly word2: string;
    public readonly distance: number;

    constructor(word1: string, word2: string) {
        this.word1 = word1;
        this.word2 = word2;

        this.calculate(word1, word2);

        this.distance = this.getDistance(
            this.word1.length - 1,
            this.word2.length - 1
        );
    }

    private calculate(word1: string, word2: string) {
        if (word1.length === 0) {
            return word2.length;
        }

        if (word2.length === 0) {
            return word1.length;
        }

        for (let i = 0; i < word1.length; i++) {
            for (let j = 0; j < word2.length; j++) {
                if (word1[i] === word2[j]) {
                    this.matrix.set(i, j, this.getDistance(i - 1, j - 1));
                    continue;
                }

                const replace = this.getDistance(i - 1, j - 1);
                const insert = this.getDistance(i, j - 1);
                const del = this.getDistance(i - 1, j);

                this.matrix.set(i, j, Math.min(replace, insert, del) + 1);
            }
        }
    }

    private getDistance(i: number, j: number) {
        if (i < 0 && j < 0) {
            return 0;
        }

        if (i < 0) {
            return j + 1;
        }

        if (j < 0) {
            return i + 1;
        }

        return this.matrix.get(i, j);
    }

    print() {
        const printer = new Printer(this.getDistance.bind(this), this.word1, this.word2);
    
        printer.print();
    }
}
