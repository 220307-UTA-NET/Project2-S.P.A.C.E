using System.ComponentModel.DataAnnotations;

namespace SPACE.API.SPACE.API.BusinessLogic
{
    public class User
    {
        // Fields
        [Key]
        public int UserId { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }
    }
}
