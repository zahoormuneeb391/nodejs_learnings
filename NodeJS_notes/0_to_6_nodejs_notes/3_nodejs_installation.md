## Setting Up Development Environment for NodeJS

1. Download and Install Node.js
2. Download and Install VS-Code

## Installing Nodejs and npm (FNM)

1. You can download NodeJS form its official webiste but developers use **FNM** to download NodeJS

2. **FNM (Fast Node Manager)** is a commmand line utility that enables developers to easily manage
   and switch between different version of NodeJS on their machines.

3. If we do not have **winget** on windows, then you can alos use **chocolatey** or **scope** to
   install **FNM**

## Commands (also availble on NodeJS official website)

> winget install Schniz.fnm
> notepad $PROFILE **(a files opens up with nodepad paste the below command in that file)**
> fnm evn --use-on-cd | Out-String | Invoke-Expression
> fnm list **(to check the version of fnm)**
> fnm install 23
> fnm use 23
> **(the above two commands can also be written in one single command give in the nodejs side)**
> fnm use --install-if-missing 23 **(23 is the verison of Nodejs)**
> node -v **(to check if node install or not)**
> npm -v

**You can simply download form website if you do not want to download using fnm**
**During installing Nodejs through GUI checked the box appeare on Tools for Native Modules seciton**
