USE master
GO

IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = N'MyPetsCR'
)
CREATE DATABASE MyPetsCR
GO

USE MyPetsCR
GO

IF OBJECT_ID('ListaCompras', 'U') IS NOT NULL
DROP TABLE ListaCompras
GO

IF OBJECT_ID('DireccionEntrega', 'U') IS NOT NULL
DROP TABLE DireccionEntrega
GO

IF OBJECT_ID('UsuarioInvitado', 'U') IS NOT NULL
DROP TABLE UsuarioInvitado
GO

IF OBJECT_ID('OrdenCompra', 'U') IS NOT NULL
DROP TABLE OrdenCompra
GO

IF OBJECT_ID('CitaMedica', 'U') IS NOT NULL
DROP TABLE CitaMedica
GO

IF OBJECT_ID('HistorialMedico', 'U') IS NOT NULL
DROP TABLE HistorialMedico
GO

IF OBJECT_ID('TratamientoProducto', 'U') IS NOT NULL
DROP TABLE TratamientoProducto
GO

IF OBJECT_ID('Mascota', 'U') IS NOT NULL
DROP TABLE Mascota
GO

IF OBJECT_ID('TrabajaEn', 'U') IS NOT NULL
DROP TABLE TrabajaEn
GO

IF OBJECT_ID('Veterinaria', 'U') IS NOT NULL
DROP TABLE Veterinaria
GO

IF OBJECT_ID('Usuario', 'U') IS NOT NULL
DROP TABLE Usuario
GO

IF OBJECT_ID('RolUsuario', 'U') IS NOT NULL
DROP TABLE RolUsuario
GO

CREATE TABLE RolUsuario (
    id NUMERIC(1) IDENTITY(1,1) NOT NULL,
    rol_nombre VARCHAR(15) NOT NULL,
    CONSTRAINT RolUsuario_PK PRIMARY KEY(id)
);

CREATE TABLE Usuario (
    cedula NUMERIC(10) NOT NULL,
    rol_id NUMERIC(1) NOT NULL,
    correo VARCHAR(30) NOT NULL,
    contrasena VARCHAR(64) NOT NULL,
    nombre VARCHAR(80) NOT NULL,
    telefono NUMERIC(8) NOT NULL
    CONSTRAINT Usuario_PK PRIMARY KEY(cedula),
    CONSTRAINT Usuario_FK FOREIGN KEY(rol_id) REFERENCES RolUsuario(id)
);

CREATE TABLE Veterinaria (
    id NUMERIC(1) IDENTITY(1,1) NOT NULL,
    provincia VARCHAR(50) NOT NULL,
    canton VARCHAR(50) NOT NULL,
    distrito VARCHAR(50) NOT NULL,
    domicilio VARCHAR(50) NOT NULL,
    CONSTRAINT Veterinaria_PK PRIMARY KEY(id)
);

CREATE TABLE TrabajaEn (
    user_ced NUMERIC(10) NOT NULL,
    id_veterinaria NUMERIC(1) NOT NULL,
    CONSTRAINT TrabajaEn_FK1 FOREIGN KEY(user_ced) REFERENCES Usuario(cedula),
    CONSTRAINT TrabajaEn_FK2 FOREIGN KEY(id_veterinaria) REFERENCES Veterinaria(id)
);

CREATE TABLE Mascota (
    id NUMERIC IDENTITY(1,1) NOT NULL,
    ced_dueno NUMERIC(10) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    raza VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    CONSTRAINT Mascota_PK PRIMARY KEY(id),
    CONSTRAINT Mascota_FK FOREIGN KEY(ced_dueno) REFERENCES Usuario(cedula)
);

CREATE TABLE TratamientoProducto (
    id NUMERIC IDENTITY(1,1) NOT NULL,
    titulo VARCHAR(30) NOT NULL,
    descripcion VARCHAR(300) NOT NULL,
    precio MONEY NOT NULL,
    proc_med BIT NOT NULL,
    CONSTRAINT TratamientoProducto_PK PRIMARY KEY(id),
);

CREATE TABLE HistorialMedico (
    id NUMERIC IDENTITY(1,1) NOT NULL,
    fecha DATE NOT NULL,
    detalles VARCHAR(300) NOT NULL,
    id_mascota NUMERIC NOT NULL,
    id_tratamiento NUMERIC NOT NULL,
    CONSTRAINT HistorialMedico_PK PRIMARY KEY(id),
    CONSTRAINT HistorialMedico_FK1 FOREIGN KEY(id_mascota) REFERENCES Mascota(id),
    CONSTRAINT HistorialMedico_FK2 FOREIGN KEY(id_tratamiento) REFERENCES TratamientoProducto(id)
);

CREATE TABLE CitaMedica (
    id NUMERIC IDENTITY(1,1) NOT NULL,
    user_ced NUMERIC(10) NOT NULL,
    id_veterinaria NUMERIC(1) NOT NULL,
    id_mascota NUMERIC NOT NULL,
    fecha DATE NOT NULL,
    hora_ingreso TIME NOT NULL,
    hora_salida TIME NOT NULL,
    CONSTRAINT CitaMedica_PK PRIMARY KEY(id),
    CONSTRAINT CitaMedica_FK1 FOREIGN KEY(user_ced) REFERENCES Usuario(cedula),
    CONSTRAINT CitaMedica_FK2 FOREIGN KEY(id_veterinaria) REFERENCES Veterinaria(id),
    CONSTRAINT CitaMedica_FK3 FOREIGN KEY(id_mascota) REFERENCES Mascota(id)
);

CREATE TABLE OrdenCompra (
    id NUMERIC IDENTITY(1,1) NOT NULL,
    user_ced NUMERIC(10) NOT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    metodo_pago VARCHAR(20) NOT NULL,
    CONSTRAINT OrdenCompra_PK PRIMARY KEY(id),
    CONSTRAINT OrdenCompra_FK FOREIGN KEY(user_ced) REFERENCES Usuario(cedula)
);

CREATE TABLE UsuarioInvitado (
    cedula NUMERIC(10) NOT NULL,
    id_orden NUMERIC NOT NULL,
    correo VARCHAR(30) NOT NULL,
    telefono NUMERIC(8) NOT NULL,
    CONSTRAINT UsuarioInvitado_PK PRIMARY KEY(cedula),
    CONSTRAINT UsuarioInvitado_FK FOREIGN KEY(id_orden) REFERENCES OrdenCompra(id)
);

CREATE TABLE DireccionEntrega (
    provincia VARCHAR(50) NOT NULL,
    canton VARCHAR(50) NOT NULL,
    distrito VARCHAR(50) NOT NULL,
    domicilio VARCHAR(50) NOT NULL,
    id_orden NUMERIC NOT NULL,
    CONSTRAINT DireccionEntrega_FK FOREIGN KEY(id_orden) REFERENCES OrdenCompra(id)
);

CREATE TABLE ListaCompras (
    id_orden NUMERIC NOT NULL,
    id_producto NUMERIC NOT NULL,
    CONSTRAINT ListaCompras_FK1 FOREIGN KEY(id_orden) REFERENCES OrdenCompra(id),
    CONSTRAINT ListaCompras_FK2 FOREIGN KEY(id_producto) REFERENCES TratamientoProducto(id)
);


