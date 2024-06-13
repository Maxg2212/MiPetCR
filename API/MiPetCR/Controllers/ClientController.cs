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

        //Metodo que permite crear una reservacion 
        //Se recibe como parametro un JSON que contiene el numero de cedula del paciente y la fecha de reservacion 
        [HttpPost("update_mascota")]
        public async Task<ActionResult<JSON_Object>> EditMascota(MascotaModel mascota_nuevo)
        {
            JSON_Object json = new JSON_Object("ok", null);
            //Se ejecuta el metodo que llama a un stored procedure en SQL para agregar una tupla que representa la reservacion 
            bool var = DatabaseConnection.EditMascota(mascota_nuevo);
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
        public async Task<ActionResult<JSON_Object>> GetPets(Mascota_Dueno cedula_dueno)
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


        //Metodo que devuelve la ultima reservacion insertada para actualizar la fecha de salida del paciente 
        [HttpPost("get_my_pet_history")]
        public async Task<ActionResult<JSON_Object>> GetHistory(MascotaIDModel id_mascota)
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable pets_history = DatabaseConnection.GetHistory(id_mascota);

                List<HistorialMedicoGetModel> all_pets_history_list = new List<HistorialMedicoGetModel>();
                foreach (DataRow row in pets_history.Rows)
                {

                    HistorialMedicoGetModel historialmedico_get = new HistorialMedicoGetModel();
                    int id_historial_int = Convert.ToInt32(row["id"].ToString());
                    

                    Console.WriteLine(id_historial_int);

                    historialmedico_get.int_historial = id_historial_int;
                    historialmedico_get.fecha = row["fecha"].ToString();
                    historialmedico_get.descripcion = row["tratamiento"].ToString();
                    historialmedico_get.detalles = row["detalles"].ToString();


                    all_pets_history_list.Add(historialmedico_get);

                }

                json.status = "ok";
                json.result = all_pets_history_list;
                return Ok(json);


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(json);
            }


        }


        //Metodo que devuelve la ultima reservacion insertada para actualizar la fecha de salida del paciente 
        [HttpPost("get_my_purchases")]
        public async Task<ActionResult<JSON_Object>> GetPurchases(Mascota_Dueno id_usuario)
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable purchases_history = DatabaseConnection.GetPurchases(id_usuario);

                List<ComprasClienteModel> all_purchases_list = new List<ComprasClienteModel>();
                foreach (DataRow row in purchases_history.Rows)
                {

                    ComprasClienteModel comprascliente_get = new ComprasClienteModel();
                    int id_historial_int = Convert.ToInt32(row["id"].ToString());


                    Console.WriteLine(id_historial_int);

                    comprascliente_get.id_compra = id_historial_int;
                    comprascliente_get.fecha = row["fecha"].ToString();
                    comprascliente_get.hora = row["hora"].ToString();
                    comprascliente_get.metodo_pago = row["metodo_pago"].ToString();


                    all_purchases_list.Add(comprascliente_get);

                }

                json.status = "ok";
                json.result = all_purchases_list;
                return Ok(json);


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(json);
            }


        }

        //Metodo que devuelve la ultima reservacion insertada para actualizar la fecha de salida del paciente 
        [HttpPost("get_user_info")]
        public async Task<ActionResult<JSON_Object>> GetUserInformation(Mascota_Dueno cedula_user)
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable all_user_info = DatabaseConnection.GetUserInformationWithCedula(cedula_user);

                List<UserInfoModel> all_info_list = new List<UserInfoModel>();
                foreach (DataRow row in all_user_info.Rows)
                {

                    UserInfoModel user_db = new UserInfoModel();
                    int cedula_int = Convert.ToInt32(row["cedula"].ToString());
                    int telefono_int = Convert.ToInt32(row["telefono"].ToString());


                    user_db.cedula = cedula_int;                   
                    user_db.nombre = row["nombre"].ToString();
                    user_db.correo = row["correo"].ToString();
                    user_db.telefono = telefono_int;
                    //user_db.rol_nombre = row["rol_nombre"].ToString();

                    all_info_list.Add(user_db);

                }

                json.status = "ok";
                json.result = all_info_list;
                return Ok(json);


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(json);
            }


        }

        //Metodo que permite crear una reservacion 
        //Se recibe como parametro un JSON que contiene el numero de cedula del paciente y la fecha de reservacion 
        [HttpPost("update_personal_info")]
        public async Task<ActionResult<JSON_Object>> UpdateClient(UserInfoModel userInfo)
        {
            JSON_Object json = new JSON_Object("ok", null);
            //Se ejecuta el metodo que llama a un stored procedure en SQL para agregar una tupla que representa la reservacion 
            bool var = DatabaseConnection.UpdateClient(userInfo);
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

    }
}
