using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace Sentences.Models
{
    public class SentencesDbContext:DbContext
    {
        public SentencesDbContext(DbContextOptions<SentencesDbContext> options) : base(options) {
        
        }

        public DbSet<Question> Questions { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
