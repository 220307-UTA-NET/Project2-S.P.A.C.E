using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SPACE.API.SPACE.API.BusinessLogic;
using System.Data.SqlClient;

namespace SPACE.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // DataContext private field
        private readonly DataContext _context;

        // DataContext Constructor
        public UserController(DataContext context)
        {
            _context = context;
        }

        // Methods
        // Using DataContext
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<User>>> Get(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return BadRequest("User not found.");
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUser(User user)
        {
            var dbUser = await _context.Users.FindAsync(user.Id);
            if (dbUser == null)
                return BadRequest("User not found.");

            dbUser.Username = user.Username;
            dbUser.Password = user.Password;
            dbUser.Email = user.Email;

            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<User>>> Delete(int id)
        {
            var dbUser = await _context.Users.FindAsync(id);
            if (dbUser == null)
                return BadRequest("User not found.");

            _context.Users.Remove(dbUser);
            await _context.SaveChangesAsync();

            return Ok(await _context.Users.ToListAsync());
        }
    }
}
