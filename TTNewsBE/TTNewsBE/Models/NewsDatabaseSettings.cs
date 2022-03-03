using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TTNewsBE.Models
{
    public class NewsDatabaseSettings : INewsDatabaseSettings
    {
        private string newsCollectionName;
        private string topicsCollectionName;
        private string subtopicsCollectionName;
        
        private string newsusersCollectionName;
        private string viewsCollectionName;
     
        private string connectionString;
        private string databaseName;

        public string NewsCollectionName { get => newsCollectionName; set => newsCollectionName = value; }
        public string TopicsCollectionName { get => topicsCollectionName; set => topicsCollectionName = value; }
        public string SubtopicsCollectionName { get => subtopicsCollectionName; set => subtopicsCollectionName = value; }
      
        public string NewsusersCollectionName { get => newsusersCollectionName; set => newsusersCollectionName = value; }
        public string ViewsCollectionName { get => viewsCollectionName; set => viewsCollectionName = value; }
       
        public string ConnectionString { get => connectionString; set => connectionString = value; }
        public string DatabaseName { get => databaseName; set => databaseName = value; }
    }

    public interface INewsDatabaseSettings
    {
        string NewsCollectionName { get; set; }
        string TopicsCollectionName { get; set; }
        string SubtopicsCollectionName { get; set; }
        
        string NewsusersCollectionName { get; set; }
      
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
        string ViewsCollectionName { get; }
    }
    
}
