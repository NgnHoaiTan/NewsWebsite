using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TTNewsBE.Models;

namespace TTNewsBE.Services
{
    public class TopicService
    {
        private readonly IMongoCollection<Topic> _topic;
        public TopicService(INewsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _topic = database.GetCollection<Topic>(settings.TopicsCollectionName);
        }
        public async Task<List<Topic>> GetAllAsync()
        {
            return await _topic.Find(t => true).ToListAsync();
        }
        public async Task<Topic> GetByIdAsync(string id)
        {
            return await _topic.Find<Topic>(t => t.Id == id).FirstOrDefaultAsync();
        }
        public async Task<Topic> CreateAsync(Topic topic)
        {
            await _topic.InsertOneAsync(topic);
            return topic;
        }
        public async Task UpdateAsync(string id, Topic topic)
        {
            await _topic.ReplaceOneAsync(t => t.Id == id, topic);
        }
        public async Task DeleteAsync(string id)
        {
            await _topic.DeleteOneAsync(t => t.Id == id);
        }
    }
}
