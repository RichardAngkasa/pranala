import { useState } from "react";

function Form() {
  const [maxNum, setMaxNum] = useState("");
  const [result, setResult] = useState();

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  const generatePrimes = () => {
    const max = parseInt(maxNum, 10);
    if (!isNaN(max)) {
      const primes = [];
      for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
          primes.push(i);
        }
      }
      setResult(primes.join(", "));
    }
  };

  const generatePrimesBackend = async () => {
    console.log(maxNum);
    try {
      const response = await fetch("http://localhost:8080/generate-primes", {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ maxNum }),
      });
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setResult(data.primes.join(", "));
      } else {
        console.error("Request failed:", response);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <div>
        FRONTEND SIDE ONLY
        <div>Prime Numbers: {result}</div>
        <input
          type="text"
          value={maxNum}
          onChange={(e) => setMaxNum(e.target.value)}
        />
        <button onClick={generatePrimes}>Generate Prime Numbers</button>
      </div>
      BACKED SIDE BUG
      <div>Prime Numbers: {result}</div>
      <input
        type="text"
        value={maxNum}
        onChange={(e) => setMaxNum(e.target.value)}
      />
      <button onClick={generatePrimesBackend}>Generate Prime Numbers</button>
    </div>
  );
}

export default Form;
