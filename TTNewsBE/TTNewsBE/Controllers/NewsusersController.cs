using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TTNewsBE.Models;
using TTNewsBE.Services;

namespace TTNewsBE.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class NewsusersController : ControllerBase
    {
        private readonly NewsuserService _newsuserService;

        public NewsusersController(NewsuserService nService)
        {
            _newsuserService = nService;
        }

        // GET: api/Newsusers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Newsuser>>> GetAll()
        {
            var newsusers = await _newsuserService.GetAllAsync();
            return Ok(newsusers);
        }

        // GET: api/Newsusers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Newsuser>> GetById(string id)
        {
            var newsuser = await _newsuserService.GetByIdAsync(id);
            if (newsuser == null)
            {
                return NotFound();
            }

            return Ok(newsuser);
        }
        [HttpGet("role/{role}")]
        public async Task<ActionResult<Newsuser>> GetByRole(string role)
        {
            var newsusers = await _newsuserService.GetByRoleAsync(role);
            if (newsusers == null)
            {
                return NotFound();
            }

            return Ok( newsusers );
        }

        // PUT: api/Newsusers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Newsuser updateNewsuser)
        {
            var queriedNewsuser = await _newsuserService.GetByIdAsync(id);
            if (queriedNewsuser == null)
            {
                return NotFound();
            }
            await _newsuserService.UpdateAsync(id, updateNewsuser);
            return NoContent();
        }

        // POST: api/Newsusers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Newsuser>> Create(Newsuser newsuser)
        {
            await _newsuserService.CreateAsync(newsuser);
            return Ok(newsuser);
        }

        // DELETE: api/Newsusers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var newsuser = await _newsuserService.GetByIdAsync(id);
            if (newsuser == null)
            {
                return NotFound();
            }
            await _newsuserService.DeleteAsync(id);
            return NoContent();
        }
        
    }
}
