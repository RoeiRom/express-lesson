import express from 'express';

import usersRouter from './routers/users';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log('user launched ' + req.method + ' request to: ' + req.path + " at: " + (new Date()).toLocaleString());
    next();
});

app.use('/users', usersRouter);

app.listen(3000, () => {
    console.log('app listening on port 3000')
});