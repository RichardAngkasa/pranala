/* eslint-disable no-undef */
import express from "express";
import { generatePrimes } from "./primeUtils";
import cors from "cors"; // Import the cors package

app.use(cors()); // Use cors middleware

const app = express();

app.use(express.json());

app.post("/generate-primes", (req, res) => {
  const max = parseInt(req.body.maxNum, 10);
  const primes = generatePrimes(max);
  res.json({ primes });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
