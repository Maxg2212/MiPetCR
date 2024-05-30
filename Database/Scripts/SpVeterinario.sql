/*-------------------------------------
|                                     |
|     Store Procedures Veterinario    |
|                                     |
-------------------------------------*/

-- >>> Store Procedure para recuperar los registros una mascota (ya implementado en SpCliente) (up_RecuperarHistorialMedico) <<< 

-- >>> Store Procedure para insertar un nuevo registro al historial medico <<<
IF OBJECT_ID(N'dbo.up_InsertarHistorialMedico', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_InsertarHistorialMedico;
GO
CREATE PROCEDURE up_InsertarHistorialMedico
    @fecha DATE,
    @detalles VARCHAR(300),
    @id_mascota NUMERIC,
    @cod_tratamiento VARCHAR(7)
AS
BEGIN
    INSERT INTO HistorialMedico(fecha, detalles, id_mascota, cod_tratamiento)
    VALUES (@fecha, @detalles, @id_mascota, @cod_tratamiento);
END
GO
-- >>> Store Procedure para modificar un registro de expediente medico <<<

IF OBJECT_ID(N'dbo.up_InsertarHistorialMedico', N'P') IS NOT NULL
    DROP PROCEDURE dbo.up_InsertarHistorialMedico;
GO
CREATE PROCEDURE up_InsertarHistorialMedico
    @id NUMERIC,
    @fecha DATE,
    @detalles VARCHAR(300),
    @id_mascota NUMERIC,
    @cod_tratamiento VARCHAR(7)
AS
BEGIN
    UPDATE HistorialMedico SET 
        fecha = @fecha, 
        detalles = @detalles, 
        id_mascota = @id_mascota, 
        cod_tratamiento = cod_tratamiento
    WHERE id = @id;
END
GO