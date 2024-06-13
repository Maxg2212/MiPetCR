namespace MiPetCR.Models
{
    public class HisstorialMedicoPutModel
    {
        public int id_historial {  get; set; }
        public string fecha { get; set; }
        public string detalles { get; set; } = string.Empty;
        public int id_mascota { get; set; }
        public string cod_tratamiento { get; set; } = string.Empty;
    }
}
