import { RolesBuilder } from 'nest-access-control'
//ROLES DE APP
export enum RolesApp {
    ADMIN    = 'ADMIN',
    EMPLOYEE = 'EMPLOYEE'
}
//RECURSOS DE APP
export enum ResourcesApp {
    PRODUCT = 'PRODUCT',
    USER = 'USER'
}

export const roles: RolesBuilder = new RolesBuilder()
    roles
        //rol de empleado
        .grant(RolesApp.EMPLOYEE)
        .createAny([ResourcesApp.PRODUCT])//Empleado puede crear cualquier producto 
        .readAny([ResourcesApp.PRODUCT]) //Empleado puede ver todos los productos
        .updateAny([ResourcesApp.PRODUCT]) //Empleado puede editar cualquier producto que este registrado asi el no sea el creador

        
        //rol de administrador
        .grant(RolesApp.ADMIN)
        .extend(RolesApp.EMPLOYEE) //hereda lo que puede hacer el empleado
        .deleteAny([ResourcesApp.PRODUCT]) //administrador puede eliminar cualquier producto
        .createAny([ResourcesApp.USER])//administrador puede crear cualquier usuario
        .readAny([ResourcesApp.USER])//administrador puede ver todos los usuario
        .updateAny([ResourcesApp.USER])//administrador puede editar cualquier usuario
       