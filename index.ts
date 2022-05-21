import express from 'express';

const app = express();

const users = [
    {
        id: 1,
        name: 'Roei Rom'
    }
];

app.use(express.json());

app.get('/users', (req, res, next) => {
    res.send(users);    
});

app.get('/users/:userId', (req, res, next) => {
    const { userId } = req.params;
    res.send(users.find(user => user.id === +userId));
});

app.post('/users', (req, res, next) => {
    users.push(req.body);
    res.send('Added user!');
});

app.listen(3000, () => {
    console.log('app listening on port 3000')
});