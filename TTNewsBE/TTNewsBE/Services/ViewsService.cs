using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TTNewsBE.Models;

namespace TTNewsBE.Services
{
    public class ViewsService
    {
        private readonly IMongoCollection<Views> _views;
        public ViewsService(INewsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _views = database.GetCollection<Views>(settings.ViewsCollectionName);
           
        }
        public async Task<List<Views>> GetAllAsync()
        {
            return await _views.Find(s => true).ToListAsync();
        }
        public async Task<Views> GetByIdNewsAsync(string IdNews)
        {
            return await _views.Find(s => s.IdNews == IdNews).FirstOrDefaultAsync();
        }
        public async Task<Views> GetByIdViewsAsync(string IdViews)
        {
            return await _views.Find(s => s.Id == IdViews).FirstOrDefaultAsync();
        }
        public async Task<List<Views>> GetByHottestAsync()
        {
            return await _views.Find(s => true).SortByDescending(s => s.TotalView).Limit(5).ToListAsync();
        }
        public async Task<Views> CreateViewsAsync(Views views)
        {
            await _views.InsertOneAsync(views);
            return views;
        }
        public async Task UpdateAsync(string id, Views views)
        {
            await _views.ReplaceOneAsync(s => s.Id == id, views);
        }
        public async Task DeleteViewsAsync(string id)
        {
            await _views.DeleteOneAsync(n => n.Id == id);
        }
    }
}
