/* --------------------------------------------------
EXPORTS
-------------------------------------------------- */

module.exports.openDatabaseConnection = () => {

    const directoryManager = new (require('../../core/system/DirectoryManager'))();
    directoryManager.createDirectory('server/resources');

    const relativeDatabasePath = 'server/resources/Database.db';
    const databasePath = directoryManager.path.join(
        directoryManager.root,
        relativeDatabasePath
    );

    const sqlite = require('sqlite3');
    return new sqlite.Database(databasePath);
};