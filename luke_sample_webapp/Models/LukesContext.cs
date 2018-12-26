using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace luke_sample_webapp.Models
{
    public class LukesContext:DbContext
    {
        public LukesContext(): base("name=DefaultConnection")
        {
            base.Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<Contact> Contacts { get; set; }
    }
}