using SocialKarma;
using Newtonsoft.Json.Linq;

class Program
{
    static void Main(string[] args)
    {
      SocialKarma.Client client = new SocialKarma.Client("22f30b08-b169-11ec-b909-0242ac120002");
      JObject json = client.SubmitReport("123", "20", "title", "description", 1).GetAwaiter().GetResult();
      Console.WriteLine(json);
    }
}
