namespace MiPetCR.Models
{
    public class HistorialMedicoGetModel
    {
        public int int_historial { get; set; }
        public string fecha { get; set; }
        public string descripcion { get; set; } = string.Empty;
        public string detalles { get; set; } = string.Empty;
    }
}
