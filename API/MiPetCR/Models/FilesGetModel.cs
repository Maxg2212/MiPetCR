namespace MiPetCR.Models
{
    public class FilesGetModel
    {
        public string nombre_dueno { get; set; } = string.Empty;
        public string nombre_mascota { get; set; } = string.Empty;
        public string especie { get; set; } = string.Empty;
        public string Raza { get; set; } = string.Empty;
        public string descripcion { get; set; } = string.Empty;
        public string fecha { get; set; }
        public string detalles { get; set; } = string.Empty;
    }
}
