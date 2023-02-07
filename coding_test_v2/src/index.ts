import { EditDistance } from "./edit-distance";

const word1 = process.argv[2];
const word2 = process.argv[3];

if (!word1 || !word2) {
    throw new Error("This tool requires two arguments");
}

const editDistance = new EditDistance(word1, word2);

editDistance.print();
