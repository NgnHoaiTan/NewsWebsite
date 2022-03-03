using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TTNewsBE.Models;
using TTNewsBE.Services;

namespace TTNewsBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopicsController : ControllerBase
    {
        private readonly TopicService _topicService;
        public TopicsController(TopicService tService)
        {
            _topicService = tService;
        }

        // GET: api/Topics
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Topic>>> GetAll()
        {
            var topics = await _topicService.GetAllAsync();
            return Ok(topics);
        }

        // GET: api/Topics/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Topic>> GetById(string id)
        {
            var topic = await _topicService.GetByIdAsync(id); 
            
            if (topic == null)
            {
                return NotFound();
            }

            return Ok(topic);
        }

        // PUT: api/Topics/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Topic updateTopic)
        {
            var queriedTopic = await _topicService.GetByIdAsync(id);
            if (queriedTopic == null)
            {
                return NotFound();
            }
            await _topicService.UpdateAsync(id, updateTopic);
            return NoContent();
        }

        // POST: api/Topics
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Topic>> Create(Topic topic)
        {
            await _topicService.CreateAsync(topic);
            return Ok(topic);
        }

        // DELETE: api/Topics/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var topic = await _topicService.GetByIdAsync(id);
            if (topic == null)
            {
                return NotFound();
            }

            await _topicService.DeleteAsync(id);
            return NoContent();
        }
    }
}
