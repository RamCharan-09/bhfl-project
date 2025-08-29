const express = require("express");
const app = express();

app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is working ✅");
});

app.post("/bfhl", (req, res) => {
  try {
    const inputData = req.body.data; 

    if (!Array.isArray(inputData)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specialChars = [];
    let sum = 0;
    let concatString = "";

    inputData.forEach(item => {
      if (!isNaN(item) && item.trim() !== "") {
        // numeric string
        let num = parseInt(item);
        if (num % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        concatString += item; 
      } else {
        specialChars.push(item);
      }
    });

    let reversedConcat = concatString.split("").reverse().map((ch, idx) =>
      idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
    ).join("");


    res.json({
      is_success: true,
      user_id: "Ram_charan_Barma_15072004",
      email: "ramcharanbarma99@gmail.com",
      roll_number: "22BCE8971",
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: reversedConcat
    });

  } catch (error) {
    res.status(500).json({ is_success: false, message: error.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
