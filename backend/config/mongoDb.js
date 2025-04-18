import mongoose from "mongoose";

const connectToDb = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error(
      "❌ MONGO_URI is not defined in your environment variables."
    );
  }

  try {
    const connection = await mongoose.connect(mongoUri);
    console.log(`✅ MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectToDb;
