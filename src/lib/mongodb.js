import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let clientPromise;

// Use globalThis to cache the connection promise across serverless invocations.
// This works in both development (hot reloads) and production (Vercel serverless).
if (!globalThis._mongoClientPromise) {
  const client = new MongoClient(uri, options);
  globalThis._mongoClientPromise = client.connect();
}
clientPromise = globalThis._mongoClientPromise;

export default clientPromise;
