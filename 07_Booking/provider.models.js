import mongoose from 'mongoose';

const providerSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: true
        },
        email: { 
            type: String,
            required: true,
            unique: true
        },
        phone: { 
            type: String,
            required: true
        },
        address: String,
        
    }, {timestamps: true}
);

export const Provider = mongoose.model("Provider", providerSchema);