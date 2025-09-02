# NPM Global Packages

## What are Global Packages?

1. lobal packages are installed **system-wide** and can be used in any project.
2. They are usually **CLI (Command Line Interface) tools** like `nodemon`, `eslint`, `typescript`, etc.
3. Unlike local packages (inside `node_modules`), global packages are stored in a system folder accessible everywhere.

## Some of the Important Node.js Global Commands

1. `npm install -g <package-name>`  
   Installs a package globally so it can be used anywhere on your system.

2. `npm remove -g <package-name>`  
   Removes a globally installed package.

3. `npm uninstall -g <package-name>`  
   Same as `npm remove -g`, uninstalls a global package.

4. `npm list -g`  
   Lists all globally installed packages with full dependency tree.

5. `npm list -g --depth=0`  
   Lists only top-level globally installed packages (no sub-dependencies).

6. `npm root -g`  
   Shows the folder path where global packages are installed.

7. `npm outdated -g --depth=0`  
   Shows globally installed packages that have newer versions available.

8. `npm update -g <package-name>`  
   Updates a specific globally installed package to the latest version.

9. `npm update -g`  
   Updates all globally installed packages to their latest versions.

10. `npm cache clean -g --force`  
    Clears the global npm cache.

11. `npm help -g`  
    Shows help for global commands and usage examples.

12. `npm doctor`  
    Checks your npm environment and configuration for common issues.

13. `npm version -g`  
    Shows the version of globally installed packages.

14. `npm install -g npm`  
    Updates npm itself to the latest version globally.

<!-- ! Short Note -->

`npm list -g` = Books on a shelf + bookmarks inside.
`npm list -g --depth=0` = Only books, ignore bookmarks.
