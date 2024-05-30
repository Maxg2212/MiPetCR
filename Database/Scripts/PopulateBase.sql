-- Cambia el contexto a la base de datos 'MyPetsCR'.
USE MyPetsCR
GO

-- Insertar roles de administrador, veterinario y cliente
INSERT INTO RolUsuario (rol_nombre) VALUES ('Administrador');
INSERT INTO RolUsuario (rol_nombre) VALUES ('Veterinario');
INSERT INTO RolUsuario (rol_nombre) VALUES ('Cliente');

-- Obtener los IDs de los roles de administrador
DECLARE @adminRoleId NUMERIC(1);
SELECT @adminRoleId = id FROM RolUsuario WHERE rol_nombre = 'Administrador';
DECLARE @VeterinarioRoleId NUMERIC(1);
SELECT @VeterinarioRoleId = id FROM RolUsuario WHERE rol_nombre = 'Veterinario';
DECLARE @ClienteRoleId NUMERIC(1);
SELECT @ClienteRoleId = id FROM RolUsuario WHERE rol_nombre = 'Cliente';

-- Insertar los administradores
INSERT INTO Usuario (cedula, rol_id, correo, contrasena, nombre, telefono)
VALUES 
    (1234567891, @adminRoleId, 'admin1@gmail.com', CONVERT(VARCHAR(32), HASHBYTES('MD5', 'admin123'), 2), 'Ricardo Borbón Mena', 25411659),
    (1234567892, @adminRoleId, 'admin2@gmail.com', CONVERT(VARCHAR(32), HASHBYTES('MD5', 'admin123'), 2), 'Max Garro Mora', 83154262),
    (1234567893, @VeterinarioRoleId, 'veterinario1@gmail.com', CONVERT(VARCHAR(32), HASHBYTES('MD5', 'admin123'), 2), 'Ricardo Borbón Mena', 25816853),
    (1234567894, @VeterinarioRoleId, 'veterinario2@gmail.com', CONVERT(VARCHAR(32), HASHBYTES('MD5', 'admin123'), 2), 'Max Garro Mora', 61485972),
    (1234567895, @ClienteRoleId, 'cliente1@gmail.com', CONVERT(VARCHAR(32), HASHBYTES('MD5', 'admin123'), 2), 'Ricardo Borbón Mena', 82528846),
    (1234567896, @ClienteRoleId, 'cliente2@gmail.com', CONVERT(VARCHAR(32), HASHBYTES('MD5', 'admin123'), 2), 'Max Garro Mora', 24953126);

-- Insertar las veterinarias
INSERT INTO Veterinaria (provincia, canton, distrito, domicilio) VALUES
    ('San Jose', 'San José', 'Catedral', 'Avenida Central, Calle 5, Edificio Blanco'),
    ('Cartago', 'Cartago', 'Oriental', 'Avenida 1, Calle 2, Frente al Parque Central'),
    ('Alajuela', 'Alajuela', 'San José', 'Calle Ancha, 300 metros norte del Hospital de Alajuela'),
    ('Heredia', 'Heredia', 'Mercedes', 'Calle 10, 100 metros oeste de la Iglesia Mercedes'),
    ('Puntarenas', 'Puntarenas', 'El Roble', 'Avenida 3, Calle 1, Edificio Amarillo, Frente al Mercado Central');

-- Insertar el lugar de trabajo del personal
INSERT INTO TrabajaEn(user_ced, id_veterinaria) VALUES
    (1234567893, 1),
    (1234567894, 2);

-- Insertar mascotas de clientes
INSERT INTO Mascota (ced_dueno, especie, raza, nombre) VALUES
    (1234567895, 'Perro', 'Labrador', 'Rex'),
    (1234567895, 'Gato', 'Siames', 'Mia'),
    (1234567895, 'Perro', 'Bulldog', 'Bruno'),
    (1234567896, 'Gato', 'Persa', 'Nina'),
    (1234567896, 'Perro', 'Poodle', 'Lola'),
    (1234567896, 'Perro', 'Chihuahua', 'Max');

