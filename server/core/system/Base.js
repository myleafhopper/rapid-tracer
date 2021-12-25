/* --------------------------------------------------
node server/core/system/Base.js
-------------------------------------------------- */

module.exports = class Base {

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
}