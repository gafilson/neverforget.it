package com.nfi

import org.jsondoc.spring.boot.starter.EnableJSONDoc
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
@EnableJSONDoc
class NfiWebApplication {

	static void main(String[] args) {
		SpringApplication.run NfiWebApplication, args
	}
}
