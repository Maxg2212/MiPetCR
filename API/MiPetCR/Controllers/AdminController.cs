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

        //Metodo que permite crear un producto
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

        //Metodo que permite editar un producto
        //Se recibe como parametro un JSON que contiene el numero de cedula del paciente y la fecha de reservacion 
        [HttpPut("update_product")]
        public async Task<ActionResult<JSON_Object>> UpdateProduct(ProductsPostModel producto_nuevo)
        {
            JSON_Object json = new JSON_Object("ok", null);
            //Se ejecuta el metodo que llama a un stored procedure en SQL para agregar una tupla que representa la reservacion 
            bool var = DatabaseConnection.EditProduct(producto_nuevo);
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
        [HttpGet("get_all_branches")]
        public async Task<ActionResult<JSON_Object>> GetBranches()
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable all_branches = DatabaseConnection.GetBranches();

                List<BranchGetModel> all_branches_list = new List<BranchGetModel>();
                foreach (DataRow row in all_branches.Rows)
                {

                    BranchGetModel branch_db = new BranchGetModel();
                    int id_int = Convert.ToInt32(row["id"].ToString());
                    //int telefono_int = Convert.ToInt32(row["telefono"].ToString());


                    branch_db.branch_id = id_int;
                    branch_db.provincia = row["provincia"].ToString();
                    branch_db.canton = row["canton"].ToString();
                    branch_db.distrito = row["distrito"].ToString();
                    branch_db.domicilio = row["domicilio"].ToString();

                    all_branches_list.Add(branch_db);

                }

                json.status = "ok";
                json.result = all_branches_list;
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
        [HttpPost("create_branch")]
        public async Task<ActionResult<JSON_Object>> CreateBranch(BranchPostModel branch_nuevo)
        {
            JSON_Object json = new JSON_Object("ok", null);
            //Se ejecuta el metodo que llama a un stored procedure en SQL para agregar una tupla que representa la reservacion 
            bool var = DatabaseConnection.CreateBranch(branch_nuevo);
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
        [HttpPut("update_branch")]
        public async Task<ActionResult<JSON_Object>> EditBranch(BranchPutModel branch_nuevo)
        {
            JSON_Object json = new JSON_Object("ok", null);
            //Se ejecuta el metodo que llama a un stored procedure en SQL para agregar una tupla que representa la reservacion 
            bool var = DatabaseConnection.UpdateBranch(branch_nuevo);
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
        [HttpPost("get_all_products_order")]
        public async Task<ActionResult<JSON_Object>> GetOrders(OrdenIDModel ordenid)
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable all_products_ord = DatabaseConnection.GetProductsOrders(ordenid);

                List<ProductsOrderGetModel> all_products_order_list = new List<ProductsOrderGetModel>();
                foreach (DataRow row in all_products_ord.Rows)
                {

                    ProductsOrderGetModel products_ord_db = new ProductsOrderGetModel();
                    //int id_int = Convert.ToInt32(row["id"].ToString());
                    //int telefono_int = Convert.ToInt32(row["telefono"].ToString());


                    //products_ord_db.branch_id = id_int;
                    products_ord_db.cod_product = row["cod_producto"].ToString();
                    products_ord_db.descripcion = row["descripcion"].ToString();
                    //branch_db.distrito = row["distrito"].ToString();
                    //branch_db.domicilio = row["domicilio"].ToString();

                    all_products_order_list.Add(products_ord_db);

                }

                json.status = "ok";
                json.result = all_products_order_list;
                return Ok(json);


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(json);
            }


        }

        //Metodo que devuelve la ultima reservacion insertada para actualizar la fecha de salida del paciente 
        [HttpGet("get_all_files")]
        public async Task<ActionResult<JSON_Object>> GetFiles()
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable all_files = DatabaseConnection.GetFiles();

                List<FilesGetModel> all_files_list = new List<FilesGetModel>();
                foreach (DataRow row in all_files.Rows)
                {

                    FilesGetModel files_db = new FilesGetModel();
                    //int id_int = Convert.ToInt32(row["id"].ToString());
                    //int telefono_int = Convert.ToInt32(row["telefono"].ToString());



                    files_db.nombre_dueno = row["nombre"].ToString();
                    files_db.nombre_mascota = row["nombre"].ToString();
                    files_db.especie = row["especie"].ToString();
                    files_db.Raza = row["Raza"].ToString();
                    files_db.descripcion = row["Tratamiento"].ToString();
                    files_db.fecha = row["fecha"].ToString();
                    files_db.detalles = row["detalles"].ToString();

                    all_files_list.Add(files_db);

                }

                json.status = "ok";
                json.result = all_files_list;
                return Ok(json);


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest(json);
            }


        }

        //Metodo que devuelve la ultima reservacion insertada para actualizar la fecha de salida del paciente 
        [HttpGet("get_all_orders")]
        public async Task<ActionResult<JSON_Object>> GetAllOrders()
        {
            JSON_Object json = new JSON_Object("error", null);

            try
            {
                //El metodo retorna una estructura de tipo DataTable que contiene la informacion de la 
                //ultima reservacion insertada
                DataTable all_orders = DatabaseConnection.GetOrders();

                List<OrdersModel> all_orders_list = new List<OrdersModel>();
                foreach (DataRow row in all_orders.Rows)
                {

                    OrdersModel orders_db = new OrdersModel();
                    //int id_int = Convert.ToInt32(row["id"].ToString());
                    int id_int = Convert.ToInt32(row["id"].ToString());
                    //int telefono_int = Convert.ToInt32(row["telefono"].ToString());


                    orders_db.id = id_int;
                    orders_db.nombre_order = row["nombre"].ToString();
                    orders_db.correo = row["correo"].ToString();
                    orders_db.fecha = row["fecha"].ToString();
                    orders_db.hora = row["hora"].ToString();
                    orders_db.metodo_pago = row["metodo_pago"].ToString();
                    

                    all_orders_list.Add(orders_db);

                }

                json.status = "ok";
                json.result = all_orders_list;
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
