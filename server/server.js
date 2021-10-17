/* --------------------------------------------------
node server/server.js
-------------------------------------------------- */

const port = process.env.PORT || 4000;
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
setServices();

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

/* --------------------------------------------------
FUNCTIONS
-------------------------------------------------- */

function setServices() {

    const directoryManager = new (require('./core/system/DirectoryManager'))();
    const folders = directoryManager.getFolders('server/services');
    
    for (const folder of folders) {

        const servicePath = `./services/${folder}`;
        const files = directoryManager.getFolders(`server/services/${folder}`);

        for (const file of files) {
            app.use('/database', require(`${servicePath}/${file}`));
        }
    }
}