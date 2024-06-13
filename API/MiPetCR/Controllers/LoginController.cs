using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Data;
using Newtonsoft.Json;
using System.Data.SqlClient;
using MiPetCR.Models;
using MiPetCR.DataBase_Resources;
using System.Net.Mail;
using System.Net;

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
        public async Task<ActionResult<JSON_Object>> AuthUser(Credentials users_credentials)
        {
            //revisa en la base de datos si existe el paciente y retorna la informacion del paciente
            JSON_Object json = new JSON_Object("error", null);
            try
            {
                Credentials user = new Credentials();
                bool allUser = DatabaseConnection.Login(users_credentials); //Llamada al metodo que ejecuta la funcion en SQL que retorna una tabla con la informacion del paciente
               
                if(allUser)
                {
                    json.result = allUser;
                    json.status = "ok";
                    return Ok(json);
                }
                else
                {
                    json.result = allUser;
                    return BadRequest(json);
                }
                
                

            }
            catch (Exception ex)
            {
                Console.WriteLine("El paciente no se encuentra en base de datos, debe crearse una cuenta");
                json.result = "El paciente no se encuentra en base de datos, debe crearse una cuenta";
                return BadRequest(json);
            }

        }

        //Metodo para autenticar al usuario
        //Se recibe como parametro un JSON con las credenciales del paciente (correo y password) 
        //Se retorna un JSON con la informacion del usuario si este es encontrado en la base y la contraseña hace match con la que se proporciona 
        [HttpPost("change_password")]
        public async Task<ActionResult<JSON_Object>> ChangePassword(CredentiaslOp users_credentials)
        {
            //revisa en la base de datos si existe el paciente y retorna la informacion del paciente
            JSON_Object json = new JSON_Object("error", null);
            try
            {
                Credentials user = new Credentials();
                bool allUser = DatabaseConnection.ChangePassword(users_credentials); //Llamada al metodo que ejecuta la funcion en SQL que retorna una tabla con la informacion del paciente

                if (allUser)
                {
                    SendConfirmationEmail(users_credentials.correo);
                    json.result = allUser;
                    json.status = "ok";
                    return Ok(json);
                }
                else
                {
                    json.result = allUser;
                    return BadRequest(json);
                }



            }
            catch (Exception ex)
            {
                Console.WriteLine("El paciente no se encuentra en base de datos, debe crearse una cuenta");
                json.result = "El paciente no se encuentra en base de datos, debe crearse una cuenta";
                return BadRequest(json);
            }

        }

        //Metodo que permite crear una reservacion 
        //Se recibe como parametro un JSON que contiene el numero de cedula del paciente y la fecha de reservacion 
        [HttpPost("send_confirmation_email")]
        public async Task<ActionResult<JSON_Object>> SendConfirmationEmail(string client_email)
        {
            JSON_Object json = new JSON_Object("ok", null);
            //Se ejecuta el metodo que llama a un stored procedure en SQL para agregar una tupla que representa la reservacion 
            var fromAddress = new MailAddress("mypetcrapi@gmail.com", "From mypetcr");
            var toAddress = new MailAddress(client_email, " ");
            const string fromPassword = "odct hpsq xqsp jgov";
            const string subject = "Confirmacion de compra";
            const string body = "Su clave ha sido cambiada exitosamente!!";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                smtp.Send(message);
                return Ok(json);
            }

        }

        //Metodo que permite crear una reservacion 
        //Se recibe como parametro un JSON que contiene el numero de cedula del paciente y la fecha de reservacion 
        [HttpPost("create_user")]
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

        //Metodo que devuelve la ultima reservacion insertada para actualizar la fecha de salida del paciente 
        [HttpPost("get_user_info_with_correo")]
        public async Task<ActionResult<JSON_Object>> GetUserInformationWithCorreo(CorreoUserModel correo_user)
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable all_user_info = DatabaseConnection.GetUserInformationWithCorreo(correo_user);

                List<UserLoginModel> all_info_list = new List<UserLoginModel>();
                foreach (DataRow row in all_user_info.Rows)
                {

                    UserLoginModel user_db = new UserLoginModel();
                    int cedula_int = Convert.ToInt32(row["cedula"].ToString());
                    int rol_int = Convert.ToInt32(row["rol_id"].ToString());
                    int telefono = Convert.ToInt32(row["telefono"].ToString());


                    user_db.cedula = cedula_int;
                    user_db.rol_id = rol_int;
                    user_db.nombre = row["nombre"].ToString();
                    user_db.telefono = telefono;
                    
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


    }
}
