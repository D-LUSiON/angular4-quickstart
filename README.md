# Angular 4 - quickstart project

### Changes from the original

This Angular 4 quickstart project is based on the original quickstart project from [Angular Repository](https://github.com/angular/quickstart.git). The changes are that the directory structure is different.
 - All files from "src" folder are refactored to the root folder;
 - The "main.js" is moved to the "app" folder;
 - The TypeScript transpiler now puts the .js and .map files in "app/js";
 - The .ts files are in "app/ts";
 - Created file organization in folders - directives are in the "_directives" folder, services are in "_services" folder and etc.
 - Root "css" and "js" folders are moved to "assets" folder
 - Created "app/html" folder to put your HTML templates there
 - "app.component" (the root component of the project) is renamed to "root.component"
 - Added example nested component
 
### Download this repository

You can download it in .zip format or via command line - start terminal window, navigate to a folder of your choice where you want your project to be and type:

`git clone https://github.com/D-LUSiON/angular-4-quickstart.git angular4`

This is going to create an "angular4" folder in the folder you've navigated to and in this folder you'll find the main files of the project.

### Install instructions

To run it, you need NodeJS. If you don't have it installed on your machine, you can download it from here:

https://nodejs.org/en/download/

### Install dependancies

To install all required NodeJS and Angular4 modules, start a terminal window, navigate to your projct directory (where you've cloned this project) and type:

`npm install`

### Start the project

After you've installed all dependancies run this command:

`npm start`

### More information

For more information on how to develop applications using Angular visit the official site of [Angular.io](https://angular.io/docs/ts/latest/quickstart.html)

