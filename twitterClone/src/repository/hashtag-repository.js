const HashTag = require('../models/hashtags');
const Hashtag = require('../models/hashtags');

class HashtagRepository {
    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            return error;
        }
    }

    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            return error;
        }
    }

    async get(id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            return error;
        }
    }

    async getByName(titleList) {
        try {
            const tags = await HashTag.find({
                title: titleList,
            });
            return tags;
        } catch (error) {
            return error;
        }
    }

    async destroy(id) {
        try {
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        } catch (error) {
            return error;
        }
    }

}

module.exports = HashtagRepository