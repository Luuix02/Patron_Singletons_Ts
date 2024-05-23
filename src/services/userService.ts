import { UserManager } from '../singletons/userManager';

export class UserService {
    private userManager = UserManager.getInstance();

    public createUser(name: string, apellido: string, correo: string, telefono: string ) {
        return this.userManager.createUser(name,apellido,correo,telefono);
    }

    public getAllUsers() {
        return this.userManager.getAllUsers();
    }

    public getUserById(id: number) {
        return this.userManager.getUserById(id);
    }

    public updateUser(id: number, name: string, apellido: string, correo: string, telefono: string ) {
        return this.userManager.updateUser(id, name, apellido, correo, telefono);
    }

    public deleteUser(id: number) {
        return this.userManager.deleteUser(id);
    }
}
