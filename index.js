const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.set('json spaces', 2);
const port = 3000;

const statusesData = JSON.parse(fs.readFileSync('status.json'));

app.get('/status', (req, res) => {
  const randomIndex = Math.floor(Math.random() * statusesData.length);
  const randomStatus = statusesData[randomIndex];
  const author = "𝐈𝐒𝐋𝐀𝐌𝐈𝐂𝐊 𝐂𝐘𝐁𝐄𝐑 𝐂𝐇𝐀𝐓";
  const responseData = {
    author,
    url: {
      title: randomStatus.title,
      url: randomStatus.url,
    },
  };
  console.log('Response:', responseData);
  res.json(responseData);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
