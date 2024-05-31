// {
//     "cedula":"int",
//     "rol_id":"string",
//     "correo":"string",
//     "contrasena":"string",
//     "nombre":"string",
//      "telefono":"int"
//   }

export interface AddClientI {
    cedula: string | null;
    rol_id: string | null;
    correo: string | null;
    contrasena: string | null;
    nombre: string | null;
    telefono: number | null;
}