using Microsoft.EntityFrameworkCore;
using SPACE.API.SPACE.API.BusinessLogic;

namespace SPACE.API.Data
{
    public class DataContext : DbContext
    {
        // Constructor
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
