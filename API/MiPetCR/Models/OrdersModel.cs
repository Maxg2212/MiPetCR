namespace MiPetCR.Models
{
    public class OrdersModel
    {
        public int id { get; set; }
        public string nombre_order { get; set; } = string.Empty;
        public string correo { get; set; } = string.Empty;
        public string fecha { get; set; }
        public string hora { get; set; }
        public string metodo_pago { get; set; } = string.Empty;
    }
}
