# Node.js with MySQL REST API

## Getting Started:

Use `git clone` to clone this repo:

```console
$ git clone https://github.com/lukermatthew/API.git
```

or

Click `Clone or download` and `Download ZIP` to get this repo.

## Install the packages

1. Open a terminal
2. Go to `API` folder then

```console
$ npm install
```

## To Start the project

Make sure you setup your `DATABASE` already before starting and using `REST API`

Create Database = database
Create Table = users
Create user fields =

firstname,
lastname,
address,
postcode,
contact,
email,
username,
password

```console
$ npm start
```

## To check if the api is working?

http://localhost:3000/api

## API Endpoint

Get All users
http://localhost:3000/api/v1/users/retrieve

Create user
http://localhost:3000/api/v1/users/create

Update user
http://localhost:3000/api/v1/users/update

Delete user
http://localhost:3000/api/v1/users/delete

Delete all user
http://localhost:3000/api/v1/users/deleteAll
