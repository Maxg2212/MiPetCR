﻿namespace MiPetCR.Models
{
    public class CitasPostModel
    {
        public int user_ced { get; set; }
        public int veterinaria_id { get; set; }
        public int mascota_id { get; set; }
        public string fecha { get; set; }
        public string hora_ingreso { get; set; }
        public string hora_salida { get; set; }
    }
}