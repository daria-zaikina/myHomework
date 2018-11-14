const browserSync = require('browser-sync');

browserSync({
        server: "app",
        files: ["app/*","app/css/*.css","app/js*.js"]
    });
