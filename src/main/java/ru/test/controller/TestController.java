package ru.test.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.test.bean.Message;

@RestController
public class TestController {

    @RequestMapping("/test")
    public Message getTestMessage() {
        Message message = new Message();
        message.setNumber(1);
        message.setText("Hello");
        return message;
    }
}
