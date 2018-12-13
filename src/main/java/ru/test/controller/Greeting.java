package ru.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class Greeting {

    @RequestMapping("/greet")
    public String getGreeting(@RequestParam("name") String name, Model model) {
        model.addAttribute("name", name);
        return "greeting";
    }

    @RequestMapping("/hello")
    public String getHello(Model model) {
        model.addAttribute("name", "Username");
        return "hello";
    }

    @GetMapping("/")
    public String getAuth() {
        return "auth";
    }
}
