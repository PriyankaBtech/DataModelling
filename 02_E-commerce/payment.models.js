import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
    {
        order: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Order', 
            required: true },
        amount: { 
            type: Number,
            required: true 
        },
        status: { 
            type: String, 
            enum: ['pending', 'completed', 'failed'], 
            default: 'pending' 
        },
        paymentMethod: String,
        transactionId: String,        

}, {timestamps: true});

export const Payment = mongoose.model("Payment", paymentSchema);