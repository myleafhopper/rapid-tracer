/* --------------------------------------------------
node server/core/system/DirectoryManager.js
-------------------------------------------------- */

module.exports = class DirectoryManager {

    constructor() {

        this.filesystem = require('fs');
        this.path = require('path');
        this._setRootDirectory();
    }

    _setRootDirectory() {

        this.root = this.path.parse(
            this.path.parse(
                this.path.parse(__dirname).dir
            ).dir
        ).dir;
    }

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