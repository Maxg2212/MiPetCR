/*-------------------------------------
|                                     |
|       Store Procedures Login        |
|                                     |
-------------------------------------*/

-- Cambia el contexto a la base de datos 'MyPetsCR'.
USE MyPetsCR
GO

-- >>> Crear la función para cifrar la contraseña con SHA-256 <<<
IF OBJECT_ID(N'dbo.fn_CifrarContrasena', N'FN') IS NOT NULL
    DROP FUNCTION dbo.fn_CifrarContrasena;
GO
CREATE FUNCTION fn_CifrarContrasena (
    @contrasena VARCHAR(64)
)
RETURNS VARCHAR(64)
AS
BEGIN
    DECLARE @contrasenaSHA256 VARCHAR(64);
    SET @contrasenaSHA256 = CONVERT(VARCHAR(64), HASHBYTES('MD5', @contrasena), 2);
    RETURN @contrasenaSHA256;
END;
GO
-------------------------------------------------------------------

-- >>> Crear el procedimiento almacenado para insertar un nuevo usuario <<<
IF OBJECT_ID(N'dbo.up_InsertarUsuario', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_InsertarUsuario;
GO
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
-------------------------------------------------------------------

-- >>> Procedimiento para verificar el inicio de sesión del usuario <<<
IF OBJECT_ID(N'dbo.up_VerificarInicioSesion', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_VerificarInicioSesion;
GO
CREATE PROCEDURE up_VerificarInicioSesion
    @correo VARCHAR(30),
    @contrasena VARCHAR(64),
    @resultado BIT OUTPUT
AS
BEGIN
    -- Llamar a la función para cifrar la contraseña
    DECLARE @contrasenaCifrada VARCHAR(64);
    SET @contrasenaCifrada = dbo.fn_CifrarContrasena(@contrasena);

    -- Obtener la contraseña almacenada en la base de datos para el correo dado
    DECLARE @contrasenaBD VARCHAR(64);
    SELECT @contrasenaBD = contrasena
    FROM Usuario
    WHERE correo = @correo;

    SET @resultado = 0;

    -- Verificar si la contraseña es correcta
    IF @contrasenaBD IS NULL
    BEGIN
        SET @resultado = 0; -- Falso (correo no encontrado)
    END
    ELSE IF @contrasenaBD = @contrasena
    BEGIN
        SET @resultado = 1; -- Verdadero (inicio de sesión exitoso)
    END
    ELSE
    BEGIN
        SET @resultado = 0; -- Falso (contraseña incorrecta)
    END
END;
GO  
-------------------------------------------------------------------

-- >>> Procedimiento para actualizar la contraseña de un usuario <<<
IF OBJECT_ID(N'dbo.up_ActualizarContrasena', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_ActualizarContrasena;
GO
CREATE PROCEDURE up_ActualizarContrasena
    @correo VARCHAR(30),
    @contrasena VARCHAR(64)
AS
BEGIN
    DECLARE @contrasenaCifrada VARCHAR(64);
    SET @contrasenaCifrada = dbo.fn_CifrarContrasena(@contrasena);
    
    UPDATE Usuario SET contrasena = @contrasenaCifrada WHERE correo = @correo;
END


