@configuration 
public class corsConfig{
    @Bean 
    public webMvcConfigurer corsConfigurer(){
        return registry-> registry.addMapping("/**").allowedOrigins("*").allowedMethods("*");
    }
}