-- Usa la base de datos 'master' del servidor SQL.
USE master
GO

-- Verifica si la base de datos 'MyPetsCR' no existe.
IF NOT EXISTS (
    SELECT name
    FROM sys.databases
    WHERE name = N'MyPetsCR'
)
-- Si no existe, crea la base de datos 'MyPetsCR'.
CREATE DATABASE MyPetsCR
GO

-- Cambia el contexto a la base de datos 'MyPetsCR'.
USE MyPetsCR
GO

-- Verifica si la tabla 'ListaCompras' existe. Si es así, la elimina.
IF OBJECT_ID('ListaCompras', 'U') IS NOT NULL
DROP TABLE ListaCompras
GO

-- Verifica si la tabla 'DireccionEntrega' existe. Si es así, la elimina.
IF OBJECT_ID('DireccionEntrega', 'U') IS NOT NULL
DROP TABLE DireccionEntrega
GO

-- Verifica si la tabla 'UsuarioInvitado' existe. Si es así, la elimina.
IF OBJECT_ID('UsuarioInvitado', 'U') IS NOT NULL
DROP TABLE UsuarioInvitado
GO

-- Verifica si la tabla 'OrdenCompra' existe. Si es así, la elimina.
IF OBJECT_ID('OrdenCompra', 'U') IS NOT NULL
DROP TABLE OrdenCompra
GO

-- Verifica si la tabla 'CitaMedica' existe. Si es así, la elimina.
IF OBJECT_ID('CitaMedica', 'U') IS NOT NULL
DROP TABLE CitaMedica
GO

-- Verifica si la tabla 'HistorialMedico' existe. Si es así, la elimina.
IF OBJECT_ID('HistorialMedico', 'U') IS NOT NULL
DROP TABLE HistorialMedico
GO

-- Verifica si la tabla 'TratamientoProducto' existe. Si es así, la elimina.
IF OBJECT_ID('TratamientoProducto', 'U') IS NOT NULL
DROP TABLE TratamientoProducto
GO

-- Verifica si la tabla 'Mascota' existe. Si es así, la elimina.
IF OBJECT_ID('Mascota', 'U') IS NOT NULL
DROP TABLE Mascota
GO

-- Verifica si la tabla 'TrabajaEn' existe. Si es así, la elimina.
IF OBJECT_ID('TrabajaEn', 'U') IS NOT NULL
DROP TABLE TrabajaEn
GO

-- Verifica si la tabla 'Veterinaria' existe. Si es así, la elimina.
IF OBJECT_ID('Veterinaria', 'U') IS NOT NULL
DROP TABLE Veterinaria
GO

-- Verifica si la tabla 'Usuario' existe. Si es así, la elimina.
IF OBJECT_ID('Usuario', 'U') IS NOT NULL
DROP TABLE Usuario
GO

-- Verifica si la tabla 'RolUsuario' existe. Si es así, la elimina.
IF OBJECT_ID('RolUsuario', 'U') IS NOT NULL
DROP TABLE RolUsuario
GO

-- Crea la tabla 'RolUsuario' con dos columnas: id y rol_nombre.
CREATE TABLE RolUsuario (
    id NUMERIC(1) IDENTITY(1,1) NOT NULL, -- Identificador numérico que se incrementa automáticamente.
    rol_nombre VARCHAR(15) NOT NULL, -- Nombre del rol.
    CONSTRAINT RolUsuario_PK PRIMARY KEY(id) -- Llave primaria en la columna 'id'.
);

-- Crea la tabla 'Usuario' con varias columnas, incluyendo una clave foránea a 'RolUsuario'.
CREATE TABLE Usuario (
    cedula NUMERIC(10) NOT NULL, -- Identificación única del usuario.
    rol_id NUMERIC(1) NOT NULL, -- Identificador del rol del usuario.
    correo VARCHAR(30) NOT NULL, -- Correo electrónico del usuario.
    contrasena VARCHAR(64) NOT NULL, -- Contraseña del usuario.
    nombre VARCHAR(80) NOT NULL, -- Nombre del usuario.
    telefono NUMERIC(8) NOT NULL -- Teléfono del usuario.
    CONSTRAINT Usuario_PK PRIMARY KEY(cedula), -- Llave primaria en 'cedula'.
    CONSTRAINT Usuario_FK FOREIGN KEY(rol_id) REFERENCES RolUsuario(id), -- Llave foránea a 'RolUsuario'.
    CONSTRAINT Usuario_Unique_Correo UNIQUE(correo) -- Hacer que el correo sea único
);

