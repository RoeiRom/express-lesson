import express from 'express';

import usersRouter from './routers/users';

const app = express();

app.use(express.json());

app.use('/users', usersRouter)

app.listen(3000, () => {
    console.log('app listening on port 3000')
});