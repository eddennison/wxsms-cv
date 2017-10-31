const mdpdf = require("markdown-pdf");
const fs = require("fs");

const PATH = './dist';

try {
  fs.accessSync(PATH, fs.F_OK)
} catch (e) {
  fs.mkdirSync(PATH)
}

fs.createReadStream("README.md")
  .pipe(mdpdf())
  .pipe(fs.createWriteStream(`${PATH}/README.pdf`));