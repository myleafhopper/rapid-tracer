/* --------------------------------------------------
node server/core/system/FileManager.js
-------------------------------------------------- */

const Base = require('./Base');

module.exports = class FileManager extends Base {

    writeJsonFile(relativeFilePath, json) {

        const filePath = this.path.join(
            this.root,
            relativeFilePath
        );

        try {

            this.filesystem.writeFileSync(
                filePath,
                JSON.stringify(json, null, 4)
            );

        } catch (error) {

            console.log(`\n-> UNABLE TO WRITE FILE: ${filePath}\n`);
            console.log(error);
        }
    }

    readJsonFile(relativeFilePath) {

        const filePath = this.path.join(
            this.root,
            relativeFilePath
        );

        try {

            const data = this.filesystem.readFileSync(filePath, 'utf-8');
            return JSON.parse(data);

        } catch (error) {

            console.log(`\n-> UNABLE TO READ FILE: ${filePath}\n`);
            console.log(error);
        }
    }
}