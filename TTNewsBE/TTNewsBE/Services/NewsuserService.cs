using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TTNewsBE.Models;

namespace TTNewsBE.Services
{
    public class NewsuserService
    {
        private readonly IMongoCollection<Newsuser> _newsuser;

        public SymmetricSecurityKey IssuerSigningKey { get; private set; }

        public NewsuserService(INewsDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _newsuser = database.GetCollection<Newsuser>(settings.NewsusersCollectionName);
            
        }
        public async Task<List<Newsuser>> GetAllAsync()
        {
            return await _newsuser.Find(n => true).ToListAsync();
        }
        public async Task<Newsuser> GetByIdAsync(string id)
        {
            return await _newsuser.Find<Newsuser>(n => n.Id == id).FirstOrDefaultAsync();
        }
        public async Task<List<Newsuser>> GetByRoleAsync(string role)
        {
            return await _newsuser.Find<Newsuser>(n => n.Role == role).ToListAsync();
        }
        public async Task<Newsuser> LoginAsync(string username, string password)
        {
            return await _newsuser.Find<Newsuser>(n => n.Username == username && n.Userpassword == password).FirstOrDefaultAsync();
        }
        public async Task<Newsuser> CreateAsync(Newsuser newsuser)
        {
            await _newsuser.InsertOneAsync(newsuser);
            return newsuser;
        }
        public async Task UpdateAsync(string id, Newsuser newsuser)
        {
            await _newsuser.ReplaceOneAsync(n => n.Id == id, newsuser);
        }
        public async Task DeleteAsync(string id)
        {
            await _newsuser.DeleteOneAsync(c => c.Id == id);
        }
        
        public string Authenticate(string username, string password)
        {
            var user = _newsuser.Find<Newsuser>(n => n.Username == username && n.Userpassword == password).FirstOrDefault();
            if(user == null)
            {
                return null;
            }
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.ASCII.GetBytes("RcTv3qYXuLMheIT04Amivu5JrPWJLVGY");
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, username),
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials
                (
                    new SymmetricSecurityKey(tokenKey),
                    SecurityAlgorithms.HmacSha256Signature
                )
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
        
    }
}
