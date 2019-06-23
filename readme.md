## Objetive of the project
* The purpose of this project is to quickly provide a working environment created with MERN stack.
* This project contains the following:
    - Autentication Module
    - Articles Module
    - Connection with MongoDB - Atlas
    - MaterializeCSS for default
    - Fullstack configs

## How to setup
1. Clone repo
2. npm install in root folder
3. npm install --prefix client
4. Setup databse
    1. Create account in (MongoDB)[https://www.mongodb.com/]
    2. Create Cluster
    3. Set Credentials of Cluster in **/config/default.json** and **/config/production.json**
5. npm run dev 

## Run project
* Run concurrently server & client: npm run dev

## Install Dependencies & other commands
* **Server dependencies**
    - npm i express bcryptjs jsonwebtoken config express-validator mongoose
    - npm i -D nodemon concurrently

* **Client dependencies**
    - npm i axios react-router-dom uuid react-transition-group
    - npm install materialize-css@next

## Backend Routes
* Users
* Auth
* Articles

## Important about Auth client side
* **Redirect after register:** Line 14 of Register.js
* **Redirect after login:** Line 14 of Login.js

## Important Links
* [Express Validator](https://express-validator.github.io/docs/)
* [JSON Web Token/JWT](https://jwt.io)

## Deploy to Heroku
* **Heroku is the best place for fullstack applications**
* **[Heroku](https://www.heroku.com/)**
* **Steps:**
    1. Register/Login your account
    2. [Install Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
    3. Set static assets in production: server.js file
    4. Add & config production.json in config folder **(Credentials must be different of default.json)**
    5. Add & config Heroku to root package.json **(script/heroku-postbuild)**
    6. Exec heroku commands in terminal: 
        - heroku login
        - heroku create
    7. Enter to project in Heroku
    8. Show deploy window
    9. Follow steps for deploy app
    10. **Deploy to Heroku command:** git push heroku master

