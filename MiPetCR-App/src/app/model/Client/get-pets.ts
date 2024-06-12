//{
//    "id": "number",
//    "ced_dueno": "number",
//    "especie": "string",
//    "raza": string,
//    "nombre": "string"
//  }

export interface PetI {
    id: number | null;
    ced_dueno: number | null;
    especie: string | null;
    raza: number | null;
    nombre: string | null;
}

export interface PetHistoryI {
    int_historial: number | null;
    fecha: string | null;
    descripcion: string | null;
    detalles: number | null;
}