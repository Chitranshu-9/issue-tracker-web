const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');

const homepage = require('./routes/homePage');
const createproject = require('./routes/createProjectPage');
const issuePage = require('./routes/createIssue');

app.use(express.json());
app.use(cors());

app.use('/api/issuepage', issuePage);
app.use('/api/homepage', homepage);
app.use('/api/createproject', createproject);


app.listen(PORT, () => {
    console.log("server running");
});
