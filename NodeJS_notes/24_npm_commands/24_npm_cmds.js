//* npm commands related to npm packages and their versions

//! npm install <package_name>@<version>
//? Examples:
//  npm nstall express@latest               //! latest version with ^sign
//  npm install express@4.0.0               //! ^4.0.0
//  npm install express@4.0.0 --save-exact  //! 4.0.0 (exact version)
//  npm install express@~4.0.0              //! ~4.0.0 (latest patch version of 4.0.x)
//  npm install express@^4.0.0              //! ^4.0.0 (latest minor version of 4.x.x)
//  npm install express@4.x                 //! latest 4.x.x version
//  npm install express@4                   //! latest 4.x.x version
//  npm install express@*                   //! latest version
//  npm install express                     //! latest version
//  npm install express@next                //! next version (if available)
//  npm install express@beta                //! beta version (if available)
//  npm install express@alpha               //! alpha version (if available)
//  npm install express@canary              //! canary version (if available)
//  npm install express@rc                  //! release candidate version (if available)



//! npm outdated <package_name>
//? Example:
//  npm outdated express
//? This command checks for newer versions of the specified package (express in this case) compared
//  npm outdated
//? It shows the outdate packages in the current project. If no package name is provided, it checks all packages in the project.


//! npm update <package_name>
//? Example:
//  npm update express
//? This command updates the specified package to the latest version according to the version range specified in package.json.


//! npm remove <package_name>
//! npm uninstall <package_name>
//? Example:
//  npm uninstall express
//? This command removes the specified package from the node_modules directory and also removes it from the package.json file if it was listed as a dependency.
//? npm remove is an alias for npm uninstall.
//? Both commands perform the same function.
