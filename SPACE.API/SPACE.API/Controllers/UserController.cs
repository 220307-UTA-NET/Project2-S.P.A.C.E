using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SPACE.API.SPACE.API.BusinessLogic;
using SPACE.API.SPACE.API.DataLogic;
using System.Data.SqlClient;

namespace SPACE.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly ILogger<UserController> _logger;

        public UserController(IRepository repository, ILogger<UserController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        // Methods
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsersAsync()
        {
            List<User> user;   // List to save the result
            try
            {
                user = await _repository.GetAllUsersAsync();   // Run GetAllUsersAsync()
                _logger.LogInformation("GetAllUsersAsync success"); // Log info with success message
            }
            catch (SqlException ex)
            {
                _logger.LogError(ex, "SQL error while getting all users."); // Log error with message
                return StatusCode(500); // Return StatusCode(500) - server side error - if FAILS
            }
            return user;   // Return List<User> if SUCCESSFUL
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<User>>> GetUserAsync(int Id)
        {
            List<User> user;   // List to save the result
            try
            {
                user = await _repository.GetUserAsync(Id);     // Run GetUserAsync(Id)
                _logger.LogInformation("GetUserAsync success"); // Log info with success message
            }
            catch (SqlException ex)
            {
                _logger.LogError(ex, "SQL error while getting user with id : {0}.", Id);    // Log error with message
                return StatusCode(500); // Return StatusCode(500) - server side error - if FAILS
            }
            return user;   // Return List<User> if SUCCESSFUL
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUserAsync(User user)
        {
            List<User> user1;   // List to save the result
            try
            {
                user1 = await _repository.AddUserAsync(user);     // Run AddUserAsync(Id)
                _logger.LogInformation("AddUserAsync success"); // Log info with success message
            }
            catch (SqlException ex)
            {
                _logger.LogError(ex, "SQL error while adding user.");    // Log error with message
                return StatusCode(500); // Return StatusCode(500) - server side error - if FAILS
            }
            return user1;   // Return List<User> if SUCCESSFUL
        }

        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUserAsync(int Id, User user)
        {
            List<User> user1;   // List to save the result
            try
            {
                user1 = await _repository.UpdateUserAsync(Id, user);     // Run UpdateUserAsync(Id)
                _logger.LogInformation("UpdateUserAsync success"); // Log info with success message
            }
            catch (SqlException ex)
            {
                _logger.LogError(ex, "SQL error while updating user with id: {0}.", Id);    // Log error with message
                return StatusCode(500); // Return StatusCode(500) - server side error - if FAILS
            }
            return user1;   // Return List<User> if SUCCESSFUL
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<User>>> DeleteUserAsync(int Id)
        {
            List<User> user;   // List to save the result
            try
            {
                user = await _repository.DeleteUserAsync(Id);     // Run DeleteUserAsync(Id)
                _logger.LogInformation("DeleteUserAsync success"); // Log info with success message
            }
            catch (SqlException ex)
            {
                _logger.LogError(ex, "SQL error while deleting user with id : {0}.", Id);    // Log error with message
                return StatusCode(500); // Return StatusCode(500) - server side error - if FAILS
            }
            return user;   // Return List<User> if SUCCESSFUL
        }

    }
}
