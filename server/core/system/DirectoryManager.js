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
}