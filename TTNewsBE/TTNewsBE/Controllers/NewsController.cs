using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using TTNewsBE.Models;
using TTNewsBE.Services;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace TTNewsBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly NewsService _newsService;
        private readonly TopicService _topicService;
        private readonly SubtopicService _subtopicService;
        private readonly NewsuserService _newsuserService;
        private readonly IWebHostEnvironment _webHostEnvironment;



        public NewsController(NewsService newsService, TopicService topicService, SubtopicService subtopicService, NewsuserService newsuserService, IWebHostEnvironment webHostEnvironment)
        {
            _newsService = newsService;
            _topicService = topicService;
            _subtopicService = subtopicService;
            _newsuserService = newsuserService;
            _webHostEnvironment = webHostEnvironment;
        }

        // GET: api/News
        [HttpGet]
        public async Task<ActionResult<IEnumerable<News>>> GetAll()
        {

            var articles = await _newsService.GetAllAsync();
            
            return Ok(new { articles });
        }
        /*[HttpGet("Page/{page}/PageSize/{pageSize}")]
        public async Task<ActionResult<IEnumerable<News>>> GetAllWithPagination(int page, int pageSize)
        {

            var articles = await _newsService.GetAllWithPaginationAsync(page, pageSize);

            return Ok(new { articles });
        }*/

        // GET: api/News/5
        [HttpGet("GetById/{id}")]
        public async Task<ActionResult<News>> GetById(string id)
        {
            var news = await _newsService.GetByIdAsync(id);

            if (news == null)
            {
                return NotFound();
            }

            return Ok(news);
        }
        [HttpGet("Newest")]
        public async Task<ActionResult<News>> GetByNewest()
        {
            var articles = await _newsService.GetNewestNewsAsync();

            if (articles == null)
            {
                return NotFound();
            }

            return Ok(new { articles });
        }

        [HttpGet("GetByTopic/{id}/Status/{status}/page/{page}/pagesize/{pageSize}")]
        public async Task<ActionResult<IEnumerable<News>>> GetByTopicWithPagination(string id, string status,int page, int pageSize)
        {
            var articles = await _newsService.GetByTopicWithPaginationAsync(id,status,page,pageSize);
            
            
            if (articles == null)
            {
                return NotFound();
            }
            return Ok(new { articles });
        }
        [HttpGet("GetByTopic/{id}/Status/{status}")]
        public async Task<ActionResult<IEnumerable<News>>> GetAllByTopic(string id, string status)
        {
            var articles = await _newsService.GetAllByTopicAsync(id, status);
            if (articles == null)
            {
                return NotFound();
            }
            return Ok(new { articles });
        }
        [HttpGet("GetBySubTopic/{id}/Status/{status}/page/{page}/pagesize/{pageSize}")]
        public async Task<ActionResult<IEnumerable<News>>> GetBySubTopicWithPagination(string id, string status, int page, int pageSize)
        {
            var articles = await _newsService.GetBySubTopicWithPaginationAsync(id, status, page, pageSize);


            if (articles == null)
            {
                return NotFound();
            }
            return Ok(new { articles });
        }
        [HttpGet("GetBySubTopic/{id}/Status/{status}")]
        public async Task<ActionResult<IEnumerable<News>>> GetBySubTopic(string id, string status)
        {
            var articles = await _newsService.GetBySubTopicAsync(id,status);
            
            if (articles == null)
            {
                return NotFound();
            }
            return Ok(new { articles });
        }

        [HttpGet("GetByStatus/{status}")]
        public async Task<ActionResult<IEnumerable<News>>> GetByStatus(string status)
        {
            var articles = await _newsService.GetByStatusAsync(status);
            return Ok(new { articles });
        }
        [HttpGet("GetByStatus/{status}/author/{idauthor}")]
        public async Task<ActionResult<IEnumerable<News>>> GetByStatusWithByAuthor(string status,string idauthor)
        {
            var articles = await _newsService.GetByStatusWithByAuthorAsync(status,idauthor);
            return Ok(new { articles });
        }


        // PUT: api/News/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, News updateNews)
        {
            var queriedNews = await _newsService.GetByIdAsync(id);
            if (queriedNews == null)
            {
                return NotFound();
            }
            await _newsService.UpdateAsync(id, updateNews);

            return NoContent();
        }

        // POST: api/News
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult> Create([FromForm] News news)
        {
            if(news.Image!=null)
            {
                if (news.Image.Length > 0)
                {
                    try
                    {
                        if (!Directory.Exists(_webHostEnvironment.WebRootPath + "\\Images\\"))
                        {
                            Directory.CreateDirectory(_webHostEnvironment.WebRootPath + "\\Images\\");
                        }
                        
                        using (FileStream fileStream = System.IO.File.Create(_webHostEnvironment.WebRootPath + "\\Images\\" + news.Image.FileName))
                        {
                            news.Image.CopyTo(fileStream);
                        
                            fileStream.Flush();
                            
                        }
                        
                        using (Stream s = news.Image.OpenReadStream())
                        {
                            var cloudinary = new CloudinaryDotNet.Cloudinary(new Account
                            {
                                ApiKey = Credientials.ApiKey,
                                ApiSecret = Credientials.ApiSecret,
                                Cloud = Credientials.Cloudname

                            });
                            cloudinary.Api.Secure = true;

                            var imageUploadParams = new ImageUploadParams()
                            {

                                File = new FileDescription(news.Image.FileName, s),
                            };


                            var uploadResult = await cloudinary.UploadAsync(imageUploadParams);
                            string result = uploadResult.SecureUrl.AbsoluteUri;
                            news.ImageName = result;
                            await _newsService.CreateAsync(news);

                        };
                        
                        news.Image = null;
                    }
                    catch (Exception ex)
                    {
                        return BadRequest(ex);
                    }
                }
            }
            else
            {
                await _newsService.CreateAsync(news);
            }
            return Ok(news);
        }

        // DELETE: api/News/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var news = await _newsService.GetByIdAsync(id);
            if (news == null)
            {
                return NotFound();
            }

            await _newsService.DeleteAsync(id);

            return NoContent();
        }
        
    }
}
