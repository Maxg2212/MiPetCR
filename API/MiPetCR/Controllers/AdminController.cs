using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Data;
using System.Data.SqlClient;
using MiPetCR.Models;
using MiPetCR.DataBase_Resources;

namespace MiPetCR.Controllers
{
    [ApiController]
    [Route("api")]
    public class AdminController : ControllerBase
    {
        //Metodo que devuelve la ultima reservacion insertada para actualizar la fecha de salida del paciente 
        [HttpGet("get_all_users")]
        public async Task<ActionResult<JSON_Object>> GetUsers()
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable all_users = DatabaseConnection.GetUsers();

                List<Users_Model> all_user_db = new List<Users_Model>();
                foreach (DataRow row in all_users.Rows)
                {

                    Users_Model user = new Users_Model();
                    int cedula_int = Convert.ToInt32(row["cedula"].ToString());
                    int telefono_int = Convert.ToInt32(row["telefono"].ToString());


                    user.cedula = cedula_int;
                    user.correo = row["correo"].ToString();
                    user.nombre = row["nombre"].ToString();
                    user.telefono = telefono_int;
                    user.rol_nombre = row["rol_nombre"].ToString();

                    all_users.Rows.Add(user);

                    List<string> users_list = new List<string>();

                    DataTable procedures = DatabaseConnection.GetUsers();
                    foreach (DataRow fila in procedures.Rows)
                    {
                        users_list.Add(fila["Procedimiento_nombre"].ToString());

                    }
                    user.procedimientos = users_list;
                }

                json.status = "ok";
                json.result = all_user_db;
                return Ok(json);


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(json);
            }


        }
    }
}
