namespace MiPetCR.Models
{
    public class ClientModel
    {
        public int cedula { get; set; }
        public int rol_id { get; set; }
        public string correo { get; set;} = string.Empty;
        public string contrasena { get; set; } = string.Empty; 
        public string nombre { get; set; } = string.Empty;  
        public int telefono { get; set; } 
    }
}
