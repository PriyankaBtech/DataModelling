import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        user: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        content: { 
            type: String,
            required: true
        },
        likes: [
            { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like' 
            }
        ],
        comments: [
            { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
            }
        ],
        image: String,

    }, {timestamps: true});

export const Post = mongoose.model("Post", postSchema);