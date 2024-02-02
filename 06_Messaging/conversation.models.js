import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema(
    {
        participants: [
            { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        isGroup: { 
            type: Boolean,
            default: false
        },
        groupName: { 
            type: String,
            default: null
        },
        lastMessage: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        },

    }, {timestamps: true}
);

export const Conversation = mongoose.model("Converstaion", conversationSchema);