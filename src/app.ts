import express from 'express';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from './controllers/userController';

const app = express();

app.use(express.json());

app.post('/users', createUser);
app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

export default app;
