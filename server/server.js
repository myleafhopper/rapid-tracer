/* --------------------------------------------------
node server/server.js
Address: http://localhost:4000
-------------------------------------------------- */

const port = process.env.PORT || 4000;
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

    const path = require('path');
    const servicesFolder = path.join(__dirname, 'services');
    const directoryManager = new (require('./core/system/DirectoryManager'))();
    const folders = directoryManager.getFolders('server/services');

    for (const folder of folders) {

        const fileName = `${folder[0].toUpperCase()}${folder.slice(1)}.js`;
        const servicePath = path.join(servicesFolder, folder, fileName);
        app.use(`/${folder}`, require(servicePath));
    }
}

function startServer() {

    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
}