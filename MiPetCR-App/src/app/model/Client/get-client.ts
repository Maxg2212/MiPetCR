// {
//   "correo":"string"
// }


export interface GetClientI {
    correo: string;
}

export interface GetClientCedulaI {
    cedula: number;
}

export interface UpdateClienteI {
    cedula: number;
    correo: string;
    nombre: string;
    telefono: number;
}

export interface GetIdPetI {
    id: number;
}




