'use strict'

const monggoose = require('mongoose');

const connectString = `mongodb://localhost:27017/`;
monggoose.connect(connectString).then(() => {
    console.log('connect success');
});

//dev

if(1===0){
    monggoose.set('debug', true);   
    monggoose.set('debug', {color: true});
}

module.exports = monggoose