//{
//    "codigo": "string",
//    "descripcion": "string",
//    "marca": "string",
//    "precio": 0.0,
//    "categoria": "string",
//    "cantidad_disponible": 0
//  }
export interface ProductI {
    codigo: string | null;
    descripcion: string | null;
    marca: string | null;
    precio: number | null;
    categoria: string | null;
    cantidad_disponible: number | null;
}