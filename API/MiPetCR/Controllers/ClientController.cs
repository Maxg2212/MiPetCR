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
    public class ClientController : ControllerBase
    {
        //Metodo que permite crear una reservacion 
        //Se recibe como parametro un JSON que contiene el numero de cedula del paciente y la fecha de reservacion 
        [HttpPost("create_client")]
        public async Task<ActionResult<JSON_Object>> CreateClient(ClientModel client_nuevo)
        {
            JSON_Object json = new JSON_Object("ok", null);
            //Se ejecuta el metodo que llama a un stored procedure en SQL para agregar una tupla que representa la reservacion 
            bool var = DatabaseConnection.CreateClient(client_nuevo);
            Console.WriteLine(var);
            if (var)
            {
                return Ok(json);
            }
            else
            {
                json.status = "error";
                return BadRequest(json);
            }

        }


        //Metodo que permite crear una reservacion 
        //Se recibe como parametro un JSON que contiene el numero de cedula del paciente y la fecha de reservacion 
        [HttpPost("create_mascota")]
        public async Task<ActionResult<JSON_Object>> InsertMascota(MascotaModel mascota_nuevo)
        {
            JSON_Object json = new JSON_Object("ok", null);
            //Se ejecuta el metodo que llama a un stored procedure en SQL para agregar una tupla que representa la reservacion 
            bool var = DatabaseConnection.InsertMascota(mascota_nuevo);
            Console.WriteLine(var);
            if (var)
            {
                return Ok(json);
            }
            else
            {
                json.status = "error";
                return BadRequest(json);
            }

        }

        //Metodo que devuelve la ultima reservacion insertada para actualizar la fecha de salida del paciente 
        [HttpPost("get_my_pets")]
        public async Task<ActionResult<JSON_Object>> GetPets([FromQuery] Mascota_Dueno cedula_dueno)
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable all_pets = DatabaseConnection.GetPets(cedula_dueno);

                List<MascotaModel> all_pets_list = new List<MascotaModel>();
                foreach (DataRow row in all_pets.Rows)
                {

                    MascotaModel mascota_db = new MascotaModel();
                    int id_int = Convert.ToInt32(row["id"].ToString());

                    Console.WriteLine(id_int);

                    mascota_db.id = id_int;
                    mascota_db.especie = row["especie"].ToString();
                    mascota_db.raza = row["raza"].ToString();
                    mascota_db.nombre = row["nombre"].ToString();
                    

                    all_pets_list.Add(mascota_db);

                }

                json.status = "ok";
                json.result = all_pets_list;
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
