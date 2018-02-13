const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = lowdb(adapter);

const extensions = db.defaults({
    exts: []
}).write();

const reset = () => {
    db.get('exts')
        .remove(x => true)
        .write();
};

const increaseExtensionCount = (typeName) => {
    const typeEntity = db
        .get("exts")
        .find({
            name: typeName
        });

    if (typeEntity.value()) {
        typeEntity.assign({
            count: typeEntity.get("count").value() + 1
        }).write();
    } else {
        db.get("exts")
            .push({
                name: typeName,
                count: 1
            })
            .write();
    }
};

module.exports = {
    increaseExtensionCount,
    reset,
};