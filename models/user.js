const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        login: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        nickname: {
            type: String,
            unique: true
        },
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        age: {
          type: Number
        },
        primaryGame: {
            type: String
        },
        position: {
            type: String
        }

    },
    {
        timestamps: true
    }
);

schema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('User', schema);