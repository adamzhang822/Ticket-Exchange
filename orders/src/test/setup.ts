import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { app } from "../app";
import jwt from "jsonwebtoken";

declare global {
  var signin: () => string[];
}

jest.mock("../nats-wrapper");

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "givemeoffer";
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  mongo = await MongoMemoryServer.create();
  const mongoUri = await mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = () => {
  // Build a JWT paylod. {id, email};
  // random generate user id to simulate multiple users

  const payload = {
    id: new mongoose.Types.ObjectId().toHexString(),
    email: "test@test.com",
  };

  // Create the JSON web token!
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // Build a session Object: {jwt: MY_JWT}
  const session = { jwt: token };

  // Take JSOn and encode it as base64
  const sessionJSON = JSON.stringify(session);

  // return a string that's the cookie with encoded cooki data
  const base64 = Buffer.from(sessionJSON).toString("base64");
  return [`express:sess=${base64}`];
};
