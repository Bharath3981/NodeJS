import * as fs from "node:fs";

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);
