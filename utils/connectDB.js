// utils/connectDB.js
import mongoose from 'mongoose';

const connection = {};

async function connectDB() {
  if (connection.isConnected) {
    console.log('Using existing database connection');
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error connecting to database:', error);
  }
}

export default connectDB;
