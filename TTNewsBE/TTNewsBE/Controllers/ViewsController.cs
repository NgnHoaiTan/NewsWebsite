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
    public class ViewsController : ControllerBase
    {
        private readonly ViewsService _viewsService;
        public ViewsController(ViewsService tService)
        {
            _viewsService = tService;
        }
        [HttpGet]
        public async Task<ActionResult<Views>> GetAll()
        {
            var Views = await _viewsService.GetAllAsync();

            if (Views == null)
            {
                return NotFound();
            }

            return Ok(new { Views});
        }
        [HttpGet("News/{id}")]
        public async Task<ActionResult<Views>> GetByIdNews(string id)
        {
            var views = await _viewsService.GetByIdNewsAsync(id);

            if (views == null)
            {
                return NotFound();
            }

            return Ok(views);
        }
        [HttpGet("Hottest")]
        public async Task<ActionResult<Views>> GetByHottest()
        {
            var Views = await _viewsService.GetByHottestAsync();

            if (Views == null)
            {
                return NotFound();
            }

            return Ok(new { Views });
        }
        [HttpPost]
        public async Task<ActionResult<Topic>> CreateViews(Views views)
        {
            await _viewsService.CreateViewsAsync(views);
            return Ok(views);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, Views views)
        {
            var queriedViews = await _viewsService.GetByIdViewsAsync(id);
            if (queriedViews == null)
            {
                return NotFound();
            }
            await _viewsService.UpdateAsync(id, views);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var topic = await _viewsService.GetByIdViewsAsync(id);
            if (topic == null)
            {
                return NotFound();
            }

            await _viewsService.DeleteViewsAsync(id);
            return NoContent();
        }
    }
}
