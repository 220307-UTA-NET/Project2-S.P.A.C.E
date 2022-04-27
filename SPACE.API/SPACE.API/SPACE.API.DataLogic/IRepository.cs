using SPACE.API.SPACE.API.BusinessLogic;

namespace SPACE.API.SPACE.API.DataLogic
{
    public interface IRepository
    {
        Task<List<User>> GetAllUsersAsync();
        Task<List<User>> GetUserAsync(int Id);
        Task<List<User>> AddUserAsync(User user);
        Task<List<User>> UpdateUserAsync(int Id, User user);
        Task<List<User>> DeleteUserAsync(int Id);
    }
}
