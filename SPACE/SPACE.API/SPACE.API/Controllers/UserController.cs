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
        private readonly DataContext _dataContext;

        // DataContext Constructor
        public UserController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        // Methods
        // Using DataContext
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            return await _dataContext.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<User>>> GetUser(int id)
        {
            var user = await _dataContext.Users.FindAsync(id);
            if (user == null)
                return BadRequest("User not found.");
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            _dataContext.Users.Add(user);
            await _dataContext.SaveChangesAsync();

            return Ok(await _dataContext.Users.ToListAsync());
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<List<User>>> UpdateUser(User user)
        {
            var dbUser = await _dataContext.Users.FindAsync(user.UserId);
            if (dbUser == null)
                return BadRequest("User not found.");

            dbUser.Username = user.Username;
            dbUser.Password = user.Password;
            dbUser.Email = user.Email;

            await _dataContext.SaveChangesAsync();

            return Ok(await _dataContext.Users.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<User>>> DeleteUser(int id)
        {
            var dbUser = await _dataContext.Users.FindAsync(id);
            if (dbUser == null)
                return BadRequest("User not found.");

            _dataContext.Users.Remove(dbUser);
            await _dataContext.SaveChangesAsync();

            return Ok(await _dataContext.Users.ToListAsync());
        }
    }
}
