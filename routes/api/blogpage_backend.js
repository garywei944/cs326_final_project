const Router = require('express-promise-router');
const db = require(appRoot + '/db')
const router = new Router();

// TODO: handle the two requests and insert them into database

// click on "like" - add 'this' user and 'this blog' to the sql table 'liked'

// click on "follow" - add 'this' user and 'this blogger' to the sql table 'follow'



module.exports = router;
