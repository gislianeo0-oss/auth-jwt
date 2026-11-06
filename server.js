import express from "express";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
