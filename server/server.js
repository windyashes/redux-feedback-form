const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const feedbackRouter = require('./routes/feedback.router')

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json()); 
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/api/feedback', feedbackRouter)

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
