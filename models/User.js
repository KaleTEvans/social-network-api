const { Schema, model, Types } = require('mongoose');
const validator = require('validator');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [ validator.isEmail, 'invalid email' ]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// friend count virtual
UserSchema.virtual('friendlyCount').get(function() {
    return this.friends.length;
})

// create user model
const User = model('User', UserSchema);

module.exports = User;