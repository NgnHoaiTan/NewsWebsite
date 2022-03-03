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
    public class SubtopicsController : ControllerBase
    {
        private readonly SubtopicService _subtopicService;
        private readonly TopicService _topicService;

        public SubtopicsController(SubtopicService sService, TopicService tService)
        {
            _subtopicService = sService;
            _topicService = tService;
        }

        // GET: api/Subtopics
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Subtopic>>> GetAll()
        {
            var subtopics = await _subtopicService.GetAllAsync();
            return Ok(subtopics);
        }

        // GET: api/Subtopics/5
        [HttpGet("GetById/{id}")]
        public async Task<ActionResult<Subtopic>> GetById(string id)
        {
            var subtopic = await _subtopicService.GetByIdAsync(id);

            if (subtopic == null)
            {
                return NotFound();
            }

            return Ok(subtopic);
        }
        [HttpGet("GetByStatus/{status}")]
        public async Task<ActionResult<Subtopic>> GetByStatus(string status)
        {
            var subtopic = await _subtopicService.GetByStatuscAsync(status);

            if (subtopic == null)
            {
                return NotFound();
            }

            return Ok(subtopic);
        }
        [HttpGet("Topic/{id}")]
        public async Task<ActionResult<Subtopic>> GetByTopic(string id)
        {
            var subtopic = await _subtopicService.GetByTopic(id);

            if (subtopic == null)
            {
                return NotFound();
            }

            return Ok(subtopic);
        }


        // PUT: api/Subtopics/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Subtopic updateSubtopic)
        {
            var queriedSubtopic = await _subtopicService.GetByIdAsync(id);
            if (queriedSubtopic == null)
            {
                return NotFound();
            }

            await _subtopicService.UpdateAsync(id, updateSubtopic);

            return NoContent();
        }
     

        // POST: api/Subtopics
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Subtopic>> Create(Subtopic subtopic)
        {
            await _subtopicService.CreateAsync(subtopic);
            return Ok(subtopic);
        }

        // DELETE: api/Subtopics/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var subtopic = await _subtopicService.GetByIdAsync(id);
            if (subtopic == null)
            {
                return NotFound();
            }
            await _subtopicService.DeleteAsync(id);
            return NoContent();
        }
    }
}
