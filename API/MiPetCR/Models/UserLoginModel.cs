namespace MiPetCR.Models
{
    public class UserLoginModel
    {
        public int cedula { get; set; }
        //public string correo { get; set; } = string.Empty;
        public int rol_id { get; set; } 
        public string nombre { get; set; } = string.Empty;
        public int telefono { get; set; }
        
    }
}
