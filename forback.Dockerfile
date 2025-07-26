FROM openjdk:17
WORKDIR /app
COPY target/chatbot-backend.jar
chatbot.jar
EXPOSE 8080
ENTRYPOINT["java","-jar","chatbot.jar"]