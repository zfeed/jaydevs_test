import { EditDistance } from "./edit-distance";

describe("Edit distance", () => {
    test("is 7 when word1 has length 0 and word2 has length 7", () => {
        const editDistance = new EditDistance("", "1234567");

        expect(editDistance.distance).toBe(7);
    });

    test("is 5 when word1 has length 5 and word2 has length 0", () => {
        const editDistance = new EditDistance("", "12345");

        expect(editDistance.distance).toBe(5);
    });

    test("is 0 when word1 and word2 are the same", () => {
        const editDistance = new EditDistance("abc", "abc");

        expect(editDistance.distance).toBe(0);
    });

    test("is 1 when word1 and word2 differ in one character but length is the same", () => {
        const editDistance = new EditDistance("abe", "abc");

        expect(editDistance.distance).toBe(1);
    });

    test("is 1 when word1 and word2 differ in one character but length is different", () => {
        const editDistance = new EditDistance("ab", "abc");

        expect(editDistance.distance).toBe(1);
    });

    test("is the same from word1 to word2 as from word2 to word1", () => {
        const word1 = "abcifhhfabcgds";
        const word2 = "akcifkhfjbcgdsk";

        const editDistance1 = new EditDistance(word1, word2);
        const editDistance2 = new EditDistance(word2, word1);

        expect(editDistance1.distance).toBe(editDistance2.distance);
    });
});