-- Insertar los productos
INSERT INTO TratamientoProducto (codigo, descripcion, marca, precio, iva, cantidad_disponible, categoria, proc_med) VALUES
    ('PROD001', 'Alimento húmedo para gatos, sabor atún, 500 g', 'Kong', 35.24, 13, 13, 'Juguetes', 0),
    ('PROD002', 'Pienso para conejos, 1 kg', 'Hills', 72.83, 13, 39, 'Alimento para gatos', 0),
    ('PROD003', 'Pienso para conejos, 1 kg', 'Pedigree', 78.65, 13, 39, 'Vitaminas', 0),
    ('PROD004', 'Pelota resistente para perros, 10 cm de diámetro', 'Hills', 85.94, 13, 22, 'Accesorios', 0),
    ('PROD005', 'Bandeja sanitaria para gatos, 50x40 cm', 'Pedigree', 75.41, 13, 11, 'Juguetes', 0),
    ('PROD006', 'Rascador para gatos de cartón, 45 cm', 'Pedigree', 66.36, 13, 43, 'Antiparasitarios', 0),
    ('PROD007', 'Arnés ajustable para perros medianos', 'Kong', 18.8, 13, 37, 'Juguetes', 0),
    ('PROD008', 'Kit de primeros auxilios para mascotas', 'Cesar', 83.05, 13, 26, 'Juguetes', 0),
    ('PROD009', 'Cepillo de dientes para perros, mango largo', 'Whiskas', 53.64, 13, 39, 'Medicamentos', 0),
    ('PROD010', 'Bandeja sanitaria para gatos, 50x40 cm', 'Bayer', 94.6, 13, 38, 'Vitaminas', 0),
    ('PROD011', 'Suplemento de calcio para reptiles, 100 g', 'Frontline', 64.54, 13, 37, 'Medicamentos', 0),
    ('PROD012', 'Pelota resistente para perros, 10 cm de diámetro', 'Cesar', 20.69, 13, 44, 'Alimento para gatos', 0),
    ('PROD013', 'Cepillo de dientes para perros, mango largo', 'Cesar', 55.69, 13, 22, 'Antiparasitarios', 0),
    ('PROD014', 'Multivitamínico para perros y gatos, 30 tabletas', 'Whiskas', 47.65, 13, 45, 'Alimento para perros', 0),
    ('PROD015', 'Manta térmica para mascotas, 60x45 cm', 'Cesar', 86.66, 13, 45, 'Juguetes', 0),
    ('PROD016', 'Spray repelente de mosquitos para perros, 250 ml', 'Bayer', 8.27, 13, 18, 'Juguetes', 0),
    ('PROD017', 'Alimento húmedo para gatos, sabor atún, 500 g', 'Frontline', 43.34, 13, 18, 'Accesorios', 0),
    ('PROD018', 'Alimento seco para perros adultos, 20 kg', 'Pedigree', 38.1, 13, 38, 'Vitaminas', 0),
    ('PROD019', 'Bandeja sanitaria para gatos, 50x40 cm', 'Hills', 88.96, 13, 35, 'Alimento para gatos', 0),
    ('PROD020', 'Kit de primeros auxilios para mascotas', 'Whiskas', 53.58, 13, 47, 'Medicamentos', 0),
    ('PROD021', 'Juguete de cuerda para masticar, para perros', 'Frontline', 60.09, 13, 35, 'Juguetes', 0),
    ('PROD022', 'Pienso para conejos, 1 kg', 'Pedigree', 71.78, 13, 12, 'Medicamentos', 0),
    ('PROD023', 'Cepillo de dientes para perros, mango largo', 'Kong', 59.77, 13, 23, 'Productos de aseo', 0),
    ('PROD024', 'Comedero automático para mascotas, 3L', 'Frontline', 32.93, 13, 16, 'Accesorios', 0),
    ('PROD025', 'Cepillo de dientes para perros, mango largo', 'Kong', 15.06, 13, 34, 'Vitaminas', 0),
    ('PROD026', 'Correa retráctil para perros, hasta 20 kg, 5 m', 'Pedigree', 71.09, 13, 33, 'Juguetes', 0),
    ('PROD027', 'Casa para hamster con tubos, plástico', 'Whiskas', 61.82, 13, 11, 'Productos de aseo', 0),
    ('PROD028', 'Shampoo antipulgas para perros, 500 ml', 'Cesar', 70.74, 13, 15, 'Antiparasitarios', 0),
    ('PROD029', 'Collar antiparasitario para perro grande, efecto 8 meses', 'Hills', 49.74, 13, 34, 'Juguetes', 0),
    ('PROD030', 'Spray repelente de mosquitos para perros, 250 ml', 'Kong', 86.63, 13, 17, 'Alimento para gatos', 0),
    ('PROD031', 'Pienso para conejos, 1 kg', 'Bayer', 59.78, 13, 41, 'Antiparasitarios', 0),
    ('PROD032', 'Correa retráctil para perros, hasta 20 kg, 5 m', 'Cesar', 92.07, 13, 26, 'Antiparasitarios', 0),
    ('PROD033', 'Rascador para gatos de cartón, 45 cm', 'Hills', 23.66, 13, 37, 'Productos de aseo', 0),
    ('PROD034', 'Vestido para perros pequeños, diseño floral', 'Frontline', 81.11, 13, 32, 'Vitaminas', 0),
    ('PROD035', 'Rascador para gatos de cartón, 45 cm', 'Whiskas', 21.45, 13, 20, 'Medicamentos', 0),
    ('PROD036', 'Shampoo antipulgas para perros, 500 ml', 'Pedigree', 61.73, 13, 14, 'Antiparasitarios', 0),
    ('PROD037', 'Comida para peces tropicales, 250 g', 'Hills', 82.12, 13, 24, 'Medicamentos', 0),
    ('PROD038', 'Limpiador de oídos para mascotas, 150 ml', 'Frontline', 37.71, 13, 45, 'Juguetes', 0),
    ('PROD039', 'Collar antiparasitario para perro grande, efecto 8 meses', 'Cesar', 71.49, 13, 40, 'Juguetes', 0),
    ('PROD040', 'Vestido para perros pequeños, diseño floral', 'Whiskas', 35.66, 13, 10, 'Medicamentos', 0),
    ('PROD041', 'Shampoo antipulgas para perros, 500 ml', 'Pedigree', 39.89, 13, 40, 'Vitaminas', 0),
    ('PROD042', 'Comedero automático para mascotas, 3L', 'Bayer', 59.46, 13, 17, 'Vitaminas', 0),
    ('PROD043', 'Cepillo de dientes para perros, mango largo', 'Whiskas', 6.57, 13, 35, 'Alimento para perros', 0),
    ('PROD044', 'Alimento seco para perros adultos, 20 kg', 'Cesar', 98.27, 13, 10, 'Juguetes', 0),
    ('PROD045', 'Pienso para conejos, 1 kg', 'Pedigree', 88.7, 13, 10, 'Antiparasitarios', 0),
    ('PROD046', 'Kit de primeros auxilios para mascotas', 'Kong', 22.02, 13, 47, 'Juguetes', 0),
    ('PROD047', 'Comida para peces tropicales, 250 g', 'Pedigree', 18.98, 13, 17, 'Antiparasitarios', 0),
    ('PROD048', 'Cepillo de dientes para perros, mango largo', 'Pedigree', 88.85, 13, 50, 'Juguetes', 0),
    ('PROD049', 'Arnés ajustable para perros medianos', 'Frontline', 82.91, 13, 37, 'Vitaminas', 0),
    ('PROD050', 'Juguete de cuerda para masticar, para perros', 'Whiskas', 42.88, 13, 22, 'Vitaminas', 0);

