const { HashtagRepository,TweetRepository } = require('../repository/index');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=>tag.substr(1));
      //  console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.getByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map(tags=>tags.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
                return {
                    title: tag,
                    tweets: [tweet.id], 
                }
        })
        // console.log(newTags);
        const response = await this.hashtagRepository.bulkCreate(newTags);
        
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        tags.forEach((tag)=>{
            tweet.hashtag.push(tag.id);
            // tweet.save();
        })
        return tweet;
    }
}

module.exports = TweetService;