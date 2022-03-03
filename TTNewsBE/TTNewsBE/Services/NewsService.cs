using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TTNewsBE.Models;
using Microsoft.EntityFrameworkCore;
namespace TTNewsBE.Services
{
    public class NewsService
    {
        private readonly IMongoCollection<News> _news;

        public NewsService(INewsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _news = database.GetCollection<News>(settings.NewsCollectionName);
        }
        public async Task<List<News>> GetAllAsync()
        {

            return await _news.Find(n => true).SortByDescending(n => n.Time_update_news).ToListAsync();
            
        }
        public async Task<List<News>> GetAllWithPaginationAsync(int page, int pageSize)
        {
            return await _news.Find(n => true).Skip(((page - 1) * pageSize)).Limit(pageSize).ToListAsync();
        }
        public async Task<News> GetByIdAsync(string id)
        {
            return await _news.Find<News>(n => n.Id == id).FirstOrDefaultAsync();
        }
        public async Task<List<News>> GetNewestNewsAsync()
        {
            return await _news.Find<News>(n => true && n.Status =="approved").SortByDescending(n => n.Time_update_news).Limit(5).ToListAsync(); 
        }

        public async Task<List<News>> GetByTopicWithPaginationAsync(string idTopic,string status, int page, int pageSize) {
            
            
                return await _news.Find<News>(n => n.Topic.Id == idTopic && n.Status == status)
                .SortByDescending(n => n.Time_update_news)
                .Skip(((page - 1) * pageSize)).Limit(pageSize)
                .ToListAsync();

        }
        public async Task<List<News>> GetBySubTopicWithPaginationAsync(string idSubtopic, string status, int page, int pageSize)
        {


            return await _news.Find<News>(n => n.Subtopic.Id == idSubtopic && n.Status == status)
            .SortByDescending(n => n.Time_update_news)
            .Skip(((page - 1) * pageSize)).Limit(pageSize)
            .ToListAsync();

        }
        public async Task<List<News>> GetAllByTopicAsync(string idTopic, string status)
        {
            return await _news.Find<News>(n => n.Topic.Id == idTopic && n.Status == status)
            .SortByDescending(n => n.Time_update_news)
            .ToListAsync();
        }


        public async Task<List<News>> GetBySubTopicAsync(string idSubTopic, string status)
        {
            return await _news.Find<News>(n => n.Subtopic.Id == idSubTopic && n.Status == status).SortByDescending(n => n.Time_update_news).ToListAsync();
        }

        public async Task<List<News>> GetByStatusAsync(string status)
        {
            return await _news.Find<News>(n => n.Status == status).SortByDescending(n => n.Time_update_news).ToListAsync();
        }
        public async Task<List<News>> GetByStatusWithByAuthorAsync(string status,string idauthor)
        {
            return await _news.Find<News>(n => n.Status == status && n.Author.Id == idauthor).SortByDescending(n => n.Time_update_news).ToListAsync();
        }

        public async Task<News> CreateAsync(News news)
        {
            await _news.InsertOneAsync(news);
            return news;
        }
        public async Task UpdateAsync(string id, News news)
        {
            await _news.ReplaceOneAsync(n => n.Id == id, news);
        }
        public async Task DeleteAsync(string id)
        {
            await _news.DeleteOneAsync(n => n.Id == id);
        }
    }
}
