const express = require('express');
const mainRouter = require('./routes/main-route');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(mainRouter);
  
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
