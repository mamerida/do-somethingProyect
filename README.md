<h2 align="center">DO - SomeThing Proyect <br/> </h2> 

## About Proyect :clipboard:

This proyect consist in a Login, SingUp Page and roulette where you can chose and collection diferents activities from.

The project can save differents user at the same time. 

[Boded Api](http://www.boredapi.com/)


## Tecnologies ⚙️
To Continuous Integration I used CircleCi

[![<ORG_NAME>](https://circleci.com/gh/mamerida/qouEdaProject.svg?style=svg)](https://app.circleci.com/pipelines/github/mamerida/do-somethingProyect)

CodeClimate to Code Quality and Test Covergare

[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/mamerida/do-somethingProyect)

And Jest fot test

[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)


## Tools 🛠️
<p align="left">
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/js.png" alt=javascript width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/react.png" alt=javascript width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/redux.png" alt=javascript width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/npm.png" alt=npm width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/node.png" alt=nodejs width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/git.png" alt=git width="50" height="50"/>
<img style="margin: auto;" src="https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/github.png" alt=github width="50" height="50"/>
</p>

## How to turn on the bot :game_die:

1) create **.env file** in proyect root with this format:
```
NUMBER_JUMPS = <This Number is use to protect your password>

REACT_APP_LOCALSTORAGE_USERS = usersRegistered

REACT_APP_LOCALSTORAGE_LOGED  = userLoged

REACT_APP_NO_USER_LOGED = {}

REACT_APP_NO_USERS_REGISTERED = []

REACT_APP_API_URL = http://www.boredapi.com/api/activity

REACT_APP_PUBLIC_ROUTE = icons/

```
2) Install/Update node package json in your favorite terminal. Execute:
```
npm install
```
3) To start bot and play only need execute 
```
npm start
```

Test) If you want see the unit testing only execute
```
npm run  test
```
