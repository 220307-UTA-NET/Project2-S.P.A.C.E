using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPACE.API.SPACE.API.BusinessLogic
{
    public class Comment
    {
        // Fields
        [Key]
        public int CommentId { get; set; }
        public string Content { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }
    }
}
