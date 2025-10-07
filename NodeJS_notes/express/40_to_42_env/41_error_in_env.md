Sometimes our ENV variables are not comming form directly form .env file instead they use alternative means

```js
const PORT = process.env.PORT || 3001;
```

means may b our port not come form env file it can be 3001 or any other if it is setted in our environment variables of machine or server so to check the environment vairable on server use these commands

```bash
echo $env:PORT   // PORT is variable name
// To remove form system variable use
Remove-Item env:/PORT
// Then restart Terminal or VS Code and agian check the vairable
```

<!-- ! important points -->

- Always configure the dotenv using dotenv.config({path: "path*of*.env_file"});
- Do not set the same named variable in Machine Environment and in .env file in this case Machine EV has greater priorty and the variable with same name in .env file will be ignored
