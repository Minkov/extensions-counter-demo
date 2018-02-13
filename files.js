const fs = require('fs');
const path = require('path');

const traverse = (dir, callback) => {
    fs.readdir(dir, (err, contents) => {
        contents = contents.map((file) => path.join(dir, file));

        contents.filter((file) => fs.lstatSync(file).isFile())
            .forEach((file) => callback(file));

        contents.filter((folder) => fs.lstatSync(folder).isDirectory())
            .forEach((folder) => traverse(folder, callback))
    });
};

module.exports = {
    traverse,
};