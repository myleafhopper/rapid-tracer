/* --------------------------------------------------
node server/server.js
-------------------------------------------------- */

const express = require("express");
const app = express();

setServerSettings();
setServices();
startServer();

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

function setServerSettings() {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

function setServices() {

    const directoryManager = new (require('./core/system/DirectoryManager'))();
    const folders = directoryManager.getFolders('server/services');

    for (const folder of folders) {

        const servicePath = `./services/${folder}`;
        const files = directoryManager.getFolders(`server/services/${folder}`);

        for (const file of files) {
            app.use(`/${folder}`, require(`${servicePath}/${file}`));
        }
    }
}

function startServer() {

    const port = process.env.PORT || 4000;

    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
}