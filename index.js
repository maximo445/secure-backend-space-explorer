import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/picofday", async (req, res) => {
  try {
    // Replace with your third-party API endpoint

    const key = process.env.API_KEY;

    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

    // Make a request to the third-party API
    const response = await axios.get(apiUrl);

    // Forward the response data to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http:localhost:${PORT}`);
});
