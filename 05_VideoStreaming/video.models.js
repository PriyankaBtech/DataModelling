import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema(
    {
        title: { 
            type: String,
            required: true
        },
        description: String,
        thumbnailUrl: String,
        videoUrl: { 
            type: String,
            required: true
        },
        views: { 
            type: Number,
            default: 0
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
        user: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            required: true
        },
        category: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Category'
        },

    }, {timestamps: true});

export const Video = mongoose.model("Video", videoSchema);