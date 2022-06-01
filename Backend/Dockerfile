# syntax=docker/dockerfile:1

FROM openjdk:11
COPY . /usr/src/main/java/com/Backend/Backend
WORKDIR /usr/src/main/java/com/Backend/Backend
RUN javac Main.java
CMD ["java", "Main"]