namespace MiPetCR.Models
{
    public class MascotaModel
    {
        public int id { get; set; }
        public int ced_dueno { get; set; } 
        public string especie { get; set; } = string.Empty;
        public string raza { get; set; } = string.Empty;
        public string nombre { get; set; } = string.Empty;
    }
}
