-- Insertar roles de administrador, veterinario y cliente
INSERT INTO RolUsuario (rol_nombre) VALUES ('Administrador');
INSERT INTO RolUsuario (rol_nombre) VALUES ('Veterinario');
INSERT INTO RolUsuario (rol_nombre) VALUES ('Cliente');

-- Obtener los IDs de los roles de administrador
DECLARE @adminRoleId NUMERIC(1);
SELECT @adminRoleId = id FROM RolUsuario WHERE rol_nombre = 'administrador';

-- Insertar los administradores
INSERT INTO Usuario (cedula, rol_id, correo, contrasena, nombre, telefono)
VALUES 
    (1234567890, @adminRoleId, 'admin1@gmail.com', CONVERT(VARCHAR(32), HASHBYTES('MD5', 'admin123'), 2), 'Ricardo Borbón Mena', 25411659),
    (1234567891, @adminRoleId, 'admin2@gmail.com', CONVERT(VARCHAR(32), HASHBYTES('MD5', 'admin123'), 2), 'Max Garro Mora', 83154262);

-- SELECT * FROM RolUsuario;
-- SELECT * FROM Usuario;


