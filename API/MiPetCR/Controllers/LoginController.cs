using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Data;
using Newtonsoft.Json;
using System.Data.SqlClient;
using MiPetCR.Models;
using MiPetCR.DataBase_Resources;

namespace MiPetCR.Controllers
{
    [ApiController]
    [Route("api")]
    public class LoginController : ControllerBase
    {
        //Metodo para autenticar al usuario
        //Se recibe como parametro un JSON con las credenciales del paciente (correo y password) 
        //Se retorna un JSON con la informacion del usuario si este es encontrado en la base y la contraseña hace match con la que se proporciona 
        [HttpPost("auth_user")]
        public async Task<ActionResult<JSON_Object>> AuthUser([FromQuery] Credentials users_credentials)
        {
            //revisa en la base de datos si existe el paciente y retorna la informacion del paciente
            JSON_Object json = new JSON_Object("error", null);
            try
            {
                Credentials user = new Credentials();
                DataTable allUser = DatabaseConnection.Login(users_credentials); //Llamada al metodo que ejecuta la funcion en SQL que retorna una tabla con la informacion del paciente
               

                foreach (DataRow row in allUser.Rows)
                {
                    if (row["correo"].ToString() != "")
                    {
                        user.correo = row["correo"].ToString();
                        user.contrasena = row["contrasena"].ToString();

                        json.status = "ok";
                        json.result = user;

                    }
                    else
                    {
                        json.status = "error";
                        return BadRequest(json);
                    }

                }
                return json;

                //return Ok(json);


            }
            catch (Exception ex)
            {
                Console.WriteLine("El paciente no se encuentra en base de datos, debe crearse una cuenta");
                json.result = "El paciente no se encuentra en base de datos, debe crearse una cuenta";
                return BadRequest(json);
            }

        }


    }
}
