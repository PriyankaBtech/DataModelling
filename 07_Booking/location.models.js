import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: true
        },
        address: { 
            type: String,
            required: true
        },

    }, {timestamps: true}
);

export const Location = mongoose.model("Location", locationSchema);