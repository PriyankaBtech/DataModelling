import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: true
        },
        videos: [
            { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video'
            }
        ],
        user: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            required: true
        },
        
    }, {timestamps: true});

export const Playlist = mongoose.model("Playlist", playlistSchema);