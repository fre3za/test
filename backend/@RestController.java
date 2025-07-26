@RestController
@RequestMapping("/api")
public class chatcontroller{
    @PostMapping("/chat")
    public String chat(@RequestParam String message , @RequestParam(required = false)Integer conversationId){
        return "this is a dummy Ai response for : " +  message;
    }
}