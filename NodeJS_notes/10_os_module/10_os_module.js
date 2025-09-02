//! OS Module in NodeJS

// The OS module is called Operating System Module
// "os" module is a built in module of NodeJS and give info about theo OS and hardware.
// This info is about server where this NodeJS app runs, NOT the client's machine.
// We cannot get the users's laptop or mobile info using this module.

const os = require("os");

console.log("Architecture: ", os.arch());
// architecture of CPU                    //! x64, arm, arm64

console.log("OS Platform: ", os.platform());
// platform of OS                         //! win32, linux, darwin 

console.log("OS Type: ", os.type());
// type of OS                             //! Windows_NT, Linux, Darwin

console.log("Uptime: ", os.uptime() / 60);
// uptime of OS in seconds                //! divided by 60 to get minutes

console.log("Hostname: ", os.hostname());
// hostname of OS                         //! hostname of machine (Muneeb) in my case

console.log("OS Release: ", os.release());
// release of OS                          //! 10.0.19045

console.log("UserInfo: ", os.userInfo());
// user info of OS                        //! object with username, homedir, shell etc.

console.log("OS Version: ", os.version());
// version of OS                          //! Windows 10 Pro in my case for Windows and Ubuntu for Linux

let freeMem = Math.round(os.freemem() / 1024 / 1024 / 1024);
console.log("Free RAM: ", freeMem);
// free memory of OS in bytes             //! RAM free divide twice by 1024 for MBs and thrice for GBs

let totalMem = Math.round(os.totalmem() / 1024 / 1024 / 1024);
console.log("Installed RAM: ", totalMem);
// total memory of OS in bytes            //! Total RAM Installed

console.log("Cores of CPU: ", os.cpus());
// info about each CPU/core installed     //! array of objects for each core with model, speed (in MHz) and times (in ms)

console.log("Home Directory: ", os.homedir());
// home directory of current user 

console.log("Temporary Directory: ", os.tmpdir());
// path of temporary directory

console.log("Network Info: ", os.networkInterfaces());
// info about network interfaces

console.log("End of Line: ", JSON.stringify(os.EOL));
// end of line, \n for linux and \r\n for windows



//! IMPORTANT NOTES:

// 1. All above info is about the SERVER.
// 2. If you display it on a webpage, your users will see your server specs.
//    This can be risky if your server info is sensitive.
// 3. To get CLIENT device info (user laptop/mobile), use browser JS:
//    Example: navigator.userAgent, screen.width, screen.height, etc.
// 4. 'os' module internally uses system-level APIs (partly C++) but you use it in JS.