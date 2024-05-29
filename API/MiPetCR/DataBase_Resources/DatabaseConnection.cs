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
                return (i > 0) ? false : true;//Funciona

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
                SqlCommand cmd = new SqlCommand("SELECT * FROM [dbo].[up_RecuperarUsuarios]", conn);
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
    }
}
