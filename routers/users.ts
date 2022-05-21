import { Router } from 'express';

const usersRouter = Router();

const users = [
    {
        id: 1,
        name: 'Roei Rom'
    }
];

usersRouter.get('/', (req, res, next) => {
    res.send(users);    
});

usersRouter.get('/:userId', (req, res, next) => {
    const { userId } = req.params;
    res.send(users.find(user => user.id === +userId));
});

usersRouter.post('/', (req, res, next) => {
    users.push(req.body);
    res.send('Added user!');
});

export default usersRouter