-- Crea la tabla 'Veterinaria' con varias columnas.
CREATE TABLE Veterinaria (
    id NUMERIC(1) IDENTITY(1,1) NOT NULL, -- Identificador numérico que se incrementa automáticamente.
    provincia VARCHAR(50) NOT NULL, -- Provincia de la veterinaria.
    canton VARCHAR(50) NOT NULL, -- Cantón de la veterinaria.
    distrito VARCHAR(50) NOT NULL, -- Distrito de la veterinaria.
    domicilio VARCHAR(300) NOT NULL, -- Dirección de la veterinaria.
    CONSTRAINT Veterinaria_PK PRIMARY KEY(id) -- Llave primaria en 'id'.
);

-- Crea la tabla 'TrabajaEn' con dos claves foráneas a 'Usuario' y 'Veterinaria'.
CREATE TABLE TrabajaEn (
    user_ced NUMERIC(10) NOT NULL, -- Identificación del usuario.
    id_veterinaria NUMERIC(1) NOT NULL, -- Identificación de la veterinaria.
    CONSTRAINT TrabajaEn_FK1 FOREIGN KEY(user_ced) REFERENCES Usuario(cedula), -- Llave foránea a 'Usuario'.
    CONSTRAINT TrabajaEn_FK2 FOREIGN KEY(id_veterinaria) REFERENCES Veterinaria(id) -- Llave foránea a 'Veterinaria'.
);

-- Crea la tabla 'Mascota' con varias columnas, incluyendo una clave foránea a 'Usuario'.
CREATE TABLE Mascota (
    id NUMERIC IDENTITY(1,1) NOT NULL, -- Identificador numérico que se incrementa automáticamente.
    ced_dueno NUMERIC(10) NOT NULL, -- Identificación del dueño.
    especie VARCHAR(50) NOT NULL, -- Especie de la mascota.
    raza VARCHAR(50) NOT NULL, -- Raza de la mascota.
    nombre VARCHAR(50) NOT NULL, -- Nombre de la mascota.
    CONSTRAINT Mascota_PK PRIMARY KEY(id), -- Llave primaria en 'id'.
    CONSTRAINT Mascota_FK FOREIGN KEY(ced_dueno) REFERENCES Usuario(cedula) -- Llave foránea a 'Usuario'.
);

-- Crea la tabla 'TratamientoProducto' con varias columnas.
CREATE TABLE TratamientoProducto (
    codigo VARCHAR(7) NOT NULL, -- Identificador numérico que se incrementa automáticamente.
    descripcion VARCHAR(300) NOT NULL, -- Descripción del tratamiento o producto.
    marca VARCHAR(20), -- Información de la marca del producto.
    precio MONEY NOT NULL, -- Precio del tratamiento o producto.
    iva FLOAT, -- Porcentaje a aplicar de iva al precio
    cantidad_disponible INTEGER, -- Cantidad de unidades disponibles del producto
    categoria VARCHAR(80) NOT NULL, -- Información de la categoría a la que pertenece el producto
    proc_med BIT NOT NULL, -- Indicador si es un procedimiento médico.
    CONSTRAINT TratamientoProducto_PK PRIMARY KEY(codigo) -- Llave primaria en 'id'.
);

-- Crea la tabla 'HistorialMedico' con varias columnas, incluyendo dos claves foráneas a 'Mascota' y 'TratamientoProducto'.
CREATE TABLE HistorialMedico (
    id NUMERIC IDENTITY(1,1) NOT NULL, -- Identificador numérico que se incrementa automáticamente.
    fecha DATE NOT NULL, -- Fecha del historial médico.
    detalles VARCHAR(300) NOT NULL, -- Detalles del historial médico.
    id_mascota NUMERIC NOT NULL, -- Identificación de la mascota.
    cod_tratamiento VARCHAR(7) NOT NULL, -- Identificación del tratamiento o producto.
    CONSTRAINT HistorialMedico_PK PRIMARY KEY(id), -- Llave primaria en 'id'.
    CONSTRAINT HistorialMedico_FK1 FOREIGN KEY(id_mascota) REFERENCES Mascota(id), -- Llave foránea a 'Mascota'.
    CONSTRAINT HistorialMedico_FK2 FOREIGN KEY(cod_tratamiento) REFERENCES TratamientoProducto(codigo) -- Llave foránea a 'TratamientoProducto'.
);

