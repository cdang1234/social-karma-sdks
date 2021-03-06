namespace SocialKarma;

using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

public class Client
{

  public Client(string apiKey)
  {
    APIKey = apiKey;
  }

  // Properties.
  public string APIKey { get; set; }
  
  public async Task<JObject> SubmitReport(string reportedUserId, string reportingUserId, string title, string description, int queue)
  {
    var url = "https://api.socialkarma.xyz/api/v1/report";
    var client = new HttpClient();
    client.DefaultRequestHeaders.Add("Auth", this.APIKey);

    SubmitReportRequest request = new SubmitReportRequest();
    request.ReportedUserId = reportedUserId;
    request.ReportingUserId = reportingUserId;
    request.Title = title;
    request.Description = description;
    request.Queue = queue; 

    var reqJson = JsonConvert.SerializeObject(request);
    var body = new StringContent(reqJson);

    var response = await client.PostAsync(url, body);

    // extract response body as json and return it
    string result = response.Content.ReadAsStringAsync().Result;
    JObject respJson = JObject.Parse(result);
    return respJson;
  }
}

public class SubmitReportRequest
{

    // field variable
    public int Queue;
    public string ReportedUserId, ReportingUserId, Title, Description;
}
