const path = require('path');

// This is a custom Jest transformer turning file imports into filenames.
// http://facebook.github.io/jest/docs/en/webpack.html

export default {
    process(src, filename) {
        return `module.exports = ${JSON.stringify(path.basename(filename))};`;
    },
};

