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

                Users_Model user_db = new Users_Model();
                foreach (DataRow row in all_users.Rows)
                {


                    int cedula_int = Convert.ToInt32(row["cedula"].ToString());
                    int telefono_int = Convert.ToInt32(row["telefono"].ToString());


                    user_db.cedula = cedula_int;
                    user_db.correo = row["correo"].ToString();
                    user_db.nombre = row["nombre"].ToString();
                    user_db.telefono = telefono_int;
                    user_db.rol_nombre = row["rol_nombre"].ToString();

                }

                json.status = "ok";
                json.result = user_db;
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
