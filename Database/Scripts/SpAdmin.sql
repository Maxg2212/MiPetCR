/*-------------------------------------
|                                     |
|       Store Procedures Admin        |
|                                     |
-------------------------------------*/

-- Cambia el contexto a la base de datos 'MyPetsCR'.
USE MyPetsCR
GO

-- >>> Crear el procedimiento almacenado para recuperar todos los usuarios con su información y su rol <<<
IF OBJECT_ID(N'dbo.up_RecuperarUsuarios', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_RecuperarUsuarios;
GO
CREATE PROCEDURE up_RecuperarUsuarios
AS
BEGIN
    -- Seleccionar todos los usuarios junto con su información y el nombre del rol
    SELECT 
        A.cedula,        -- Identificación única del usuario
        A.correo,        -- Correo electrónico del usuario
        A.nombre,        -- Nombre del usuario
        A.telefono,      -- Teléfono del usuario
        B.rol_nombre     -- Nombre del rol asociado al usuario
    FROM Usuario AS A JOIN RolUsuario AS B ON A.rol_id = B.id; 
END;
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para insertar nuevos usuarios (ya implementado en SpLogin) (up_InsertarUsuario) <<<

-- >>> Store Procedure para recuperar los expedientes médicos <<<
IF OBJECT_ID(N'dbo.up_RecuperarExpedientes', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_RecuperarUsuarios;
GO
CREATE PROCEDURE up_RecuperarExpedientes
AS
BEGIN
    SELECT D.nombre AS Dueño, C.nombre, C.especie, C.Raza, B.descripcion AS Tratamiento, A.fecha, A.detalles 
    FROM HistorialMedico AS A 
         JOIN TratamientoProducto AS B ON A.cod_tratamiento = B.codigo
         JOIN Mascota AS C ON A.id_mascota = C.id
         JOIN Usuario AS D ON C.ced_dueno = D.cedula
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para obtener los productos de la tienda <<<
IF OBJECT_ID(N'dbo.up_RecuperarProductos', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_RecuperarProductos;
GO
CREATE PROCEDURE up_RecuperarProductos
AS
BEGIN
    SELECT codigo, descripcion, marca, precio, categoria, cantidad_disponible
    FROM TratamientoProducto
    WHERE proc_med = 0;
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para insertar productos a la tienda <<<
IF OBJECT_ID(N'dbo.up_InsertarProductos', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_InsertarProductos;
GO
CREATE PROCEDURE up_InsertarProductos
    @codigo VARCHAR(7),
    @descripcion VARCHAR(300),
    @marca VARCHAR(20),
    @precio MONEY,
    @iva FLOAT,
    @cantidad_disponible INTEGER,
    @categoria VARCHAR(80),
    @proc_med BIT
AS
BEGIN
    INSERT INTO TratamientoProducto(codigo, descripcion, marca, precio, iva, cantidad_disponible, categoria)
    VALUES(@codigo, @descripcion, @marca, @precio, @iva, @cantidad_disponible, @categoria)
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para editar productos ya existentes <<<
IF OBJECT_ID(N'dbo.up_EditarProductos', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_EditarProductos;
GO
CREATE PROCEDURE up_EditarProductos
    @codigo VARCHAR(7),
    @descripcion VARCHAR(300),
    @marca VARCHAR(20),
    @precio MONEY,
    @iva FLOAT,
    @cantidad_disponible INTEGER,
    @categoria VARCHAR(80),
    @proc_med BIT
AS
BEGIN
    UPDATE TratamientoProducto SET 
        descripcion = @descripcion, 
        marca = @marca, 
        precio = @precio, 
        iva = @iva, 
        cantidad_disponible = @cantidad_disponible, 
        categoria = @categoria
    WHERE codigo = @codigo;
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para ver todas las ordenes de compra (FALTAN USERS NO REG) <<<
IF OBJECT_ID(N'dbo.up_RecuperarOrdenes', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_RecuperarOrdenes;
GO
CREATE PROCEDURE up_RecuperarOrdenes
AS
BEGIN
    SELECT A.id, B.nombre, B.correo, A.fecha, A.hora, A.metodo_pago
    FROM OrdenCompra AS A JOIN Usuario AS B ON A.user_ced = B.cedula
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para ver los productos comprados en una orden <<<
IF OBJECT_ID(N'dbo.up_RecuperarProductosOrden', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_RecuperarProductosOrden;
GO
CREATE PROCEDURE up_RecuperarProductosOrden
    @id_orden NUMERIC
AS
BEGIN
    SELECT A.cod_producto, B.descripcion
    FROM ListaCompras AS A JOIN TratamientoProducto AS B ON A.cod_producto = B.codigo
    WHERE A.id_orden = @id_orden;
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para obtener las sucursales <<<
IF OBJECT_ID(N'dbo.up_RecuperarSucursales', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_RecuperarSucursales;
GO
CREATE PROCEDURE up_RecuperarSucursales
AS
BEGIN
    SELECT id, provincia, canton, distrito, domicilio
    FROM Veterinaria
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para insertar nuevas sucursales <<<
IF OBJECT_ID(N'dbo.up_InsertarSucursales', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_InsertarSucursales;
GO
CREATE PROCEDURE up_InsertarSucursales
    @provincia VARCHAR(50), 
    @canton VARCHAR(50), 
    @distrito VARCHAR(50), 
    @domicilio VARCHAR(300)
AS
BEGIN
    INSERT INTO Veterinaria(provincia, canton, distrito, domicilio)
    VALUES(@provincia, @canton, @distrito, @domicilio)
END
GO
----------------------------------------------------------------------------

-- >>> Store Procedure para editar las sucursales <<<
IF OBJECT_ID(N'dbo.up_EditarSucursales', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_EditarSucursales;
GO
CREATE PROCEDURE up_EditarSucursales
    @id NUMERIC(1),
    @provincia VARCHAR(50), 
    @canton VARCHAR(50), 
    @distrito VARCHAR(50), 
    @domicilio VARCHAR(300)
AS
BEGIN
    UPDATE Veterinaria SET 
        provincia = @provincia, 
        canton = @canton, 
        distrito = @distrito, 
        domicilio = @domicilio
    WHERE id = @id
END
GO
----------------------------------------------------------------------------
