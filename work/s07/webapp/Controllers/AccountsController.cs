
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapp.Models;
using webapp.Services;


namespace Webapp.Controller
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountController : ControllerBase
    {

        public AccountController(JsonFileAccountService JsonFileAccountService)
        {
            this.JsonFileAccountServices = JsonFileAccountService;
        }

        public JsonFileAccountService JsonFileAccountServices { get; }

        [HttpGet]
        public IEnumerable<Account> Get()
        {
            return JsonFileAccountServices.GetAccounts();
        }


        [HttpGet("{number}")]
        public ActionResult<Account> GetByNumber(int number)
        {
            Account result = null;
            foreach (var account in Get())
            {
                if (account.Number == number)
                {
                    result = account;
                }
            }
            if (result == null)
            {
                return NotFound();
            }

            return result;

        }
    }
}
