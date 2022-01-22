<a href=https://github.com/Lokeshchoubisa/user-icon-generator>
   <img src=https://img.shields.io/npm/dy/user-icon-generator>
</a>
<a href=https://github.com/Lokeshchoubisa/user-icon-generator>
   <img src=https://img.shields.io/npm/l/user-icon-generator>
</a>
<a href=https://github.com/Lokeshchoubisa/user-icon-generator>
   <img src=https://img.shields.io/npm/v/user-icon-generator>
</a>
<a href=https://github.com/Lokeshchoubisa/user-icon-generator>
   <img src=https://img.shields.io/github/repo-size/Lokeshchoubisa/user-icon-generator>
</a>
<a href=https://github.com/Lokeshchoubisa/user-icon-generator>
   <img src=https://img.shields.io/bundlephobia/min/user-icon-generator/1.0.3>
</a>



## Getting started with icon generation
### Installation
This is a [Node.js](https://nodejs.org/en/) module available through the [npm](https://www.npmjs.com/package/user-icon-generator) registry.

Before installing, download and install  Node.js.

Installation of package is done using the npm install command:
```bash
$ npm install --save user-icon-generator
```
### Usage
* Requiring the module 

```javascript
var icons = require('user-icon-generator');
```
* This icons(fullname,color) method returns a image .

 ```javascript
 

var icons=require("user-icon-generator");

icons("Lokesh Choubisa","black").then((icon)=>
{
    if(!icon.error)
    {
        let image=icon.file;
        console.log(image);
    }
    else
    {
        console.log(icon.error);
    }   
})



```

### Output

<img align="center"  width="80" height="80" src="https://raw.githubusercontent.com/Lokeshchoubisa/icon-generator/master/file.png?token=GHSAT0AAAAAABQEU6QGHCHNELBPXP5FPUD6YPMDTZA" />


## Want to contribute ?

> Please check out this repository [here](https://github.com/Lokeshchoubisa/user-icon-generator)!
# Thankyou for being here! 😊

Check out my other Repositories [here](https://github.com/Lokeshchoubisa)

```
   _____ _                  ____                               _               _ 
  / ____| |                |  _|                              | |__           | |
 | (___ | |_ __ _ _   _    | |  _ __  ___ _ __     __   ____  | __ |   __  __ | |
  \___ \| __/ _` | | | |   | | |  _ \| __ |  _ \ / _  \| ___| | |  _  / _ \/ _` |
  ____) | || (_| | |_| |   | |_| |_| | | || | | |  ___/| |__  | |_| ||  __/ (_| | 
 |_____/ \__\__,_|\__, |   |___|_____|_| || | | |\___| | ___| |____ | \___|\__,_|
                   __/ |                                      
                  |___/                                       
```
## Connect 
> [Linkedin](https://www.linkedin.com/in/lokesh-choubisa-450a98195/)
> [Gmail](lokeshchoubisa26@gmail.com)