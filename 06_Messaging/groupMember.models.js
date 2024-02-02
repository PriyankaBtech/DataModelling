import mongoose from 'mongoose';

const groupMemberSchema = new mongoose.Schema(
    {
        group: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Conversation',
            required: true
        },
        member: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        isAdmin: { 
            type: Boolean,
            default: false
        },
        
    }, {timestamps: true}
);

export const GroupMember = mongoose.model("GroupMember", groupMemberSchema);