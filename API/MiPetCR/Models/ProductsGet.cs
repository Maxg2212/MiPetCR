namespace MiPetCR.Models
{
    public class ProductsGet
    {
        public string codigo { get; set; } = string.Empty;
        public string descripcion { get; set; } = string.Empty;
        public string marca { get; set; } = string.Empty;
        public decimal precio { get; set; } 
        public string categoria { get; set; } = string.Empty;
        public int cantidad_disponible { get; set; }
    }
}
