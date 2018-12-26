namespace luke_sample_webapp.Migrations
{
    using luke_sample_webapp.Models;
    using System.Data.Entity.Migrations;


    internal sealed class Configuration : DbMigrationsConfiguration<luke_sample_webapp.Models.LukesContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "SampleEF6.Models.EFContext";
        }

        protected override void Seed(luke_sample_webapp.Models.LukesContext context)
        {
            context.Contacts.AddOrUpdate(
              p => p.Name,
              new Contact { Name = "João Sousa", Address = "Street x", City = "Porto", Country = "Portugal" },
              new Contact { Name = "Steve Jon", Address = "Street y", City = "Porto", Country = "Portugal" },
              new Contact { Name = "Peter", Address = "Street z", City = "Porto", Country = "Portugal" }
            );
        }
    }
}