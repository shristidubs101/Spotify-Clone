import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  clerkId:{
    type: String,
    required: true,
    unique: true,
  },
}, {timestamps: true} // Automatically add createdAt and updatedAt fields
);

export const User = mongoose.model("User", userSchema);

// export default mongoose.models.User || mongoose.model("User", userSchema);