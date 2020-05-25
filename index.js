var serveStatic = require('serve-static');
var express = require('express');
var browserSync = require('browser-sync');
var app = express();
var port = process.env.PORT || 3000;

app.use(serveStatic(__dirname));
app.listen(port, listening);

function listening () {
  browserSync({
    proxy: 'localhost:' + port,
    files: ['**/*.{js,css}']
  });
}