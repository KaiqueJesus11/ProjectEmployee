using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;

namespace WebSite

{
    public static class EmployeeClient
    {
        public static HttpClient WebApiClient = new HttpClient();

        static EmployeeClient()
        {
            WebApiClient.BaseAddress = new Uri("https://localhost:44339/api/");
            WebApiClient.DefaultRequestHeaders.Clear();
            WebApiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
    }
}