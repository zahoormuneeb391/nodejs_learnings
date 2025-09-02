# npm in Nodejs

1. `npm`is a popular package manager which comes bundled with Node.js.
2. It is `CLI` tool used to install, update, and uninstall external packages.
3. You can create your own packages and publish it on `npmjs.com` registry.

# Do not confused npm CLI with npmjs.com as it is a registry whre most of the packages of Node.js saved.

4. Alternative of `npmjs.com` = JSR (`jsr.io`) JavaScript Registry.
5. Alternative of `npm` are `yarn`, `pnpm`, `bun` etc.
6. `npm` doesn'stands for "Node Package Mananger" even though many people refer to it as that
7. `npm` is not an acronym.
8. Before installing any package from npm make sure you initialize you project. `npm init`
9. After installing a package you will notice `node_modules` folder and `package-lock.json` has been created

## node_modules

stores all the installed packages, usually heavy in size, so include it in .gitignore and avoid sharing.
you will also notice there are some packages which you didn't install its because the package you installed
depend on those third-party packages.
this concept is called transitive dependencies (dependencies of dependencies).

## package-lock.json

includes the exact version of all packages that you installed. It makes sure to prevent breaking
changes in newer versions of the package

10. You can use the package by simply importing normally as you do with core modules.
11. While importing `Node.js` first checks the core modules then files or folders and at last looks inside `node_modules`.

## npm commands

`npm install`
Even you delete node_modules this command will again create node_modules using package-lock.json or package.json

`npm list`
because of Symbol the version specified in the package.json might not be installed
use this command to see the exact version of packages
use `-a` flag to see whole list.

`npm view <package-name>`
to see the details of the package like version, license, author and so on.

`npm view <package-name> versions`
to see all the version of package and remove `s` form versions to see the version you have installed

<!-- ! List of important commands -->

`npm init -y`......................> creates a package.json file with default values (new project setup)
`npm install package-name`.........> installs a package locally in the project
`npm install`......................> installs all dependencies listed in package.json
`npm uninstall package`............> removes/uninstalls a package
`npm install -g package`...........> installs a package globally (usable everywhere)
`npm update package`...............> updates a specific package
`npm outdated`.....................> shows a list of outdated packages
`npm run script-name`..............> runs a custom script defined in package.json (e.g. npm run dev)
