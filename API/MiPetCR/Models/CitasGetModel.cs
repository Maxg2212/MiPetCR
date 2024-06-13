namespace MiPetCR.Models
{
    public class CitasGetModel
    {
        public int cita_id { get; set; }
        public string nombre_usuario { get; set; } = string.Empty;
        public string nombre_mascota { get; set; } = string.Empty;
        public string provincia { get; set; } = string.Empty;
        public string canton { get; set; } = string.Empty;
        public string fecha { get; set; } 
        public string hora_ingreso { get; set; } 
        public string hora_salida { get; set; }
    }
}
