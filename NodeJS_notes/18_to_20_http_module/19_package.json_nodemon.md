# Introduciton to package.json

1. package.josn is a configuration file used in Nodejs project
2. It contains meta-data(info about info) about the project and
   info about project dependencies.
3. use `npm init` to initialize a project or to create package.json

# Name, Version, Description ("name", "version", "description");

1. Specifies the name and version of project.
2. Helps uniquely identify and version the project.

# Entry Point

1. Specifies the main entery point file for the application
2. The file executed when the application starts.

# Scripts

1. Contains custom scripts for various tasks (like, running tests, starting the server).
2. Provides the shortcuts for common development tasks

# Author, Licenses, and More:

1. Info about the project's author, licenses, repository, and other meta-data
2. Useful for documentation and collaboration

# You can also use `npm init -y` to create package.json quickly.

<!-- ! Auto Restart Server Using Nodemon -->

Nodemon: 3rd party library used to auto-restart the server as changes made in file

## Install Nodemon (Locally)

- npm i nodemon
- nodemon -v
- nodemon <filename> `i.e nodemon server.js`

## Install Nodemon (Globally)

- npm i -g nodemon
- npm i --save-dev nodemon
- npm --version
- nodemon <filename> instead of node <filename>
