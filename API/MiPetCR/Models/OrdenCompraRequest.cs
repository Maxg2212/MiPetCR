namespace MiPetCR.Models
{
    public class OrdenCompraRequest
    {
        public long UserCed { get; set; }
        public string MetodoPago { get; set; }
        public string CorreoUsuario { get; set; }
        public long TelefonoUsuario { get; set; }
        public string Provincia { get; set; }
        public string Canton { get; set; }
        public string Distrito { get; set; }
        public string Domicilio { get; set; }
        public List<Producto> Productos { get; set; }
    }
}
