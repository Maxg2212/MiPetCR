﻿namespace MiPetCR.Models
{
    public class UserInfoModel
    {
        public int cedula { get; set; }
        public string correo { get; set; } = string.Empty;
        public string nombre { get; set; } = string.Empty;
        public int telefono { get; set; }
        //public string rol_nombre { get; set; } = string.Empty;
    }
}
