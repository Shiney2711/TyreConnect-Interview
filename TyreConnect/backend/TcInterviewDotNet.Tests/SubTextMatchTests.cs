using System;
using Xunit;
using TcInterviewDotNet.Controllers;
using System.Collections.Generic;

namespace TcInterviewDotNet.UnitTests.Controllers
{
    public class SubTextMatchTests
    {
        [Fact]
        public void TestNullText()
        {
            var subTextMatch = new SubtextMatchController();
            Assert.Throws<ArgumentException>(() => subTextMatch.CheckData(null, "subtext")); 
        }

        [Fact]
        public void TestNullSubtext()
        {
            var subTextMatch = new SubtextMatchController();
            Assert.Throws<ArgumentException>(() => subTextMatch.CheckData("text", null)); 
        }

        [Fact]
        public void TestOneMatch()
        {
            var subTextMatch = new SubtextMatchController();
            List<int> indexes = subTextMatch.GetMatchIndxs("test", "es");
            List<int> expectedResult = new List<int>(){1};
            Assert.Equal(expectedResult, indexes);
        }

        [Fact]
        public void TestManyMatch()
        {
            var subTextMatch = new SubtextMatchController();
            List<int> indexes = subTextMatch.GetMatchIndxs("this is a test that will have more than 1 result", "i");
            List<int> expectedResult = new List<int>(){2,5,21};
            Assert.Equal(expectedResult, indexes);
        }

        [Fact]
        public void TestDiffCases()
        {
            var subTextMatch = new SubtextMatchController();
            List<int> indexes = subTextMatch.GetMatchIndxs("TEXT with DiFeRent CAses", "xT Wi");
            List<int> expectedResult = new List<int>(){2};
            Assert.Equal(expectedResult, indexes);
        }
    }
}


