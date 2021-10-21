const mongoose = require("mongoose");
const Schema = require("mongoose").Schema

const commentSchema = new Schema({
    authorId : String,
    content: String,
    mahindraCollectiveContentId : {type : mongoose.Schema.Types.ObjectId, ref : "mahindraCollectiveAndOfferOrCampaign"},
    likes:  { 
        liked_by: [String],
        likesCount : Number
    },
    type : {type: String},
    subcomments: [mongoose.Schema.Types.ObjectId]

},{
    timestamps: true,
  versionKey : false
});
const MahindraCollectiveComment = mongoose.model("MahindraCollectiveComment", commentSchema,"MahindraCollectiveComments");
module.exports = MahindraCollectiveComment;
