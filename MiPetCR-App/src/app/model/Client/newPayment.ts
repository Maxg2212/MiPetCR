
export interface ProductI {
    codProducto: string | null;
}


export interface PlanI {
    userCed: number | null;
    metodoPago: string | null;
    correoUsuario: string | null;
    telefonoUsuario: number | null;
    provincia: string | null;
    canton: string | null;
    distrito: string | null;
    domicilio: string | null;
    productos: (ProductI | null)[];
}


export interface PlanFormsI {
    metodoPago: string | null;
    provincia: string | null;
    canton: string | null;
    distrito: string | null;
    domicilio: string | null;
}