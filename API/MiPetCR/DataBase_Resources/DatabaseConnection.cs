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
    }
}
