import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
    res.send('hello world!')
});

app.post('/', (req, res, next) => {
    res.send('hello world post!')
});

app.listen(3000, () => {
    console.log('app listening on port 3000')
});