-- Insertar los tratamientos
INSERT INTO TratamientoProducto (codigo, descripcion, marca, precio, iva, cantidad_disponible, categoria, proc_med) VALUES
    ('TRAT001', 'Vacunación anual', 'N/A', 120.00, 0, 1, 'Vacunaciones', 1),
    ('TRAT002', 'Desparasitación interna', 'N/A', 50.00, 0, 1, 'Desparasitaciones', 1),
    ('TRAT003', 'Limpieza dental', 'N/A', 200.00, 0, 1, 'Procedimientos dentales', 1),
    ('TRAT004', 'Castración', 'N/A', 300.00, 0, 1, 'Cirugías', 1),
    ('TRAT005', 'Esterilización', 'N/A', 400.00, 0, 1, 'Cirugías', 1),
    ('TRAT006', 'Tratamiento contra pulgas y garrapatas', 'N/A', 75.00, 0, 1, 'Antiparasitarios', 1),
    ('TRAT007', 'Tratamiento de infecciones de oído', 'N/A', 100.00, 0, 1, 'Tratamientos', 1),
    ('TRAT008', 'Cirugía de extracción de tumores', 'N/A', 500.00, 0, 1, 'Cirugías', 1),
    ('TRAT009', 'Tratamiento de enfermedades renales', 'N/A', 250.00, 0, 1, 'Tratamientos', 1),
    ('TRAT010', 'Radiografía para diagnóstico', 'N/A', 150.00, 0, 1, 'Diagnósticos', 1);

