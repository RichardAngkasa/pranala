const express = require("express");
const bodyParser = require("body-parser");
const {isPrime} = require("./primeUtils"); // Assuming you have the isPrime function in a separate file
const cors = require("cors");

const app = express();
const port = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.post("/generate-primes", (req, res) => {
  const max = parseInt(req.body.maxNum, 10);
  if (!isNaN(max)) {
    const primes = [];
    for (let i = 2; i <= max; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    res.json({ primes });
  } else {
    res.status(400).json({ error: "Invalid input" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
