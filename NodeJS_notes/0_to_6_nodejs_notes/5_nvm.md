# NVM (Node Version Manager)

## 1️⃣ What is NVM?

- **NVM** stands for **Node Version Manager**.
- It is a tool used to **manage multiple Node.js versions** on a single machine.
- This is useful when different projects require different Node.js versions—you can easily switch between them using NVM.

## 2️⃣ How does NVM work?

- NVM **installs and manages Node.js versions** on your system.
- It modifies the system **PATH** to ensure the correct Node version is used.
- With a single command, you can switch Node versions and select the one compatible with your project.

## 3️⃣ Basic NVM Commands

`nvm install <version>`  
Installs a specific Node.js version. Example: `nvm install 18.17.0`

`nvm use <version>`  
Switches to a specific installed version. Example: `nvm use 18.17.0`

`nvm ls`  
Lists installed Node versions

`nvm ls-remote`  
Shows available Node versions online

`nvm current`  
Shows the currently active Node version

`nvm alias default <version>`
Sets the default Node version for the system

`nvm uninstall <version>`  
Uninstalls a specific Node version

## 4️⃣ Example Workflow

1. Check NVM installation:
   `nvm --version`

2. Install a Node version:
   `nvm install lts`
   `nvm install 18.17.0`

3. Use a Node version:
   `nvm use 18.17.0`

4. Set default version:
   `nvm alias default 18.17.`

5. Checked Install versions:
   `nvm ls`

6. Checked Node version availble on internet:
   `nvm ls-remote`
