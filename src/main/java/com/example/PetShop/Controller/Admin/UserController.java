package com.example.PetShop.Controller.Admin;


import com.example.PetShop.Entities.Users;
import com.example.PetShop.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("admin/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/getAll")
    public List<Users> getAllUser(){
        return userService.getAllUser();
    }

    @PostMapping("/add")
    public Users addUser(@RequestBody Users user){
        ;return userService.saveUser(user);
    }
}
