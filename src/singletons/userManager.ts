
// CREAMOS UNA INTERFAZ QUE ES COMO NUESTRA PLANTILLA O MOLDE DE NUESTRO OBJETO USUARIO 
//QUE TENDRA ESTOS ATRIBUTOS
interface User {
  id: number;
  name: string;
  apellido: string;
  correo: string;
  telefono: string;
}
//CREAMOS UNA CLASE LLAMADA USERMANAGER LA CUAL GESTIONARA TODOS NUESTROS USERS
export class UserManager {
    //USAMOS EL PATRON SINGLETON Y DECLARAMOSLA PROPIEDAD DE TIPO STATIC QUE SE LLAMA INSTANCE
    // LA CUAL OBTENDRA O ALMACENARA LA INSTANCIA UNICA DE LA CLASE USER MANAGER.
  private static instance: UserManager;
  //DECLARAMOS LA PROPIEDAD USERS DE TIPO PRIVATE QUE SERA DE TIPO ARREGLO EN LA CUAL
  //SE VA A ALMACENAR EL OBJETO USER
  private users: User[] = [];
  //DECLARAMOS LA VAR NEXT ID PARA DARLE ID A LOS USERS Y LA CUAL LA INCIALIZAMOS EN 1
  private nextId: number = 1;

  //DEFINIMOS EL CONSTRUCTOR PRIVADO, PRIV POR QUE? PORQUE NO QUEREMOS CREAR INSTANCIA DE LA CLASE USER MANAGER
  //FUERA DE LA MISMA, ES DECIR, LO QUE QUEREMOS HACER ES QUE SOLO HAYA UNA INSTANCIA UNICA DE ESA CLASE
  //NO QUEREMOS INSTANCIAR MAS DE UNA VEZ CON EL NEW Y ESTO SIGUE EL PATRON DE SINGLETON
  private constructor() {}


//DEFINIMOS NUESTRO METODO ESTATIC GET INSTANCE QUE VA A DEVOLVERNOS LA INSTANCIA USER MANAGER
//SI LA INSTANCIA NO ESTA DEFINIDA O NO EXISTE SE CREARA UNA NUEVA Y ESTA SE GUARDA EN LA VAR INSTANCE
//AL FINAL NOS DEVOLVERA LA INSTANCIA QUE YA EXISTE O LA RECIEN CREADA
  public static getInstance(): UserManager {
      if (!UserManager.instance) {
          UserManager.instance = new UserManager();
      }
      return UserManager.instance;
  }

//DEFININMOS UN METODO TIPO PUBLIC CREATE USER QUE RECIBE LOS PARAMETROS DE LA INTERFACD CREADA
//EN ESTE CASO EL USUARIO QUE SE VA A CREAR
  public createUser(name: string, apellido: string, correo: string, telefono: string): User {
    //CREAMOS UN OBJETO QUE SERA EL NUEVO USUARIO, A ESTE SE LE ASIGNA SU ID USANDO LA PROPIEDAD QUE DECLARAMOS
    //ANTES LLAMADA NEXT ID Y QUE ESTA SE VAYA INCREMENTANDO PARA EL SIGUIENTE USUARIO  
    const newUser = {
          id: this.nextId++,
          name,
          apellido,
          correo,
          telefono
      };
      //EL USUARIO CREADO SE AGREGA AL ARREGLO DE USERS QUE FUE INSTANCIADO EN USER MANAGER
      this.users.push(newUser);
      return newUser;//DEVUELVE EL USER CREADO
  }
//DEFINIMOS METODO PARA OBTENER TODOS LOS USERS ALMACENADOS EN EL ARREGLO DE USER
  public getAllUsers(): User[] {
      return this.users;
  }
//DEFINIMOS UN METODO QUE RECIBE EL PARAMETRO ID PARA ENCONTRAR AL USER POR ID
//SI NO LO ENCUENTRA EL USER SERA UNDEFI 
//Y SI LO ENCUENTRA DEVUELVE LA INFO DE ESE USER EN ESPECIFICO
  public getUserById(id: number): User | undefined {
      return this.users.find(user => user.id === id);
  }
//DEFINIMOS METODO UPDATE USER PARA ACTUALIZAR LA INFO DEL USER EXISTENTE
  public updateUser(id: number, name: string, apellido: string, correo: string, telefono: string): User | undefined {
      const user = this.users.find(user => user.id === id);
      if (user) {
          user.name = name;
          user.apellido = apellido;
          user.correo = correo;
          user.telefono = telefono;
      }
      return user;
  }
//DEFINIMOS METODO DELETE PARA ELIMINAR USER CON SU ID EN ESPECIFICO
//SPLICE ES UN METODO PARA CAMBIAR EL CONTENIDO DE UN ARREGLO
//SI EXISTE ELIMINA AL USER Y SI NO NO
  public deleteUser(id: number): boolean {
      const index = this.users.findIndex(user => user.id === id);
      if (index !== -1) {
          this.users.splice(index, 1);
          return true;
      }
      return false;
  }
}
