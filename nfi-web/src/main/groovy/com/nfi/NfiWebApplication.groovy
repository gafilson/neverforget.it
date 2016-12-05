package com.nfi

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Import
import springfox.documentation.builders.ApiInfoBuilder
import springfox.documentation.service.ApiInfo
import springfox.documentation.spi.DocumentationType
import springfox.documentation.swagger2.annotations.EnableSwagger2

import static springfox.documentation.builders.PathSelectors.regex
import springfox.documentation.spring.web.plugins.Docket

@SpringBootApplication
@EnableSwagger2
@Import([springfox.documentation.spring.data.rest.configuration.SpringDataRestConfiguration])
class NfiWebApplication {

	static void main(String[] args) {
		SpringApplication.run NfiWebApplication, args
	}

	@Bean
	public Docket newsApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.groupName("nfi")
				.apiInfo(apiInfo())
				.select()
				.paths(regex("/.*"))
				.build();
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("NFI Rest")
				.description("NFI Rest")
				.version("0.1")
				.build();
	}
}
