﻿namespace MiPetCR.Models
{
    public class BranchPutModel
    {
        public int id { get; set; }
        public string provincia { get; set; } = string.Empty;
        public string canton { get; set; } = string.Empty;
        public string distrito { get; set; } = string.Empty;
        public string domicilio { get; set; } = string.Empty;
    }
}