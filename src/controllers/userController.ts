import { Request, Response } from 'express';
import { UserService } from '../services/userService';

const userService = new UserService();

export const createUser = (req: Request, res: Response) => {
    const { name, apellido, correo, telefono } = req.body;
    const newUser = userService.createUser(name,apellido,correo,telefono);
    res.status(201).json(newUser);
};

export const getAllUsers = (req: Request, res: Response) => {
    const users = userService.getAllUsers();
    res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
    const user = userService.getUserById(Number(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

export const updateUser = (req: Request, res: Response) => {
    const { name, apellido, correo, telefono } = req.body;
    const updatedUser = userService.updateUser(Number(req.params.id), name, apellido,correo,telefono);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

export const deleteUser = (req: Request, res: Response) => {
    const success = userService.deleteUser(Number(req.params.id));
    if (success) {
        res.sendStatus(204);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};
