namespace MiPetCR.Models
{
    public class ProductsPostModel
    {
        public string codigo { get; set; } = string.Empty;
        public string descripcion { get; set; } = string.Empty;
        public string marca { get; set; } = string.Empty;
        public decimal precio { get; set; }
        public float iva { get; set; }
        public int cantidad_disponible { get; set; }
        public string categoria { get; set; } = string.Empty;
        public bool proc_med { get; set; } = false;

    }
}
