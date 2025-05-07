import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {timestamps: true})

export const Message = mongoose.model('Message', messageSchema)
// export default mongoose.models.Message || mongoose.model('Message', messageSchema)