-- Crea la tabla 'CitaMedica' con varias columnas, incluyendo tres claves foráneas a 'Usuario', 'Veterinaria' y 'Mascota'.
CREATE TABLE CitaMedica (
    id NUMERIC IDENTITY(1,1) NOT NULL, -- Identificador numérico que se incrementa automáticamente.
    user_ced NUMERIC(10) NOT NULL, -- Identificación del usuario.
    id_veterinaria NUMERIC(1) NOT NULL, -- Identificación de la veterinaria.
    id_mascota NUMERIC NOT NULL, -- Identificación de la mascota.
    fecha DATE NOT NULL, -- Fecha de la cita médica.
    hora_ingreso TIME NOT NULL, -- Hora de ingreso a la cita.
    hora_salida TIME NOT NULL, -- Hora de salida de la cita.
    CONSTRAINT CitaMedica_PK PRIMARY KEY(id), -- Llave primaria en 'id'.
    CONSTRAINT CitaMedica_FK1 FOREIGN KEY(user_ced) REFERENCES Usuario(cedula), -- Llave foránea a 'Usuario'.
    CONSTRAINT CitaMedica_FK2 FOREIGN KEY(id_veterinaria) REFERENCES Veterinaria(id), -- Llave foránea a 'Veterinaria'.
    CONSTRAINT CitaMedica_FK3 FOREIGN KEY(id_mascota) REFERENCES Mascota(id) -- Llave foránea a 'Mascota'.
);

-- Crea la tabla 'OrdenCompra' con varias columnas, incluyendo una clave foránea a 'Usuario'.
CREATE TABLE OrdenCompra (
    id NUMERIC IDENTITY(1,1) NOT NULL, -- Identificador numérico que se incrementa automáticamente.
    user_ced NUMERIC(10) NOT NULL, -- Identificación del usuario.
    fecha DATE NOT NULL, -- Fecha de la orden de compra.
    hora TIME NOT NULL, -- Hora de la orden de compra.
    metodo_pago VARCHAR(20) NOT NULL, -- Método de pago de la orden de compra.
    CONSTRAINT OrdenCompra_PK PRIMARY KEY(id), -- Llave primaria en 'id'.
    CONSTRAINT OrdenCompra_FK FOREIGN KEY(user_ced) REFERENCES Usuario(cedula) -- Llave foránea a 'Usuario'.
);

-- Crea la tabla 'UsuarioInvitado' con varias columnas, incluyendo una clave foránea a 'OrdenCompra'.
CREATE TABLE UsuarioInvitado (
    cedula NUMERIC(10) NOT NULL, -- Identificación única del usuario invitado.
    id_orden NUMERIC NOT NULL, -- Identificación de la orden de compra.
    correo VARCHAR(30) NOT NULL, -- Correo electrónico del usuario invitado.
    telefono NUMERIC(8) NOT NULL, -- Teléfono del usuario invitado.
    CONSTRAINT UsuarioInvitado_PK PRIMARY KEY(cedula), -- Llave primaria en 'cedula'.
    CONSTRAINT UsuarioInvitado_FK FOREIGN KEY(id_orden) REFERENCES OrdenCompra(id) -- Llave foránea a 'OrdenCompra'.
);

-- Crea la tabla 'DireccionEntrega' con varias columnas, incluyendo una clave foránea a 'OrdenCompra'.
CREATE TABLE DireccionEntrega (
    provincia VARCHAR(50) NOT NULL, -- Provincia de la dirección de entrega.
    canton VARCHAR(50) NOT NULL, -- Cantón de la dirección de entrega.
    distrito VARCHAR(50) NOT NULL, -- Distrito de la dirección de entrega.
    domicilio VARCHAR(50) NOT NULL, -- Domicilio de la dirección de entrega.
    id_orden NUMERIC NOT NULL, -- Identificación de la orden de compra.
    CONSTRAINT DireccionEntrega_FK FOREIGN KEY(id_orden) REFERENCES OrdenCompra(id) -- Llave foránea a 'OrdenCompra'.
);

-- Crea la tabla 'ListaCompras' con dos claves foráneas a 'OrdenCompra' y 'TratamientoProducto'.
CREATE TABLE ListaCompras (
    id_orden NUMERIC NOT NULL, -- Identificación de la orden de compra.
    cod_producto VARCHAR(7) NOT NULL, -- Identificación del tratamiento o producto.
    CONSTRAINT ListaCompras_FK1 FOREIGN KEY(id_orden) REFERENCES OrdenCompra(id), -- Llave foránea a 'OrdenCompra'.
    CONSTRAINT ListaCompras_FK2 FOREIGN KEY(cod_producto) REFERENCES TratamientoProducto(codigo) -- Llave foránea a 'TratamientoProducto'.
);



