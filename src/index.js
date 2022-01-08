const express = require('express');
require('./db/mongoose.js')

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

/*
//execPopulate() deprecated
https://mongoosejs.com/docs/migrating_to_6.html#removed-execpopulate
*/

//maintainance
// app.use((req, res, next) => {
//     res.status(503).send('Site is under maintainance , please try after some time');
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
    console.log('server is up on port: ' + port);
})

