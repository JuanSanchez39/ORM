const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});






{
  "name": "readme-generator",
  "version": "1.0.0",
  "description": "Generates a readme file",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/JuanSanchez39/README-Generator.git"
  },
  "keywords": [
    "readme"
  ],
  "author": "Juan Sanchez",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/JuanSanchez39/README-Generator/issues"
  },
  "homepage": "https://github.com/JuanSanchez39/README-Generator",
  "dependencies": {
    "inquirer": "^8.1.2"
  },
  "devDependencies": {}
}