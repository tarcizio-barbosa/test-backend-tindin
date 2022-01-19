import { MongoMemoryServer } from "mongodb-memory-server";
import { connect, connection } from "mongoose";

export async function connectDB() {
  const mongodbTest = await MongoMemoryServer.create();

  const uri = mongodbTest.getUri();

  connect(uri);
}

export async function closeDB() {
  await connection.dropDatabase();
  await connection.close();
}

export async function clearDB() {
  const { collections } = connection;

  Object.entries(collections).map((collection) => collection[1].deleteMany({}));
}
