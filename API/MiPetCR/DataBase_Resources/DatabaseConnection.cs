using MiPetCR.Models;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;

namespace MiPetCR.DataBase_Resources
{
    public class DatabaseConnection
    {
        public static string cadenaConexion = "Data Source=LAPTOP-85GS8ERK;Initial Catalog=MyPetsCR;Persist Security Info=True;User ID=maxgm;Password=1234";//This

        //Metodo que permite hacer crear un nuevo cliente
        public static bool CreateClient(ClientModel client_nuevo)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);

            
            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_InsertarUsuario]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@cedula", SqlDbType.Int).Value = client_nuevo.cedula;
                cmd.Parameters.AddWithValue("@rol_id", SqlDbType.Int).Value = client_nuevo.rol_id;
                cmd.Parameters.AddWithValue("@correo", SqlDbType.VarChar).Value = client_nuevo.correo;
                cmd.Parameters.AddWithValue("@contrasena", SqlDbType.VarChar).Value = client_nuevo.contrasena;
                cmd.Parameters.AddWithValue("@nombre", SqlDbType.VarChar).Value = client_nuevo.nombre;
                cmd.Parameters.AddWithValue("@telefono", SqlDbType.Int).Value = client_nuevo.telefono;


                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo que permite hacer crear un nuevo cliente
        public static bool UpdateClient(UserInfoModel userInfo)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);


            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_EditarInfoPersonal]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@ced", SqlDbType.Int).Value = userInfo.cedula;
                cmd.Parameters.AddWithValue("@nombre", SqlDbType.VarChar).Value = userInfo.nombre;
               
                cmd.Parameters.AddWithValue("@correo", SqlDbType.VarChar).Value = userInfo.correo;        

                cmd.Parameters.AddWithValue("@telefono", SqlDbType.Int).Value = userInfo.telefono;


                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo que permite obtener todos los usuarios
        public static DataTable GetUsers()
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarUsuarios]", conn);
                cmd.CommandType = CommandType.StoredProcedure;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite obtener todos los usuarios
        public static DataTable GetUserInformationWithCedula(Mascota_Dueno cedula_user)
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarInfoPersonal]", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@ced", SqlDbType.Int).Value = cedula_user.cedula;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite obtener todos los usuarios
        public static DataTable GetUserInformationWithCorreo(CorreoUserModel correo_user)
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarInfoUsuario]", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@correo", SqlDbType.VarChar).Value = correo_user.correo;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }


        //Metodo que permite obtener todos los expedientes
        public static DataTable GetProducts()
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarProductos]", conn);
                cmd.CommandType = CommandType.StoredProcedure;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite hacer crear un nuevo cliente
        public static bool CreateProduct(ProductsPostModel producto_nuevo)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);
            bool proc_med_existe = false;

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_InsertarProductos]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@codigo", SqlDbType.VarChar).Value = producto_nuevo.codigo;
                cmd.Parameters.AddWithValue("@descripcion", SqlDbType.VarChar).Value = producto_nuevo.descripcion;
                cmd.Parameters.AddWithValue("@marca", SqlDbType.VarChar).Value = producto_nuevo.marca;
                cmd.Parameters.AddWithValue("@precio", SqlDbType.Money).Value = producto_nuevo.precio;
                cmd.Parameters.AddWithValue("@iva", SqlDbType.Float).Value = producto_nuevo.iva;
                cmd.Parameters.AddWithValue("@cantidad_disponible", SqlDbType.Int).Value = producto_nuevo.cantidad_disponible;
                cmd.Parameters.AddWithValue("@categoria", SqlDbType.VarChar).Value = producto_nuevo.categoria;
                cmd.Parameters.AddWithValue("@proc_med", SqlDbType.Bit).Value = proc_med_existe;
                //cmd.Parameters.AddWithValue("@nombre", SqlDbType.VarChar).Value = producto_nuevo.nombre;

                //proc_med_existe = Convert.ToBoolean(cmd.Parameters["@proc_med"].Value);
                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo que permite obtener todos los usuarios
        public static DataTable GetBranches()
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarSucursales]", conn);
                cmd.CommandType = CommandType.StoredProcedure;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite obtener todos los usuarios ******No funcional
        public static DataTable GetProductsOrders(OrdenIDModel ordenid)
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarProductosOrden]", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id_orden", SqlDbType.Int).Value = ordenid.order_id;

                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite obtener todos los usuarios ******No funcional
        public static DataTable GetOrders()
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarOrdenes]", conn);
                cmd.CommandType = CommandType.StoredProcedure;

               

                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite obtener todos los usuarios
        public static DataTable GetFiles()
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarExpedientes]", conn);
                cmd.CommandType = CommandType.StoredProcedure;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite hacer crear un nuevo cliente
        public static bool CreateBranch(BranchPostModel branch_nuevo)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);


            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_InsertarSucursales]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //cmd.Parameters.AddWithValue("@cedula", SqlDbType.Int).Value = client_nuevo.cedula;
                cmd.Parameters.AddWithValue("@provincia", SqlDbType.VarChar).Value = branch_nuevo.provincia;
                cmd.Parameters.AddWithValue("@canton", SqlDbType.VarChar).Value = branch_nuevo.canton;
                cmd.Parameters.AddWithValue("@distrito", SqlDbType.VarChar).Value = branch_nuevo.distrito;
                cmd.Parameters.AddWithValue("@domicilio", SqlDbType.VarChar).Value = branch_nuevo.domicilio;

                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo que permite hacer crear un nuevo cliente
        public static bool UpdateBranch(BranchPutModel branch_nuevo)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);


            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_EditarSucursales]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", SqlDbType.Int).Value = branch_nuevo.id;
                cmd.Parameters.AddWithValue("@provincia", SqlDbType.VarChar).Value = branch_nuevo.provincia;
                cmd.Parameters.AddWithValue("@canton", SqlDbType.VarChar).Value = branch_nuevo.canton;
                cmd.Parameters.AddWithValue("@distrito", SqlDbType.VarChar).Value = branch_nuevo.distrito;
                cmd.Parameters.AddWithValue("@domicilio", SqlDbType.VarChar).Value = branch_nuevo.domicilio;

                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo para hacer login en cualquier vista de la web app
        //Retorna un datatable con la informacion del usuario
        public static bool Login(Credentials login_credentials)
        {
            SqlConnection conexion = new SqlConnection(cadenaConexion);
            bool resultado_existe = false;


            try
            {
                
                //Llamada a la funcion 
                SqlCommand cmd = new SqlCommand("[dbo].[up_VerificarInicioSesion]", conexion);
                cmd.CommandType = CommandType.StoredProcedure;
                
                //Parametros que recibe la funcion 
                cmd.Parameters.AddWithValue("@correo", SqlDbType.VarChar).Value = login_credentials.correo;
                cmd.Parameters.AddWithValue("@contrasena", SqlDbType.VarChar).Value = Encryption.encrypt_password(login_credentials.contrasena);
                cmd.Parameters.AddWithValue("@resultado", SqlDbType.Bit).Direction = ParameterDirection.Output;

                Console.WriteLine("Entro aqui");
                conexion.Open();
                cmd.ExecuteNonQuery();


                resultado_existe = Convert.ToBoolean(cmd.Parameters["@resultado"].Value);
                Console.WriteLine(resultado_existe);

                return resultado_existe;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;
            }
            finally
            {
                conexion.Close();
            }

        }

        //Metodo que permite hacer crear un nuevo cliente
        public static bool InsertMedicalHistory(HistorialMedicoModel historialmedico)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);


            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_InsertarHistorialMedico]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //cmd.Parameters.AddWithValue("@cedula", SqlDbType.Int).Value = client_nuevo.cedula;
                cmd.Parameters.AddWithValue("@fecha", SqlDbType.Date).Value = historialmedico.fecha;
                cmd.Parameters.AddWithValue("@detalles", SqlDbType.VarChar).Value = historialmedico.detalles;
                cmd.Parameters.AddWithValue("@id_mascota", SqlDbType.Int).Value = historialmedico.id_mascota;
                cmd.Parameters.AddWithValue("@cod_tratamiento", SqlDbType.VarChar).Value = historialmedico.cod_tratamiento;

                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo que permite hacer crear un nuevo cliente
        public static bool UpdateMedicalHistory(HisstorialMedicoPutModel historialmedico)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);


            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_EditarHistorialMedico]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", SqlDbType.Int).Value = historialmedico.id_historial;
                cmd.Parameters.AddWithValue("@fecha", SqlDbType.Date).Value = historialmedico.fecha;
                cmd.Parameters.AddWithValue("@detalles", SqlDbType.VarChar).Value = historialmedico.detalles;
                cmd.Parameters.AddWithValue("@id_mascota", SqlDbType.Int).Value = historialmedico.id_mascota;
                cmd.Parameters.AddWithValue("@cod_tratamiento", SqlDbType.VarChar).Value = historialmedico.cod_tratamiento;

                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }


        //Metodo que permite hacer crear un nuevo cliente
        public static bool InsertMascota(MascotaModel new_mascota)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);


            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_InsertarMascotas]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //cmd.Parameters.AddWithValue("@cedula", SqlDbType.Int).Value = client_nuevo.cedula;
                cmd.Parameters.AddWithValue("@ced_dueno", SqlDbType.Int).Value = new_mascota.ced_dueno;
                cmd.Parameters.AddWithValue("@especie", SqlDbType.VarChar).Value = new_mascota.especie;
                cmd.Parameters.AddWithValue("@raza", SqlDbType.VarChar).Value = new_mascota.raza;
                cmd.Parameters.AddWithValue("@nombre", SqlDbType.VarChar).Value = new_mascota.nombre;

                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo que permite hacer crear un nuevo cliente
        public static bool EditMascota(MascotaModel new_mascota)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);
            //bool proc_med_existe = false;

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_EditarMascotas]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", SqlDbType.Int).Value = new_mascota.id;
                cmd.Parameters.AddWithValue("@ced_dueno", SqlDbType.Int).Value = new_mascota.ced_dueno;
                cmd.Parameters.AddWithValue("@especie", SqlDbType.VarChar).Value = new_mascota.especie;
                cmd.Parameters.AddWithValue("@raza", SqlDbType.VarChar).Value = new_mascota.raza;
                cmd.Parameters.AddWithValue("@nombre", SqlDbType.VarChar).Value = new_mascota.nombre;
                //cmd.Parameters.AddWithValue("@proc_med", SqlDbType.Bit).Value = proc_med_existe;
                //cmd.Parameters.AddWithValue("@nombre", SqlDbType.VarChar).Value = producto_nuevo.nombre;

                //proc_med_existe = Convert.ToBoolean(cmd.Parameters["@proc_med"].Value);
                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo que permite obtener todos los usuarios
        public static DataTable GetPets(Mascota_Dueno cedula_dueno)
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarMascotas]", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@ced_dueno", SqlDbType.Int).Value = cedula_dueno.cedula;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite obtener historial medico
        public static DataTable GetHistory(MascotaIDModel mascota_id)
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarHistorialMedico]", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id_mascota", SqlDbType.Int).Value = mascota_id.id;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite obtener historial compras
        public static DataTable GetPurchases(Mascota_Dueno cedula_usuario)
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarCompras]", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@user_ced", SqlDbType.Int).Value = cedula_usuario.cedula;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite obtener historial compras
        public static DataTable GetPurchasesHistory(Mascota_Dueno cedula_usuario)
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarHistorialCompras]", conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@user_ced", SqlDbType.Int).Value = cedula_usuario.cedula;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite hacer editar un producto existente
        public static bool EditProduct(ProductsPostModel producto_nuevo)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);
            bool proc_med_existe = false;

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_EditarProductos]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@codigo", SqlDbType.VarChar).Value = producto_nuevo.codigo;
                cmd.Parameters.AddWithValue("@descripcion", SqlDbType.VarChar).Value = producto_nuevo.descripcion;
                cmd.Parameters.AddWithValue("@marca", SqlDbType.VarChar).Value = producto_nuevo.marca;
                cmd.Parameters.AddWithValue("@precio", SqlDbType.Money).Value = producto_nuevo.precio;
                cmd.Parameters.AddWithValue("@iva", SqlDbType.Float).Value = producto_nuevo.iva;
                cmd.Parameters.AddWithValue("@cantidad_disponible", SqlDbType.Int).Value = producto_nuevo.cantidad_disponible;
                cmd.Parameters.AddWithValue("@categoria", SqlDbType.VarChar).Value = producto_nuevo.categoria;
                cmd.Parameters.AddWithValue("@proc_med", SqlDbType.Bit).Value = proc_med_existe;
                //cmd.Parameters.AddWithValue("@nombre", SqlDbType.VarChar).Value = producto_nuevo.nombre;

                //proc_med_existe = Convert.ToBoolean(cmd.Parameters["@proc_med"].Value);
                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo que permite obtener todos los citas
        public static DataTable GetCitas()
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_RecuperarCitas]", conn);
                cmd.CommandType = CommandType.StoredProcedure;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }

        //Metodo que permite hacer crear un nuevo cliente
        public static bool InsertAppointment(CitasPostModel new_cita)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);


            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_InsertarCita]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //cmd.Parameters.AddWithValue("@cedula", SqlDbType.Int).Value = client_nuevo.cedula;
                cmd.Parameters.AddWithValue("@user_ced", SqlDbType.Int).Value = new_cita.user_ced;
                cmd.Parameters.AddWithValue("@id_veterinaria ", SqlDbType.Int).Value = new_cita.veterinaria_id;
                cmd.Parameters.AddWithValue("@id_mascota", SqlDbType.Int).Value = new_cita.mascota_id;
                cmd.Parameters.AddWithValue("@fecha", SqlDbType.Date).Value = new_cita.fecha;
                cmd.Parameters.AddWithValue("@hora_ingreso", SqlDbType.Time).Value = new_cita.hora_ingreso;
                cmd.Parameters.AddWithValue("@hora_salida", SqlDbType.Time).Value = new_cita.hora_salida;

                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo que permite hacer crear un nuevo cliente
        public static bool UpdateAppointment(CitasPutModel new_cita)
        {


            SqlConnection conn = new SqlConnection(cadenaConexion);


            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_EditarCita]", conn);
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@id", SqlDbType.Int).Value = new_cita.cita_id;
                cmd.Parameters.AddWithValue("@user_ced", SqlDbType.Int).Value = new_cita.user_ced;
                cmd.Parameters.AddWithValue("@id_veterinaria ", SqlDbType.Int).Value = new_cita.veterinaria_id;
                cmd.Parameters.AddWithValue("@id_mascota", SqlDbType.Int).Value = new_cita.mascota_id;
                cmd.Parameters.AddWithValue("@fecha", SqlDbType.Date).Value = new_cita.fecha;
                cmd.Parameters.AddWithValue("@hora_ingreso", SqlDbType.Time).Value = new_cita.hora_ingreso;
                cmd.Parameters.AddWithValue("@hora_salida", SqlDbType.Time).Value = new_cita.hora_salida;

                int i = cmd.ExecuteNonQuery();
                return (i > 0) ? true : false;//Funciona

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return false;

            }
            finally
            {
                conn.Close();
            }

        }

        //Metodo que permite obtener todos los citas
        public static DataTable DeleteCita(CitasIdModel id_cita)
        {
            SqlConnection conn = new SqlConnection(cadenaConexion);

            try
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand("[dbo].[up_EliminarCita]", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@id", SqlDbType.Int).Value = id_cita.cita_id;


                DataTable tabla = new DataTable();
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(tabla);

                return tabla;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
            finally
            {
                conn.Close();
            }
        }


    }
}
