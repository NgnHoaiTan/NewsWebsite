using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TTNewsBE.Models;

namespace TTNewsBE.Services
{
    public class SubtopicService
    {
        private readonly IMongoCollection<Subtopic> _subtopic;
        public SubtopicService(INewsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _subtopic = database.GetCollection<Subtopic>(settings.SubtopicsCollectionName);
        }
        public async Task<List<Subtopic>> GetAllAsync()
        {
            return await _subtopic.Find(s => true).ToListAsync();
        }
        public async Task<Subtopic> GetByIdAsync(string id)
        {
            return await _subtopic.Find<Subtopic>(s => s.Id == id).FirstOrDefaultAsync();
        }
        public async Task<List<Subtopic>> GetByStatuscAsync(string status)
        {
            return await _subtopic.Find<Subtopic>(s => s.Status == status).ToListAsync();
        }
        public async Task<List<Subtopic>> GetByTopic(string id)
        {
            return await _subtopic.Find<Subtopic>(s => s.Topic.Id == id).ToListAsync();
        }
        public async Task<Subtopic> CreateAsync(Subtopic subtopic)
        {
            await _subtopic.InsertOneAsync(subtopic);
            return subtopic;
        }
        public async Task UpdateAsync(string id, Subtopic subtopic)
        {
            await _subtopic.ReplaceOneAsync(s => s.Id == id, subtopic);
        }
        
        public async Task DeleteAsync(string id)
        {
            await _subtopic.DeleteOneAsync(s => s.Id == id);
        }
    }
}
