using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EcommerceWebApi.Models;
namespace EcommerceWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        EcommerceDBContext db;

        public PaymentController(EcommerceDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<TblPayment> GetPayments()
        {
            return db.TblPayments;
        }
        [HttpPost]
        public string Post([FromBody] TblPayment payment)
        {
            db.TblPayments.Add(payment);
            db.SaveChanges();
            return "success";
        }

    }
    



}
