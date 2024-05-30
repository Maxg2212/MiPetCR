namespace MiPetCR.Models
{
    public class HistorialMedicoModel
    {
        public string fecha { get; set; }
        public string detalles { get; set; } = string.Empty;
        public int id_mascota { get; set; }
        public string cod_tratamiento { get; set; } = string.Empty;
    }
}
