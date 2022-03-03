using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TTNewsBE.Models;
using TTNewsBE.Services;

namespace TTNewsBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly NewsuserService _newsuserService;

        public LoginController(NewsuserService nService)
        {
            _newsuserService = nService;
        }

        [HttpGet("{username}/{password}")]
        public async Task<ActionResult<Newsuser>> Login(string username, string password)
        {
            var newsuser = await _newsuserService.LoginAsync(username,password);
            if (newsuser == null)
            {
                return NotFound();
            }

            return Ok(newsuser);
        }
        [HttpGet("/authenticate")]
        public async Task<ActionResult> Authentication(string username, string password)
        {
            var token = _newsuserService.Authenticate(username, password);
            var newsuser = await _newsuserService.LoginAsync(username, password);
            Response.Cookies.Append("token", token, new CookieOptions
            {
                HttpOnly = true
            });
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(new { token,  newsuser });
        }
        
    }
}
