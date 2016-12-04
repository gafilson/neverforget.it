package com.nfi.controllers

import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping

import java.util.concurrent.atomic.AtomicLong;


@RestController
public class TestController {

  static class TestResponse {

    String name
    long value

    TestResponse(String name) {
      this.name = "Hello again, ${name}!"
      this.value = counter.incrementAndGet()
    }

    static AtomicLong counter = new AtomicLong()

  }

  @RequestMapping(path = "/test", method = RequestMethod.GET)
  public TestResponse index(@RequestParam(value="name", defaultValue="World") String name) {
    return new TestResponse(name);
  }
}
