import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: true,
            unique: true
        },
        description: String,
        
    }, {timestamps: true});

export const Category = mongoose.model("Category", CategorySchema);