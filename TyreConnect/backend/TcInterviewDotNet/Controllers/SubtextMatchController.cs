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

        [HttpGet]
        public SubtextMatch Get()
        {
            string text = HttpContext.Request.Query["text"].ToString();
            string subtext = HttpContext.Request.Query["subtext"].ToString();

            CheckData(text, subtext);
            List<int> indexes = GetMatchIndxs(text, subtext);
            
            return new SubtextMatch{
                Text = text,
                Subtext = subtext,
                Indexes = indexes
            };
        }

        [NonAction]
        public List<int> GetMatchIndxs(String text, String subtext) {
            text = text.ToLower();
            subtext = subtext.ToLower();
            List<int> indexes = new List<int>();

            for (int index = 0;; index += subtext.Length) {
                index = text.IndexOf(subtext, index);
                if (index == -1)
                    break;
                indexes.Add(index);
            }

            return indexes;
        }

        [NonAction]
        public void CheckData(String text, String subtext) {
            if (text == null || subtext == null || text == "" || subtext == "" ) {
                throw new ArgumentException("Please enter values for Text and Subtext");
            } else if (text.Length < subtext.Length) {
                throw new ArgumentException("Subtext cannot be shorter than Text");
            }
        }
    }
}
