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

                List<Users_Model> all_users_list = new List<Users_Model>();
                foreach (DataRow row in all_users.Rows)
                {

                    Users_Model user_db = new Users_Model();
                    int cedula_int = Convert.ToInt32(row["cedula"].ToString());
                    int telefono_int = Convert.ToInt32(row["telefono"].ToString());


                    user_db.cedula = cedula_int;
                    user_db.correo = row["correo"].ToString();
                    user_db.nombre = row["nombre"].ToString();
                    user_db.telefono = telefono_int;
                    user_db.rol_nombre = row["rol_nombre"].ToString();

                    all_users_list.Add(user_db);

                }

                json.status = "ok";
                json.result = all_users_list;
                return Ok(json);


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(json);
            }


        }


        //Metodo que devuelve la ultima reservacion insertada para actualizar la fecha de salida del paciente 
        [HttpGet("get_all_products")]
        public async Task<ActionResult<JSON_Object>> GetProducts()
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable all_products = DatabaseConnection.GetProducts();

                List<ProductsGet> all_products_list = new List<ProductsGet>();
                foreach (DataRow row in all_products.Rows)
                {

                    ProductsGet products_db = new ProductsGet();
                    decimal precio_decimal = Convert.ToDecimal(row["precio"].ToString());
                    int cantidad_int = Convert.ToInt32(row["cantidad_disponible"].ToString());


                    products_db.codigo = row["codigo"].ToString();
                    products_db.descripcion = row["descripcion"].ToString();
                    products_db.marca = row["marca"].ToString();
                    products_db.precio = precio_decimal;
                    products_db.categoria = row["categoria"].ToString();
                    products_db.cantidad_disponible = cantidad_int;

                    all_products_list.Add(products_db);

                }

                json.status = "ok";
                json.result = all_products_list;
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
        [HttpPost("create_product")]
        public async Task<ActionResult<JSON_Object>> CreateProduct(ProductsPostModel producto_nuevo)
        {
            JSON_Object json = new JSON_Object("ok", null);
            //Se ejecuta el metodo que llama a un stored procedure en SQL para agregar una tupla que representa la reservacion 
            bool var = DatabaseConnection.CreateProduct(producto_nuevo);
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
