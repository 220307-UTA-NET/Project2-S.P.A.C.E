using SPACE.API.SPACE.API.BusinessLogic;
using System.Data.SqlClient;

namespace SPACE.API.SPACE.API.DataLogic
{
    public class SQLRepository : IRepository
    {
        private readonly string _connectionString;
        private readonly ILogger<SQLRepository> _logger;

        public SQLRepository(string connectionString, ILogger<SQLRepository> logger)
        {
            _connectionString = connectionString;
            _logger = logger;
        }

        // Methods
        public async Task<List<User>> GetAllUsersAsync()
        {
            // Create an empty List to save all Users
            List<User> result = new();

            // Create connection to SQL Server database
            using SqlConnection connection = new(_connectionString);
            await connection.OpenAsync();   // Open the connection

            // SQL command/query to SELECT all Users
            string cmdString =
                "SELECT * FROM p2.Users;";

            // Use SqlCommand to store the SQL command/query
            using SqlCommand cmd = new(cmdString, connection);

            // Use SqlDataReader to read the stream of data (rows) from the database
            using SqlDataReader reader = cmd.ExecuteReader();

            // While there is more row(s) to read
            while (reader.Read())
            {
                var Id = reader.GetInt32(0);
                var Username = reader.GetString(1);
                var Password = reader.GetString(2);
                var Email = reader.GetString(3);
                result.Add(new(Id, Username, Password, Email));
            }
            await connection.CloseAsync();  // Close the connection

            _logger.LogInformation("Executed: GetAllUsersAsync()");   // Create a log information

            return result;  // Return the list filled with all Users
        }

        public async Task<List<User>> GetUserAsync(int Id)
        {
            // Create an empty List to save result
            List<User> result = new();

            // Create connection to SQL Server database
            using SqlConnection connection = new(_connectionString);
            await connection.OpenAsync();   // Open the connection

            // SQL command/query to SELECT a User
            string cmdString =
                @"SELECT * FROM p2.Users 
                WHERE Id = @Id;";

            // Use SqlCommand to store the command/query and use the connection
            using SqlCommand cmd = new(cmdString, connection);

            cmd.Parameters.AddWithValue("@Id", Id); // Replace string value with paramter value

            // Use SqlDataReader to read the stream of data from the database
            using SqlDataReader reader = cmd.ExecuteReader();

            // While there is more row(s) to read
            while(reader.Read())
            {
                var UserId = reader.GetInt32(0);
                var Username = reader.GetString(1);
                var Password = reader.GetString(2);
                var Email = reader.GetString(3);
                result.Add(new(UserId, Username, Password, Email));
            }
            await connection.CloseAsync();  // Close the connection

            _logger.LogInformation("Executed: GetUserAsync(int Id)");    // Log information

            return result; // Return the list containing a User
        }

        public async Task<List<User>> AddUserAsync(User user)
        {
            // Create an empty List to save result
            List<User> result = new();

            // Create connection to SQL Server database
            using SqlConnection connection = new(_connectionString);
            await connection.OpenAsync();   // Open the connection

            // SQL command/query to INSERT a User
            string cmdString =
                @"INSERT INTO p2.Users (Username, Password, Email) 
                VALUES (@Username, @Password, @Email);";

            // Use SqlCommand to store the command/query and use the connection
            using SqlCommand cmd = new(cmdString, connection);

            // Replace string value with paramter value
            cmd.Parameters.AddWithValue("@Username", user.Username);
            cmd.Parameters.AddWithValue("@Password", user.Password);
            cmd.Parameters.AddWithValue("@Email", user.Email);

            // ExecuteNonQuery command to to the database
            cmd.ExecuteNonQuery();

            // SQL command/query to SELECT the new User
            string cmdString2 =
                @"SELECT TOP 1 * FROM p2.Users ORDER BY Id DESC;";

            // Use SqlCommand to store the SQL command/query
            using SqlCommand cmd2 = new(cmdString2, connection);

            // Use SqlDataReader to read the stream of data from the database
            using SqlDataReader reader = cmd2.ExecuteReader();

            // While there is more row(s) to read
            while (reader.Read())
            {
                var UserId = reader.GetInt32(0);
                var Username = reader.GetString(1);
                var Password = reader.GetString(2);
                var Email = reader.GetString(3);
                result.Add(new(UserId, Username, Password, Email));
            }
            await connection.CloseAsync();  // Close the connection

            _logger.LogInformation("Executed: AddUserAsync(User user)");    // Log information

            return result; // Return the list containing a User
        }

