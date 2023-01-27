const Tweet = require('../models/tweet');


class TweetRepository {

    async create(data) {
        try {
            const response = await Tweet.create(data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const response = await Tweet.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id,data) {
        try {
            const response = await Tweet.findByIdAndUpdate(id,data,{new: true} );
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(3);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async distroy(id) {
        try {
            const response = await Tweet.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }


}



module.exports = TweetRepository;



