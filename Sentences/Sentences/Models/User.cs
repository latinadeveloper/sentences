using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sentences.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName ="nvarchar(100")]
        public string Name { get; set; }

        public int GradeLevel { get; set; }
        public int Score { get; set; }
    }
}
