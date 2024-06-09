/*-------------------------------------
|                                     |
|       Store Procedures Cliente      |
|                                     |
-------------------------------------*/

-- Cambia el contexto a la base de datos 'MyPetsCR'.
USE MyPetsCR
GO

-- >>> Store Procedure para recuperar los productos de la veterinaria (ya implementado en SpAdmin) (up_RecuperarProductos) <<< 

-- >>> Store Procedure para insertar una compra de un cliente no registrado (siguiente sprint)<<<

-- >>> Store Procedure para insertar una compra de un cliente registrado (siguiente sprint)<<<

-- >>> Store Procedure para recuperar las mascotas de un cliente <<<
IF OBJECT_ID(N'dbo.up_RecuperarMascotas', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_RecuperarMascotas;
GO
CREATE PROCEDURE up_RecuperarMascotas
    @ced_dueno NUMERIC(10)
AS
BEGIN
    SELECT id, especie, raza, nombre
    FROM Mascota 
    WHERE ced_dueno = @ced_dueno
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para insertar una nueva mascota <<<
IF OBJECT_ID(N'dbo.up_InsertarMascotas', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_InsertarMascotas;
GO
CREATE PROCEDURE up_InsertarMascotas
    @ced_dueno NUMERIC(10),
    @especie VARCHAR(50),
    @raza VARCHAR(50),
    @nombre VARCHAR(50)
AS
BEGIN
    INSERT INTO Mascota(ced_dueno, especie, raza, nombre)
    VALUES(@ced_dueno, @especie, @raza, @nombre)
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para editar la informacion de una mascota <<<
IF OBJECT_ID(N'dbo.up_EditarMascotas', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_EditarMascotas;
GO
CREATE PROCEDURE up_EditarMascotas
    @id NUMERIC,
    @ced_dueno NUMERIC(10),
    @especie VARCHAR(50),
    @raza VARCHAR(50),
    @nombre VARCHAR(50)
AS
BEGIN
    UPDATE Mascota SET ced_dueno = @ced_dueno, 
    especie = @especie, 
    raza = @raza, 
    nombre = @nombre
    WHERE id = @id
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para visualizar el historial medico de una mascota <<<
IF OBJECT_ID(N'dbo.up_RecuperarHistorialMedico', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_RecuperarHistorialMedico;
GO
CREATE PROCEDURE up_RecuperarHistorialMedico
    @id_mascota NUMERIC
AS
BEGIN
    SELECT A.id, A.fecha, B.descripcion AS tratamiento, A.detalles
    FROM HistorialMedico AS A JOIN TratamientoProducto AS B ON A.cod_tratamiento = B.codigo
    WHERE A.id_mascota = @id_mascota
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para recuperar el historial de compras del cliente <<<
IF OBJECT_ID(N'dbo.up_RecuperarCompras', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_RecuperarCompras;
GO
CREATE PROCEDURE up_RecuperarCompras
    @user_ced NUMERIC(10)
AS
BEGIN
    SELECT id, fecha, hora, metodo_pago
    FROM OrdenCompra
    WHERE user_ced = @user_ced
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para ver los productos comprados en una orden (ya implementado en SpAdmin) (up_RecuperarProductosOrden)<<<

-- >>> Store Procedure para ver los productos comprados en una orden (ya implementado en SpAdmin) (up_RecuperarProductosOrden) <<<

-- >>> Store Procedure obtener todas las citas (ya implementado en SpAdmin) (up_RecuperarCitas) <<<

-- >>> Store Procedure para insertar una nueva cita medica (ya implementado en SpAdmin) (up_InsertarCita) <<<

-- >>> Store Procedure para recuperar su información personal <<<
IF OBJECT_ID(N'dbo.up_RecuperarInfoPersonal', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_RecuperarInfoPersonal;
GO
CREATE PROCEDURE up_RecuperarInfoPersonal
    @ced NUMERIC(10)
AS
BEGIN
    SELECT cedula, nombre, correo, telefono
    FROM Usuario
    WHERE cedula = @ced
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para editar su información personal <<<
IF OBJECT_ID(N'dbo.up_EditarInfoPersonal', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_EditarInfoPersonal;
GO
CREATE PROCEDURE up_EditarInfoPersonal
    @ced NUMERIC(10),
    @nombre VARCHAR(50),
    @correo VARCHAR(50),
    @telefono NUMERIC(8)
AS
BEGIN
    UPDATE Usuario SET nombre = @nombre, correo = @correo, telefono = @telefono
    WHERE cedula = @ced
END