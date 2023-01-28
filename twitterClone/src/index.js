const express = require('express');

const connect = require('./config/database');
const app = express();
const HashTagRepository = require('./repository/hashtag-repository');
const TweetService = require('./service/tweet-service');

app.listen(3000, async ()=>{
    console.log(`Server started`);
    await connect();
    console.log('Mongo db connected');
    const service = new TweetService();
    const result = await service.create({content: 'This is #after #processing really excited, it is going to be #fun'});
    // console.log(result);
})