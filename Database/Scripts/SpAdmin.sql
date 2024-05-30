/*-------------------------------------
|                                     |
|       Store Procedures Admin        |
|                                     |
-------------------------------------*/

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

-- >>> Store Procedure para insertar nuevos usuarios (ya implementado en SpLogin) (up_InsertarUsuario) <<<

-- >>> Store Procedure para recuperar los expedientes médicos <<<

-- >>> Store Procedure para obtener los productos de la tienda <<<

-- >>> Store Procedure para insertar productos a la tienda <<<

-- >>> Store Procedure para editar productos ya existentes <<<

-- >>> Store Procedure para ver todas las ordenes de compra <<<

-- >>> Store Procedure para obtener las sucursales <<<

-- >>> Store Procedure para insertar nuevas sucursales <<<

-- >>> Store Procedure para editar las sucursales <<<
