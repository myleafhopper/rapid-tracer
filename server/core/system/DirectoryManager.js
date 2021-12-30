/* --------------------------------------------------
node server/core/system/DirectoryManager.js
-------------------------------------------------- */

const Base = require('./Base');

module.exports = class DirectoryManager extends Base {

    createDirectory(relativeDirectoryPath = '') {

        const directoryPath = this.path.join(
            this.root,
            relativeDirectoryPath
        );

        try {

            this.filesystem.mkdirSync(directoryPath);

        } catch (error) {

            error.code === 'EEXIST' ?
                console.log(`\n-> DIRECTORY EXISTS: ${directoryPath}\n`) :
                console.log(error);
        }
    }

    getFolders(relativeDirectoryPath) {

        try {

            const directoryPath = this.path.join(
                this.root,
                relativeDirectoryPath
            );

            return this.filesystem.readdirSync(directoryPath);

        } catch (error) {
            console.log(error);
            return [];
        }
    }

    getFiles(relativeDirectoryPath) {

        try {

            const directoryPath = this.path.join(
                this.root,
                relativeDirectoryPath
            );

            const files = [];

            this.filesystem.readdirSync(directoryPath).forEach(file => {
                if (this.filesystem.lstatSync(
                    this.path.resolve(directoryPath, file)
                ).isFile()) {
                    files.push(file);
                }
            });

            return files;

        } catch (error) {
            console.log(error);
            return [];
        }
    }
}