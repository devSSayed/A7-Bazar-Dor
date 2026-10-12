
import { MongoClient } from "mongodb";

const uri = process.env.Mongo_DB_URL;

if (!uri) {
  throw new Error("Mongo_DB_URL is missing");
}

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 10000,
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("MongoDB connection successful!");
} catch (error) {
  console.error("MongoDB connection failed:");
  console.error(error);
} finally {
  await client.close();
}
