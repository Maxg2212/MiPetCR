namespace MiPetCR.Models
{
    public class JSON_Object
    {
        public string status { get; set; } = string.Empty;
        public Object result { get; set; }


        public JSON_Object(string status, Object result)
        {
            this.status = status;
            this.result = result;
        }
    }
}
