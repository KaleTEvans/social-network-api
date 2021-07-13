const { Schema, model, Types } = require('mongoose');
//const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        userName: {
            type: String,
            required: true
        },
        createedAt: {
            type: Date,
            default: Date.now
            // get: (createdAtVal) => dateFormat(createdAtVal)
        }
    }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //get: (createdAtVal) => dateFormat(createdAtVal)
        },
        username: {
            type:String,
            required: true
        },
        reactions: [ReactionSchema]
    }
);

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;