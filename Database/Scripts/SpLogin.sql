/*-------------------------------------
|                                     |
|       Store Procedures Login        |
|                                     |
-------------------------------------*/

-- Eliminar la función si ya existe
IF OBJECT_ID(N'dbo.fn_CifrarContrasena', N'FN') IS NOT NULL
    DROP FUNCTION dbo.fn_CifrarContrasena;
GO

-- Crear la función para cifrar la contraseña con SHA-256
CREATE FUNCTION fn_CifrarContrasena (
    @contrasena VARCHAR(64)
)
RETURNS VARCHAR(64)
AS
BEGIN
    DECLARE @contrasenaSHA256 VARCHAR(64);
    SET @contrasenaSHA256 = CONVERT(VARCHAR(64), HASHBYTES('SHA2_256', @contrasena), 2);
    RETURN @contrasenaSHA256;
END;
GO

-- Eliminar el procedimiento almacenado si ya existe
IF OBJECT_ID(N'dbo.up_InsertarUsuario', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_InsertarUsuario;
GO

-- Crear el procedimiento almacenado para insertar un nuevo usuario
CREATE PROCEDURE up_InsertarUsuario
    @cedula NUMERIC(10),
    @rol_id NUMERIC(1),
    @correo VARCHAR(30),
    @contrasena VARCHAR(64),
    @nombre VARCHAR(80),
    @telefono NUMERIC(8)
AS
BEGIN
    -- Llamar a la función para cifrar la contraseña
    DECLARE @contrasenaCifrada VARCHAR(64);
    SET @contrasenaCifrada = dbo.fn_CifrarContrasena(@contrasena);

    -- Insertar el nuevo usuario en la tabla Usuario
    INSERT INTO Usuario (cedula, rol_id, correo, contrasena, nombre, telefono)
    VALUES (@cedula, @rol_id, @correo, @contrasenaCifrada, @nombre, @telefono);
END;
GO

-- Eliminar el procedimiento almacenado si ya existe
IF OBJECT_ID(N'dbo.up_InsertarUsuario', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_InsertarUsuario;
GO

-- Crear el procedimiento almacenado para insertar un nuevo usuario
CREATE PROCEDURE up_InsertarUsuario
    @cedula NUMERIC(10),
    @rol_id NUMERIC(1),
    @correo VARCHAR(30),
    @contrasena VARCHAR(64),
    @nombre VARCHAR(80),
    @telefono NUMERIC(8)
AS
BEGIN
    -- Llamar a la función para cifrar la contraseña
    DECLARE @contrasenaCifrada VARCHAR(64);
    SET @contrasenaCifrada = dbo.fn_CifrarContrasena(@contrasena);

    -- Insertar el nuevo usuario en la tabla Usuario
    INSERT INTO Usuario (cedula, rol_id, correo, contrasena, nombre, telefono)
    VALUES (@cedula, @rol_id, @correo, @contrasenaCifrada, @nombre, @telefono);
END;
GO

-- Crear el procedimiento almacenado para recuperar todos los usuarios con su información y su rol
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






