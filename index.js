import axios from "axios";
import fs from "fs";

async function getRandom() {
    // get random quote and write it to readme file
    const response = await axios.get("https://api.quotable.io/random");
    const quote = response.data.content;

    fs.writeFile("README.md", quote, (err) => {
        if (err) {
            console.error(err);
        }
    });
}



await getRandom();