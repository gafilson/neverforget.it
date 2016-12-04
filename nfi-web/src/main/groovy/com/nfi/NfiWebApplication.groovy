package com.nfi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import java.util.Arrays;

@SpringBootApplication
public class NfiWebApplication {

	public static void main(String[] args) {

    SpringApplication.run(NfiWebApplication.class, args);

    ApplicationContext ctx = SpringApplication.run(NfiWebApplication.class, args);

    System.out.println("Let's inspect the beans provided by Spring Boot:");

    String[] beanNames = ctx.getBeanDefinitionNames();
    Arrays.sort(beanNames);

    for (String beanName : beanNames) {
      System.out.println(String.format("Found bean: %s", beanName));
    }

	}
}

