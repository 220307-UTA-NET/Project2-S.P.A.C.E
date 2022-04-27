namespace SPACE.API.SPACE.API.BusinessLogic
{
    public class User
    {
        // Fields
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        // Constructors
        public User() { }

        public User(int Id, string Username, string Password, string Email)
        {
            this.Id = Id;
            this.Username = Username;
            this.Password = Password;
            this.Email = Email;
        }
    }
}
