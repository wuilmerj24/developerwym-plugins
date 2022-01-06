var path = require('path');
var fs = require('fs-extra');

let files = [[path.resolve('./', 'views/views.ts'), path.resolve('../../', 'views/views.ts')][(path.resolve('./', 'views/views.xml'), path.resolve('../../', 'views/views.xml'))]];

files.forEach((item, index) => {
    let fileOrFolder = item[0];
    let dest = item[1];

    fs.copy(fileOrFolder, `${dest}`, { clobber: false }, (err) => {
        if (err) return console.error(err);
    });
});
