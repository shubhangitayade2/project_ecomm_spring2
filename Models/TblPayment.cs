using System;
using System.Collections.Generic;

#nullable disable

namespace EcommerceWebApi.Models
{
    public partial class TblPayment
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? CardNumber { get; set; }
        public string StreedAddress { get; set; }
        public string City { get; set; }
        public int? ZipCode { get; set; }
        public string Email { get; set; }
    }
}
