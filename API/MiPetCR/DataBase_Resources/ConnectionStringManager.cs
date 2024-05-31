using System;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace MiPetCR.DataBase_Resources
{
    public class ConnectionStringManager
    {
        /// <summary>
        /// Method to get the necessary string to connect to a database
        /// The connection string is hosted in a solution file called appsettings.json 
        /// </summary>
        /// <returns> 
        /// Returns a string with the sql authentication credentials and the name of the database to connect
        /// </returns>
        public static string GetConnectionString()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appSettings.json", optional: true, reloadOnChange: true);
            IConfiguration _configuration = builder.Build();
            var connection_string_db = _configuration.GetConnectionString("MyPetsCR");
            return connection_string_db;
        }
    }
}