        public async Task<List<User>> UpdateUserAsync(int Id, User user)
        {
            // Create a List to save the result
            List<User> result = new();

            // Create the connection to the database
            using SqlConnection connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();   // Open the connection

            // SQL command to update the User
            string cmdString =
                @"UPDATE p2.Users 
                SET Username = @Username, Password = @Password, Email = @Email 
                WHERE Id = @Id;";

            // Use SqlCommand to store the command
            using SqlCommand cmd = new(cmdString, connection);

            // Replace string values with parameter values
            cmd.Parameters.AddWithValue("@Username", user.Username);
            cmd.Parameters.AddWithValue("@Password", user.Password);
            cmd.Parameters.AddWithValue("@Email", user.Email);
            cmd.Parameters.AddWithValue("@Id", Id);

            // Execute command
            cmd.ExecuteNonQuery();

            // SQL command to get the updated User
            string cmdString2 =
                "SELECT * FROM p2.Users WHERE Id = @Id;";

            // SqlCommand to store the second command
            using SqlCommand cmd2 = new(cmdString2, connection);

            cmd2.Parameters.AddWithValue("@Id", Id);    // Replace string value with parameter value
        
            // SqlDataReader to read stream of data
            using SqlDataReader reader = cmd2.ExecuteReader();

            // Read the rows of data
            while(reader.Read())
            {
                var UserId = reader.GetInt32(0);
                var Username = reader.GetString(1);
                var Password = reader.GetString(2);
                var Email = reader.GetString(3);
                result.Add(new(UserId, Username, Password, Email));
            }
            await connection.CloseAsync();  // Close the connection

            _logger.LogInformation("Executed: UpdateUserAsync(int Id, User user)");    // Log information

            return result; // Return the list containing updated User
        }

        public async Task<List<User>> DeleteUserAsync(int Id)
        {
            // A List to save the result
            List<User> result = new();

            // Create connection to database
            using SqlConnection connection = new SqlConnection(_connectionString);
            await connection.OpenAsync();   // Open the connection

            // SQL command to get the user
            string cmdString =
                "SELECT * FROM p2.Users " +
                "WHERE Id = @Id;";

            // SqlCommand to store the command
            using SqlCommand cmd = new(cmdString, connection);

            cmd.Parameters.AddWithValue("@Id", Id);     // Replace string value with parameter value

            // SqlDataReader to read stream of data
            using SqlDataReader reader = cmd.ExecuteReader();

            // Read rows of data
            while(reader.Read())
            {
                var UserId = reader.GetInt32(0);
                var Username = reader.GetString(1);
                var Password = reader.GetString(2);
                var Email = reader.GetString(3);
                result.Add(new(UserId, Username, Password, Email));
            }
            reader.Close();     // Close reader

            // SQL command to DELETE a User 
            string cmdString2 =
                "DELETE FROM p2.Users WHERE Id = @Id;";

            // SqlCommand to store the second command
            using SqlCommand cmd2 = new(cmdString2, connection);

            cmd2.Parameters.AddWithValue("@Id", Id);    // Replace string value with parameter value

            // Execute Sql command
            cmd2.ExecuteNonQuery();

            await connection.CloseAsync();  // Close the connection

            _logger.LogInformation("Executed: DeleteUserAsync(int Id)");    // Log information

            return result; // Return the list containing deleted User
        }
 
    }
}