-- Insertar algunos historiales medicos
INSERT INTO HistorialMedico (fecha, detalles, id_mascota, cod_tratamiento) VALUES
    ('2024-05-01', 'Consulta general y aplicación de vacuna contra la rabia.', 1, 'TRAT001'),
    ('2024-06-15', 'Limpieza dental y revisión general.', 1, 'TRAT003'),
    ('2024-05-05', 'Desparasitación y control de peso.', 2, 'TRAT002'),
    ('2024-07-20', 'Revisión de oídos y aplicación de tratamiento contra ácaros.', 2, 'TRAT007'),    
    ('2024-05-10', 'Consulta general y aplicación de vacuna contra la rabia.', 3, 'TRAT001'),
    ('2024-06-25', 'Corte de uñas y baño antipulgas.', 3, 'TRAT006'),
    ('2024-05-12', 'Control de peso y aplicación de antipulgas.', 4, 'TRAT006'),
    ('2024-08-10', 'Limpieza de oídos y revisión dental.', 4, 'TRAT003'),
    ('2024-05-20', 'Vacuna contra parvovirus y desparasitación.', 5, 'TRAT002'),
    ('2024-07-05', 'Baño medicado y revisión general.', 5, 'TRAT005'),
    ('2024-05-25', 'Cirugia para extirpar tumor en el vientre.', 6, 'TRAT008'),
    ('2024-08-15', 'Realizar radiografías para detectar fracturas.', 6, 'TRAT010');

-- Insertar Citas Medicas
INSERT INTO CitaMedica (user_ced, id_veterinaria, id_mascota, fecha, hora_ingreso, hora_salida) VALUES
    (1234567895, 1, 1, '2024-06-01', '09:00', '09:30'), -- Rex en San José
    (1234567895, 2, 2, '2024-06-02', '10:00', '10:45'), -- Mia en Cartago
    (1234567895, 3, 3, '2024-06-03', '11:00', '11:30'), -- Bruno en Alajuela
    (1234567895, 2, 1, '2024-07-01', '09:30', '10:00'), -- Rex en Cartago
    (1234567895, 3, 2, '2024-07-02', '10:30', '11:15'), -- Mia en Alajuela
    (1234567896, 4, 3, '2024-07-03', '11:30', '12:00'), -- Bruno en Heredia
    (1234567896, 4, 4, '2024-06-04', '12:00', '12:30'), -- Nina en Heredia
    (1234567896, 5, 5, '2024-06-05', '13:00', '13:45'), -- Lola en Puntarenas
    (1234567896, 1, 6, '2024-06-06', '14:00', '14:30'), -- Max en San José
    (1234567896, 5, 4, '2024-07-04', '12:30', '13:00'), -- Nina en Puntarenas
    (1234567896, 1, 5, '2024-07-05', '13:30', '14:15'), -- Lola en San José
    (1234567896, 2, 6, '2024-07-06', '14:30', '15:00'); -- Max en Cartago

-- Inserts para la tabla OrdenCompra
INSERT INTO OrdenCompra (user_ced, fecha, hora, metodo_pago) VALUES
(1234567895, '2024-06-01', '10:00:00', 'Tarjeta'),
(1234567896, '2024-06-02', '11:30:00', 'Efectivo'),
(1234567895, '2024-06-03', '09:45:00', 'Transferencia'),
(1234567896, '2024-06-04', '14:20:00', 'SINPE');

-- Inserts para la tabla DireccionEntrega
INSERT INTO DireccionEntrega (provincia, canton, distrito, domicilio, id_orden) VALUES
    ('San Jose', 'Tarrazú', 'San Marcos', '100m sur de Coopesantos', 1),
    ('Cartago', 'Cartago', 'Oriental', 'Barrio la Puebla, junto a Super la Puebla', 2),
    ('San Jose', 'Tarrazú', 'San Marcos', '100m sur de Coopesantos', 3),
    ('Cartago', 'Cartago', 'Oriental', 'Barrio la Puebla, junto a Super la Puebla', 4);

INSERT INTO ListaCompras (id_orden, cod_producto) VALUES
    (1, 'PROD002'),
    (1, 'PROD020'),
    (2, 'PROD046'),
    (3, 'PROD015'),
    (3, 'PROD025'),
    (4, 'TRAT002'),
    (4, 'PROD005'),
    (4, 'PROD049');

/*
SELECT * FROM RolUsuario;
SELECT * FROM Usuario;
SELECT * FROM Veterinaria
SELECT * FROM TrabajaEn;
SELECT * FROM Mascota;
SELECT * FROM TratamientoProducto;
SELECT * FROM HistorialMedico;
SELECT * FROM CitaMedica;
SELECT * FROM OrdenCompra;
SELECT * FROM UsuarioInvitado;
SELECT * FROM DireccionEntrega;
SELECT * FROM ListaCompras;
*/
