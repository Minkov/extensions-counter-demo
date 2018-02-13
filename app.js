const files = require('./files');
const data = require('./data');

const callback = (file) => {
    if (!file.includes('.')) {
        return;
    }

    const typeName = file.substring(file.lastIndexOf('.') + 1)
    data.increaseExtensionCount(typeName);
};

data.reset();
files.traverse(
    __dirname,
    callback
);