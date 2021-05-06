using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TcInterviewDotNet.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubtextMatchController : ControllerBase
    {
        private readonly ILogger<SubtextMatchController> _logger;

        public SubtextMatchController(ILogger<SubtextMatchController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public SubtextMatch Get()
        {
            string text = HttpContext.Request.Query["text"].ToString();
            string subtext = HttpContext.Request.Query["subtext"].ToString();

            if (text == null || subtext == null || text == "" || subtext == "" ) {
                throw new ArgumentException("Please enter values for Text and Subtext");
            } else if (text.Length < subtext.Length) {
                throw new ArgumentException("Subtext cannot be shorter than Text");
            }

            List<int> indexes = new List<int>();

            for (int index = 0;; index += subtext.Length) {
                index = text.IndexOf(subtext, index);
                if (index == -1)
                    break;
                Console.WriteLine(index);
                indexes.Add(index);
            }

            return new SubtextMatch{
                Text = text,
                Subtext = subtext,
                Indexes = indexes
            };
        }
    }
}
