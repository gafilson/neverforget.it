package com.nfi.com.nfi.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 * Created by glennfilson on 12/3/16.
 */
@RestController
public class TestController {

  @RequestMapping
  public String index() {
    return "HEY I AM TEH INDEX!";
  }
}
