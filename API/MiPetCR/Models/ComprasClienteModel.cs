namespace MiPetCR.Models
{
    public class ComprasClienteModel
    {
        public int id_compra { get; set; }
        public string fecha { get; set; }
        public string hora { get; set; }
        public string metodo_pago { get; set; } = string.Empty;
    }
}
