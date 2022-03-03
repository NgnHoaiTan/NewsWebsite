using Microsoft.AspNetCore.Http;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TTNewsBE.Models
{
    public class News
    {
        [BsonId]
        [BsonIgnoreIfDefault]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Title { get; set; }
        public string Descriptions { get; set; }
        public string Content { get; set; }
        public DateTime Time_update_news { get; set; }
        [BsonIgnore]
        public IFormFile Image { get; set; }
        public string ImageName { get; set; }
        public Topic Topic { get; set; }
        public Subtopic Subtopic { get; set; }
        public Newsuser Author { get; set; }
        public string Status { get; set; } = "disapprove";
    }
}
