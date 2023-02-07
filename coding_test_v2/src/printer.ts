export class Printer {
    constructor(private getDistance: (i: number, j: number) => number,
    private word1: string, private word2: string) {}

    print() {
        const buffer: (string | number)[] = [];

        let distance = this.getDistance(
            this.word1.length - 1,
            this.word2.length - 1
        );
    
        let i = this.word1.length - 1;
        let j = this.word2.length - 1;
    
        let curWord = Array.from(this.word2);
    
        buffer.push(distance);
    
        buffer.push(curWord.join(""));
    
        while (distance > 0) {
            const del = this.getDistance(i, j - 1);
            const insert = this.getDistance(i - 1, j);
            const replace = this.getDistance(i - 1, j - 1);
    
            if (replace < distance) {
                curWord[j] = this.word1[i] as string;
                i -= 1;
                j -= 1;
                distance = replace;
                buffer.push(curWord.join(""));
            } else if (del < distance) {
                curWord[j] = "";
                j -= 1;
                distance = del;
                buffer.push(curWord.join(""));
            } else if (insert < distance) {
                curWord = this.insertIntoArray(
                    curWord,
                    j + 1,
                    this.word1[i] as string
                );
                i -= 1;
                distance = insert;
                buffer.push(curWord.join(""));
            } else {
                i -= 1;
                j -= 1;
            }
        }

        const output = buffer.join('\n');

        console.log(output)
    }

    private insertIntoArray(arr: string[], index: number, newItem: string) {
        return [
            // part of the array before the specified index
            ...arr.slice(0, index),
            // inserted item
            newItem,
            // part of the array after the specified index
            ...arr.slice(index),
        ];
    }
}